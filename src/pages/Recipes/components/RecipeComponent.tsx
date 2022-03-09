import React from 'react'
import Guide from './Guide'
import Ingredient from './Ingredient'
import AddButton from './AddButton'
import type { Recipe } from 'src/global/interfaces'
import {
  Box,
  Text,
  List,
  Image,
  Stack,
  VStack,
  Heading,
  Container,
  SimpleGrid,
  StackDivider,
  useColorModeValue
} from '@chakra-ui/react'

interface Props {
  data: Recipe | undefined
}

const RecipeComponent: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Image
            rounded={'md'}
            alt={`image of ${data?.title}`}
            src={data?.image}
            fit={'contain'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                {data?.title}
              </Heading>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <VStack />
              <Box>
                <Guide text="Instructions" />
                <Text textAlign={'left'}>{data?.instructions}</Text>
              </Box>

              <Box>
                <List spacing={2}>
                  <Guide text="Ingredients" />
                  {data?.ingredients?.map((ingredient, i) => (
                    <Ingredient key={i} ingredient={ingredient} />
                  ))}
                </List>
              </Box>
            </Stack>
            <AddButton />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}

export default RecipeComponent
