import { Box, Button, Container, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function ChangePassword() {
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Container py={'16'} minH={'90vh'}>
        <form onSubmit={(e)=>e.preventDefault()}  >
            <Heading textTransform={'uppercase'} my={'16'} textAlign={['center' , 'left']}>
                Change Password
            </Heading>
            <Box my={'4'}>
              <FormLabel htmlFor="password" children="Old Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setpassword(e.target.value)}
                placeholder="password"
                type="password"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="confirmPassword" children="Confirm Password" />
              <Input
                required
                id="confirmPassword"
                value={confirmPassword}
                onChange={e => {setConfirmPassword(e.target.value)}}
                placeholder="Confirm Password"
                type="password"
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

export default ChangePassword;