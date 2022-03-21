import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const domElement = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0] // Nos ayuda a saber si está en el viewport
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(domElement.current)
    })
  }, [domElement])

  return [show, domElement]
}
