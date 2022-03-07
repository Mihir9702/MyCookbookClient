import React, { useState, useEffect, FC } from 'react'
import axios from 'axios'
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import './CategoriesPage.scss'

interface CategoryItem {
  _id: string
  title: string
  image: string
  description: string
}

const CategoriesPage: FC = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([])
  useEffect(() => {
    axios
      .get('http://localhost:5002/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Heading className="c-t">Categories</Heading>
      <Grid className="grid">
        {categories.map(category => (
          <Category key={category._id} {...category} />
        ))}
      </Grid>
    </>
  )
}

const Category: FC<CategoryItem> = ({ _id, title, image, description }) => {
  return (
    <GridItem
      className="col"
      border={'1px solid'}
      borderColor={useColorModeValue('pink.300', 'pink.500')}
      boxShadow={"5px 5px 5px 5px useColorModeValue('pink.300', 'pink.500')"}
    >
      <Heading className="g-t">{title}</Heading>
      <Image src={image} borderRadius={'10px'} />
      <Text className="p">{description}</Text>
      <>
        <Link
          as={Button}
          className="link"
          bg={useColorModeValue('pink.300', 'gray.700')}
          boxShadow={'0 5px 5px 0 black'}
          _hover={{
            textDecor: 'none',
            bg: useColorModeValue('pink.400', 'pink.500')
          }}
        >
          {title}
        </Link>
      </>
    </GridItem>
  )
}

export default CategoriesPage
