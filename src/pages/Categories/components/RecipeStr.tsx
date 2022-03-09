import React from 'react'
import {
  Box,
  Link,
  Image,
  Heading,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'

interface Props {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

const RecipeStr: React.FC<Props> = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <Box key={idMeal}>
      <GridItem
        className="cat-col"
        border={'1px solid'}
        borderColor={useColorModeValue('pink.300', 'pink.500')}
        as={Link}
        href={`/recipes/${strMeal}`}
      >
        <Heading className="g-t">{strMeal}</Heading>
        <Image src={strMealThumb} borderRadius={'10px'} />
      </GridItem>
    </Box>
  )
}

export default RecipeStr
