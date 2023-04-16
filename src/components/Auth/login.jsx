import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('');
  const [passwod, setPasswod] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h="full" justifyContent={'center'} spacing={'16'}>
        <Heading children={'Welcome to EASE Learning'} />

        <form action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Adress" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@email.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="passwod" children="Passwod" />
            <Input
              required
              id="passwod"
              value={passwod}
              onChange={e => setPasswod(e.target.value)}
              placeholder="passwod"
              type="passwod"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
          <Link to ="/forgetpassword"><Button fontSize={'sm'} variant={'link'}>forget password</Button></Link>
          </Box>
            <Button my={'4'} colorScheme='yellow' type='submit'>Login</Button>
            <Box my={'4'}>
              New User? < Link to ='/register' ><Button mx="2px" colorScheme='yellow'>Sign in</Button></Link> {"   "} here
              </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
