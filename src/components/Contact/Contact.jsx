import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <Container minH={'92vh'} py={'20'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children="Connect Us"/>
                <form action="" style={{ width: '100%' }}>
                <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
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
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Message"
              focusBorderColor="yellow.500"
            />
            
          </Box>
            <Button my={'4'} colorScheme='yellow' type='submit'>send</Button>
            <Box my={'4'}>
              Request for a course{' '}
            <Link to="request">
            <Button my={'4'} colorScheme='yellow' variant={'link'} type='submit'>Click</Button>
                 </Link>
                 {' '}here
                 </Box>

        </form>
            </VStack>
        </Container>
    );
}

export default Contact;
