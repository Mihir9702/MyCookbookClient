import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../services/url'
import type { Recipe } from '../../global/interfaces'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

const RecipePage = () => {
  const [data, setData] = useState<Recipe>()
  const { recipe } = useParams()

  useEffect(() => {
    axios
      .get(`${url}/api/recipes/${recipe}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Heading>{data?.title}</Heading>
    </>
  )
}

export default RecipePage
