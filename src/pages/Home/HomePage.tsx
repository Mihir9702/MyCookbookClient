import React, { useState } from 'react'
import LoggedInNavbar from '../../global/LoggedInNavbar'
import WithSubnavigation from './components/Navbar'
import { Container, Heading } from '@chakra-ui/react'
import './HomePage.scss'

const HomePage = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	return (
		<div>
			<Container
				className="title-container"
				width={'min-content'}
				pos={'absolute'}
				background={'blue'}
			>
				<Heading
					className="title"
					fontSize={{ sm: '6xl', md: '6xl', lg: '6xl', base: '4xl' }}
					fontStyle={'italic'}
					textShadow={'0 5px 5px gray'}
					fontFamily={'Volitaire'}
					whiteSpace={'nowrap'}
					pos={'absolute'}
					top={72}
					left={0}
					transform={{
						base: 'translate(25%)',
						md: 'translate(100%)',
						sm: 'translate(50%)',
						lg: 'translate(200%)',
					}}
				>
					My Cookbook
				</Heading>
			</Container>
			{loggedIn ? <LoggedInNavbar /> : <WithSubnavigation />}
			<br />
			<button onClick={() => setLoggedIn(!loggedIn)}>Show</button>
			{/* <Logo /> */}
		</div>
	)
}

export default HomePage
