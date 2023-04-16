import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
        const [email, setEmail] = useState("");
    return (
        <Container py={'16'} h={"90vh"}>
            <form action="">
                <Heading children="forget password" my="16" textTransform={'uppercase'} textAlign={['center', 'left']}/>
                <VStack spacing={'8'}>
                <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@email.com"
                type="email"
                focusBorderColor="yellow.500"
              />
              <Button type='submit' colorScheme='yellow' w={'full'}>submit</Button>
                </VStack>
           
            </form>
        </Container>
    );
}

export default ForgetPassword;
