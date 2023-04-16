import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    return (
        <Container minH={'92vh'} py={'20'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children="Request New Course"/>
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
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the Course details...."
              focusBorderColor="yellow.500"
              type='text'
            />
            
          </Box>
            <Button my={'4'} colorScheme='yellow' type='submit'>Request</Button>
            <Box my={'4'}>
             See available courses!{' '}
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

export default Request;
