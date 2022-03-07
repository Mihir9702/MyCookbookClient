import {
  GridItem,
  useColorModeValue,
  Heading,
  Button,
  Link,
  Image,
  Text
} from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Card } from '../interfaces'

const GridCardCategory: FC<Card> = ({ _id, title, image, description }) => {
  return (
    <GridItem className="col">
      <Heading className="g-t">{title}</Heading>
      <Image src={image} borderRadius={'10px'} />
      <Text className="p">{description}</Text>
      <>
        <Button
          as={Link}
          className="link"
          href={`/categories/${title}`}
          bg={useColorModeValue('pink.300', 'gray.700')}
          boxShadow={'0 5px 5px 0 black'}
          _hover={{
            textDecor: 'none',
            bg: useColorModeValue('pink.400', 'pink.500')
          }}
        >
          {title}
        </Button>
      </>
    </GridItem>
  )
}

export default GridCardCategory
