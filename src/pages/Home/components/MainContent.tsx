import React, { FC } from 'react'
import { Center, Image, Flex } from '@chakra-ui/react'
import { Box, Container, Text, Button, Stack, Link } from '@chakra-ui/react'
import logo from 'public/og-image.png'
import Title from './Title'

const MainContent: FC = () => {
  return (
    <>
      <Container
        w={'100%'}
        h={'100%'}
        display={'flex'}
        justifyContent={'center'}
        zIndex={2}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={36}
        >
          <Center
            pos={'absolute'}
            left={0}
            mx={16}
            px={16}
            my={-32}
            pointerEvents={'none'}
          >
            <Image src={logo} />
          </Center>
          <Flex userSelect={'none'} letterSpacing={3}>
            <Title />
          </Flex>
          <Text
            color={'gray.500'}
            userSelect={'none'}
            fontSize={{
              xl: '1em',
              lg: '1em'
            }}
          >
            Customize your own personal cookbook with recipes <br />
            ranging from breakfast all the way to dessert!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              href="/recipes"
              as={Link}
              colorScheme={'pink.500'}
              bg={'pink.400'}
              rounded={'full'}
              px={6}
              color={'white'}
              _hover={{
                bg: 'pink.500',
                textDecor: 'none'
              }}
            >
              Start Cooking
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default MainContent
