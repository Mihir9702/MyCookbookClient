import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MySpinner from 'src/global/Spinner'
import Header from 'src/global/Header'
import RecipeStr from './components/RecipeStr'
import { useParams } from 'react-router-dom'
import { url } from 'src/services/url'
import { Center, Grid } from '@chakra-ui/react'
import type { Category } from 'src/global/interfaces'
import './Category.scss'

const CategoryPage: React.FC = () => {
  const { category } = useParams()
  const [data, setData] = useState<Category>()

  useEffect(() => {
    axios
      .get(`${url}/categories/${category}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Center flexDir={'column'}>
        <Header title={data?.title} />
        <Grid className="cat-grid">
          {data?.recipes.length === 0 ? (
            <MySpinner />
          ) : (
            data?.recipes.map(recipe => (
              <RecipeStr key={recipe.idMeal} {...recipe} />
            ))
          )}
        </Grid>
      </Center>
    </>
  )
}

export default CategoryPage
