import React from 'react'
import { Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import logo from 'public/logo.svg'

const Logo: React.FC = () => {
  return (
    <Text
      display={'flex'}
      justifyContent={'center'}
      align={'center'}
      as={Link}
      href="/"
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
    >
      <Image
        src={logo}
        alt="logo"
        left={1}
        top={1}
        transform={'scale(0)'}
        w={'4em'}
        position={'absolute'}
      />
    </Text>
  )
}

export default Logo
