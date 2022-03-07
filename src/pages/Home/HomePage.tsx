import React, { FC } from 'react'
import MainContent from './components/MainContent'
import { Center, Image, Box, Stack } from '@chakra-ui/react'
import waves from 'public/waves.svg'

const HomePage: FC = () => {
  return (
    <>
      <Center pos={'relative'} w={'100%'} h={'100%'}>
        <MainContent />
      </Center>
      <Box
        pos={'absolute'}
        bottom={0}
        pointerEvents={'none'}
        overflowY={'hidden'}
      >
        <Image src={waves} className={'wavesImage'} />
      </Box>
    </>
  )
}

export default HomePage
