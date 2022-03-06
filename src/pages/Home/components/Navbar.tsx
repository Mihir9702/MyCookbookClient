import React, { FC } from 'react'
import {
	Box,
	Flex,
	IconButton,
	Collapse,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { Center } from '@chakra-ui/react'

const Navbar: FC = () => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Box w={'100vw'}>
			<Flex
				bg={useColorModeValue('white', 'gray.900')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
						pos={'relative'}
						left={8}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Center
						display={{ base: 'none', md: 'flex' }}
						justifyContent={'center'}
						alignItems={'center'}
						position={'relative'}
						w={'auto'}
						right={0}
					>
						<DesktopNav />
					</Center>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}

export default Navbar
