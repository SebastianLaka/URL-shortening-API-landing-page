import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ShortenedLinks {
  id: string
  originalUrl: string
  shortUrl: string
}

export const useURLStore = defineStore('url', () => {
  const links = ref<ShortenedLinks[]>(JSON.parse(localStorage.getItem('links')) || [])
  const load = ref(false)
  const errorMessage = ref<string | null>(null)
  const hasLinks = computed(() => links.value.length > 0)

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const generateRandomHash = (): string => {
    return Math.random().toString(36).substring(2, 8)
  }

  const shortenUrl = async (inputUrl: string) => {
    errorMessage.value = ''
    if (!inputUrl.trim()) {
      errorMessage.value = 'Please add a link'
      return;
    }
    let formattedUrl = inputUrl.trim()
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`
    }
    if (!validateUrl(formattedUrl)) {
      errorMessage.value = 'Please enter a valid URL'
      return
    }
    load.value = true
    await new Promise((resolve) => setTimeout(resolve, 400))
    const newLink: ShortenedLinks = {
      id: Date.now().toString(),
      originalUrl: formattedUrl,
      shortUrl: `https://rel.ink/${generateRandomHash()}`,
    }
    links.value.unshift(newLink)
    localStorage.setItem('links', JSON.stringify(links.value))

    load.value = false
  }

  return { links, load, errorMessage, hasLinks, shortenUrl }
})
