import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsiveImage(mobileSrc: string, desktopSrc: string) {
  const currentImage = ref(mobileSrc)

  const updateImage = () => {
    if (window.innerWidth < 992) {
      currentImage.value = mobileSrc
    } else {
      currentImage.value = desktopSrc
    }
  }

  onMounted(() => {
    updateImage() 
    window.addEventListener('resize', updateImage)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateImage) 
  })

  return { currentImage }
}