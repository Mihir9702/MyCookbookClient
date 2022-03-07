import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Icon,
} from '@chakra-ui/react'
import { ExternalLinkIcon, SettingsIcon } from '@chakra-ui/icons'
import Logo from 'src/global/Logo'
import panda from 'src/global/panda.png'
import { FaBookOpen } from 'react-icons/fa'

const LoggedInNavbar = () => {
  const colorModeValue = useColorModeValue('gray.100', 'gray.700')
  return (
    <>
      <Box bg={colorModeValue} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Logo />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton rounded={'full'} cursor={'pointer'}>
                  <Avatar size={'sm'} src={panda} />
                </MenuButton>
                <MenuList
                  alignItems={'center'}
                  border={'1px'}
                  borderColor={'blackAlpha.500'}
                >
                  <br />
                  <Center>
                    <Avatar size={'2xl'} src={panda} />
                  </Center>
                  <br />
                  <Center>
                    <Text fontWeight={'medium'}>Username</Text>
                  </Center>
                  <br />
                  <MenuDivider borderColor={'gray.600'} />

                  <MenuItem justifyContent={'center'}>
                    <Icon as={FaBookOpen} pos={'relative'} mr={'auto'} />
                    <Link href="#" pos={'absolute'}>
                      My Cookbooks
                    </Link>
                  </MenuItem>
                  <MenuItem justifyContent={'center'}>
                    <SettingsIcon pos={'relative'} mr={'auto'} />
                    <Link pos={'absolute'} href="#">
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem justifyContent={'center'}>
                    <ExternalLinkIcon pos={'relative'} mr={'auto'} />
                    <Link pos={'absolute'} href="#">
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default LoggedInNavbar
