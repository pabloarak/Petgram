import { useEffect, useState, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState(Array(5).fill({}))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      window
        .fetch('https://petgram-server-pabloarak.vercel.app/categories')
        .then((res) => res.json())
        .then((json) => {
          setCategories(json)
          setLoading(false)
        })
    }, 2000)
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed, loading) => (
    <List fixed={fixed}>
      {categories.map((category, i) => {
        return (
          <Item key={category.id || i}>
            <Category {...category} loading={loading.toString()} />
          </Item>
        )
      })}
    </List>
  )

  return (
    <>
      {renderList(false, loading)}
      {showFixed && renderList(true, loading)}
    </>
  )
}
