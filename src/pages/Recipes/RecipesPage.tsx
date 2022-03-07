import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Flex,
  Grid,
  GridItem,
  Link,
  Spinner,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import type { Recipe } from '../../global/interfaces'

const RecipesPage = () => {
  const [data, setData] = useState<Recipe[]>([])

  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/recipes`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Flex flexDir={'column'} justify={'center'} align={'center'}>
        <h2 className="cat-t">Recipes</h2>
        <Grid className="cat-grid">
          {data.length === 0 ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              color="blue.500"
              emptyColor={useColorModeValue('white', 'gray.700')}
              size="xl"
            />
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
