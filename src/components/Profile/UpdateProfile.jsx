import { Box, Button, Container, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
        <Container py={'16'} minH={'90vh'}>
    <form onSubmit={(e)=>e.preventDefault()}  >
        <Heading textTransform={'uppercase'} my={'16'} textAlign={['center' , 'left']}>
            Upadate Profile
        </Heading>
        <Box my={'4'}>
          <FormLabel htmlFor="name" children="Name" />
          <Input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="name"
            type="text"
            focusBorderColor="yellow.500"
          />
        </Box>
        <Box my={'4'}>
          <FormLabel htmlFor="email" children="Email" />
          <Input
            id="email"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
            placeholder="Email"
            type="email"
            focusBorderColor="yellow.500"
          />
        </Box>

        <Button w='full' type='submit' colorScheme='yellow'>
            Change
        </Button>
    </form>
</Container>

  )
}

export default UpdateProfile