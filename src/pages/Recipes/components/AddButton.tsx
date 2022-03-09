import React from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const AddButton: React.FC = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Button colorScheme="teal" variant="outline">
        <AddIcon />
      </Button>
    </Stack>
  )
}

export default AddButton
