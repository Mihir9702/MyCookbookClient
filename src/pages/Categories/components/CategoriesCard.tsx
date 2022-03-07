import {
  GridItem,
  useColorModeValue,
  Heading,
  Button,
  Link,
  Image,
  Text,
  Center
} from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Card } from '../../../global/interfaces'

const GridCardCategory: FC<Card> = ({ _id, title, image, description }) => {
  return (
    <GridItem
      className="col"
      as={Link}
      href={`/categories/${title}`}
      _hover={{
        textDecor: 'none'
      }}
    >
      <Heading className="g-t">{title}</Heading>
      <Center>
        <Image src={image} borderRadius={'10px'} />
      </Center>
      <Text className="p">{description}</Text>
      <>
        <Button
          as={Link}
          className="link"
          cursor={'pointer'}
          href={`/categories/${title}`}
          bg={useColorModeValue('pink.300', 'gray.700')}
          boxShadow={'0 5px 5px 0 black'}
          _active={{
            bg: useColorModeValue('pink.400', 'pink.500')
          }}
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
