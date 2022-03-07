import React, { useState, useEffect, FC } from 'react'
import axios from 'axios'
import { Grid, Heading } from '@chakra-ui/react'
import type { CategoryItem } from './interfaces'
import CategoriesCard from './components/CategoriesCard'
import './CategoriesPage.scss'

const CategoriesPage: FC = () => {
  const [data, setData] = useState<CategoryItem[]>([])
  useEffect(() => {
    axios
      .get('http://localhost:5002/api/categories')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Heading className="cat-t">Categories</Heading>
      <Grid className="grid">
        {data.map(category => (
          <CategoriesCard key={category._id} path="/categories" {...category} />
        ))}
      </Grid>
    </>
  )
}

export default CategoriesPage
