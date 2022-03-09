import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MySpinner from 'src/global/Spinner'
import type { Recipe } from 'src/global/interfaces'
import { url } from 'src/services/url'
import {
  Flex,
  Grid,
  Link,
  Image,
  Heading,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'

const RecipesPage = () => {
  const [data, setData] = useState<Recipe[]>([])

  useEffect(() => {
    axios
      .get(`${url}/recipes`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Flex flexDir={'column'} justify={'center'} align={'center'}>
        <h2 className="cat-t">Recipes</h2>
        <Grid className="cat-grid">
          {data.length === 0 ? (
            <MySpinner />
          ) : (
            data.map(recipe => (
              <GridItem
                key={recipe._id}
                className="cat-col"
                border={'1px solid'}
                borderColor={useColorModeValue('pink.300', 'pink.500')}
                as={Link}
                href={`/recipes/${recipe.title}`}
              >
                <Heading className="g-t">{recipe.title}</Heading>
                <Image src={recipe.image} borderRadius={'10px'} />
              </GridItem>
            ))
          )}
        </Grid>
      </Flex>
    </>
  )
}

export default RecipesPage
