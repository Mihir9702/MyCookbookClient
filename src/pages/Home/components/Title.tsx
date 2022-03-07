import React, { FC } from 'react'
import { Heading, useColorModeValue } from '@chakra-ui/react'

interface Props {
  letter: string
}

const TitleLetter: FC<Props> = ({ letter }) => {
  return (
    <span className="title">
      <Heading
        fontWeight={600}
        pt={{ base: 0, md: 24, xl: 0, lg: 0 }}
        fontSize={{ base: '8xl', sm: '8xl', md: '8xl' }}
        whiteSpace={'nowrap'}
        lineHeight={'110%'}
        textShadow={'0 5px 5px'}
        fontFamily={'Marck Script, cursive'}
        color={useColorModeValue('gray.700', 'gray.200')}
        pr={letter === 'y' ? 4 : 0}
      >
        {letter}
      </Heading>
    </span>
  )
}

const Title: FC = () => {
  return (
    <>
      <TitleLetter letter="M" />
      <TitleLetter letter="y" />
      <TitleLetter letter="C" />
      <TitleLetter letter="o" />
      <TitleLetter letter="o" />
      <TitleLetter letter="k" />
      <TitleLetter letter="b" />
      <TitleLetter letter="o" />
      <TitleLetter letter="o" />
      <TitleLetter letter="k" />
    </>
  )
}

export default Title
