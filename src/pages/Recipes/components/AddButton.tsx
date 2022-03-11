import React, { useState } from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

interface Props {
  handleCart: () => void
}

const AddButton: React.FC<Props> = ({ handleCart }) => {
  const [a, A] = useState(false)

  const removeButton = () => {
    A(!a)
    handleCart()
  }

  return (
    <Stack direction="row" spacing={4}>
      <Button colorScheme="teal" variant="outline" onClick={removeButton}>
        <AddIcon />
      </Button>
    </Stack>
  )
}

export default AddButton
