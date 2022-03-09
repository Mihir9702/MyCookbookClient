import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import FormInput from 'src/global/FormInput'
import { get } from 'src/services/service'

interface UserData {
  _id: string
  name: string
  username: string
  cookbooks: string[]
}

const SettingsPage: React.FC = () => {
  const [data, setData] = useState<UserData>()
  const [dataCopy, setDataCopy] = useState<UserData>()
  const [password, setPassword] = useState('')
  const username = localStorage.getItem('username')

  const handleSubmit = () => {
    return []
  }

  const getUser = async () => {
    const response = await get(`/user/${username}`)
    setData(response?.data)
    setDataCopy(response?.data)
  }

  useEffect(() => {
    getUser()
  }, [])

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
      <form onSubmit={handleSubmit}>
        <Box boxSize={'xs'}>
          <Stack spacing={4}>
            <FormInput label="Name" value={data?.name} setValue={setData} />
            <FormInput
              label="Username"
              value={data?.username}
              setValue={setData}
            />
            <FormInput
              label="Password"
              value={password}
              setValue={setPassword}
            />
          </Stack>
        </Box>
      </form>
    </Center>
  )
}

export default SettingsPage
