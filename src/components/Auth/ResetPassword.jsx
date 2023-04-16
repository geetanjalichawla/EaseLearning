import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
        const [password, setPassword] = useState("");
        const p = useParams();
        console.log(p.token);

    return (
        <Container py={'16'} h={"90vh"}>
            <form action="">
                <Heading children="Reset password" my="16" textTransform={'uppercase'} textAlign={['center', 'left']}/>
                <VStack spacing={'8'}>
                <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                focusBorderColor="yellow.500"
              />
              <Button type='submit' colorScheme='yellow' w={'full'}>Reset passowd</Button>
                </VStack>
           
            </form>
        </Container>
    );
}

export default ResetPassword;
