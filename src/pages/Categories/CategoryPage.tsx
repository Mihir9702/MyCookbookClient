import React, { useState, useEffect } from 'react'
import MySpinner from 'src/components/Spinner'
import Header from 'src/components/Header'
import RecipeStr from './components/RecipeStr'
import { useParams } from 'react-router-dom'
import { Center, Grid } from '@chakra-ui/react'
import { get } from 'src/services/service'
import './Category.scss'

const CategoryPage: React.FC = () => {
  const { category } = useParams()
  const [data, setData] = useState<any>()

  const fetchData = async () => {
    const response = await get(`/categories/${category}`)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Center flexDir={'column'}>
        <Header title={data?.title} />
        <Grid className="cat-grid">
          {data.length === 0 ? (
            <MySpinner />
          ) : (
            data?.map(recipe => <RecipeStr key={recipe._id} {...recipe} />)
          )}
        </Grid>
      </Center>
    </>
  )
}

export default CategoryPage
