'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ClientRouterHandler(): null {
  const path = usePathname()
  const searchParams = useSearchParams()

  const page = searchParams.get('page')
  const shouldScrollToTop = path === '/'

  // Scroll to top
  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo(0, 0)
    }
  }, [path, shouldScrollToTop, page])

  return null
}
