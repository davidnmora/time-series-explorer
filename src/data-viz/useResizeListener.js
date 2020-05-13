import { useEffect } from 'react'

export const useResizeListener = (resizeListener, deps) => {
  useEffect(() => {
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, deps)
}
