import { ref, onMounted, onUnmounted } from 'vue'
export function useIntersectionEntry(targetRef) {
  const isIntersecting = ref(false)
  let observer = null
  onMounted(() => {
    const options = {
      threshold: 0
    }
    const observe = (entries) => {
      const [entry] = entries
      isIntersecting.value = entry.isIntersecting
    }
    observer = new IntersectionObserver(observe, options)
    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
  return {isIntersecting}
}
