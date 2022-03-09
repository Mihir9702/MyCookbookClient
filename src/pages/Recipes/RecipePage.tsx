import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import RecipeComponent from './components/RecipeComponent'
import { url } from 'src/services/url'
import type { Recipe } from 'src/global/interfaces'
import { useParams } from 'react-router-dom'

const RecipePage: FC = () => {
  const [data, setData] = useState<Recipe | undefined>()
  const { recipe } = useParams()

  useEffect(() => {
    axios
      .get(`${url}/recipes/${recipe}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <RecipeComponent data={data} />
    </>
  )
}

export default RecipePage
