import React, { useState, useEffect, FormEvent } from 'react'
import FormInput from 'src/global/FormInput'
import { get, post } from 'src/services/service'
import { Box, Stack, Center, Button, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import { url } from 'src/services/url'
import { useNavigate } from 'react-router-dom'

interface UserData {
  _id: string
  name: string
  username: string
  cookbooks: string[]
}

const SettingsPage: React.FC = () => {
  const [name, setName] = useState(localStorage.getItem('name'))
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const [current, setCurrent] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  // Updating Information
  const handleUpdate = (e: FormEvent) => {
    e.preventDefault()
    if (current) {
      axios
        .post(`${url}/${current}/update`, {
          name: name,
          username: username
        })
        .then(() => {
          // @ts-ignore
          localStorage.setItem('name', name)
          // @ts-ignore
          localStorage.setItem('username', username)
          navigate('/')
          location.reload()
        })
    }
  }

  const handleDelete = () => {
    return []
  }

  // Retrieving Information
  const getUser = async () => {
    const response = await get(`/${username}`)
    console.log(response?.data)
    setCurrent(response?.data.username)
  }

  useEffect(() => {
    getUser()
  }, [])

  // return (
  //   <>
  //     <form onSubmit={handleUpdate}>
  //       <FormInput label="Name" value={name} setValue={setName} />
  //       <FormInput label="Username" value={username} setValue={setUsername} />
  //       <Button type="submit">Submit</Button>
  //     </form>
  //     <Button onClick={handleDelete}>Delete Account</Button>
  //   </>
  // )
  return (
    <Center
      pos={'absolute'}
      bottom={'50vh'}
      left={'50vw'}
      transform={'translate(-50%, 50%)'}
      background={useColorModeValue('gray.100', 'gray.700')}
      borderRadius={'md'}
      boxSize={'md'}
      boxShadow={'2xl'}
    >
      <form onSubmit={handleUpdate}>
        <Box boxSize={'xs'}>
          <Stack spacing={4}>
            <FormInput label="Name" value={name} setValue={setName} />
            <FormInput
              label="Username"
              value={username}
              setValue={setUsername}
            />
            <FormInput
              label="Password"
              value={password}
              setValue={setPassword}
            />
          </Stack>
          <Button
            type="submit"
            w={'50%'}
            transform={'translate(50%)'}
            my={6}
            bg={'transparent'}
            border={'2px solid'}
            borderColor={useColorModeValue('green.400', 'green.300')}
            color={useColorModeValue('green.500', 'green.400')}
            _hover={{
              bg: useColorModeValue('green.500', 'green.400'),
              color: 'white'
            }}
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </Center>
  )
}

export default SettingsPage
