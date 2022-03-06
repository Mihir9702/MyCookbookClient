import React, { FC } from 'react'
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	useColorModeValue,
	Link,
} from '@chakra-ui/react'

const MainContent: FC = () => {
	return (
		<>
			<Container w={'100%'} h={'100%'}>
				<Stack
					as={Box}
					textAlign={'center'}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						textShadow={`0 5px 5px ${useColorModeValue(
							'gray.700',
							'gray.200',
						)}`}
						lineHeight={'110%'}
						color={useColorModeValue('gray.700', 'gray.200')}
					>
						My Cookbook
					</Heading>
					<Text color={'gray.500'}>
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
							colorScheme={'green'}
							bg={'pink.300'}
							rounded={'full'}
							px={6}
							color={'white'}
							_hover={{
								bg: 'pink.400',
								textDecor: 'none',
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
