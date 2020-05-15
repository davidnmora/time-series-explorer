import { useEffect } from 'react'

export const useResizeListener = (resizeListener) => {
  useEffect(() => {
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [resizeListener])
}
