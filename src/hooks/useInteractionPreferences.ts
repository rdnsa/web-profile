import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useInteractionPreferences() {
  const shouldReduceMotion = useReducedMotion()
  const [hasFinePointer, setHasFinePointer] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(any-pointer: fine)')
    const updatePointerCapability = () => setHasFinePointer(mediaQuery.matches)

    updatePointerCapability()
    mediaQuery.addEventListener('change', updatePointerCapability)

    return () => mediaQuery.removeEventListener('change', updatePointerCapability)
  }, [])

  return {
    hasFinePointer,
    shouldReduceMotion: Boolean(shouldReduceMotion),
  }
}
