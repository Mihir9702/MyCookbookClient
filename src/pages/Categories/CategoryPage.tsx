import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Button,
  Link,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'
import type { Category } from './interfaces'

const CategoryPage: FC = () => {
  const [data, setData] = useState<Category>()
  const { category } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:5002/api/categories/${category}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])
  console.log(data)

  return (
    <>
      {data && (
        <Flex flexDir={'column'} justify={'center'} align={'center'}>
          <Heading className="c-t">{data.title}</Heading>
          <Image src={data.image} />
          <Grid>
            {data.recipes.length === 0 ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                color="blue.500"
                emptyColor={useColorModeValue('white', 'gray.700')}
                size="xl"
              />
            ) : (
              data.recipes.map(recipe => (
                <GridItem
                  key={recipe.idMeal}
                  className="col"
                  border={'1px solid'}
                  borderColor={useColorModeValue('pink.300', 'pink.500')}
                  boxShadow={
                    "5px 5px 5px 5px useColorModeValue('pink.300', 'pink.500')"
                  }
                >
                  <Heading className="g-t">{recipe.strMeal}</Heading>
                  <Image src={recipe.strMealThumb} borderRadius={'10px'} />
                  <>
                    <Button
                      as={Link}
                      className="link"
                      href={`/recipes/${recipe.strMeal}`}
                      bg={useColorModeValue('pink.300', 'gray.700')}
                      boxShadow={'0 5px 5px 0 black'}
                      _hover={{
                        textDecor: 'none',
                        bg: useColorModeValue('pink.400', 'pink.500')
                      }}
                    >
                      Read More
                    </Button>
                  </>
                </GridItem>
              ))
            )}
          </Grid>
        </Flex>
      )}
    </>
  )
}

export default CategoryPage
