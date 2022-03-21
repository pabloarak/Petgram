import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const domElement = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0] // Nos ayuda a saber si está en el viewport
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(domElement.current)
  }, [domElement])

  return (
    <Article ref={domElement}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes !
            </Button>
          </>
      }

    </Article>
  )
}
