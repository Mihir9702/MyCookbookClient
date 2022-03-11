import React, { FC } from 'react'
import {
  Link,
  Text,
  Image,
  Button,
  Center,
  Heading,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import type { Card } from 'src/components/interfaces'

const GridCardCategory: FC<Card> = ({ _id, title, image, description }) => {
  return (
    <GridItem
      className="col"
      as={Link}
      rounded={'2xl'}
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
