import React, { FC, useState } from 'react'
import LoggedInNavbar from '../../global/LoggedInNavbar'
import NavBar from './components/Navbar'
import MainContent from './components/MainContent'
import { Button, useColorMode, Center } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const HomePage: FC = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<div>
			<Center w={'100%'} pos={'absolute'} top={2}>
				<Button onClick={toggleColorMode} variant={'ghost'}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>
			</Center>
			{loggedIn ? <LoggedInNavbar /> : <NavBar />}
			<Center pos={'absolute'} w={'100%'} h={'50%'}>
				<MainContent />
			</Center>
		</div>
	)
}

export default HomePage
