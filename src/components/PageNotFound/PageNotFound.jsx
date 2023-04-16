import {  Box, Button, Container, HStack, Heading, Image, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import vg from '../../asests/images/hamser.png'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return (
<Container w={"100vw"} h="86vh" py={"16"}>
<Stack direction={["column",'column','column','row']}
                height="100%"
                width={'100%'}
                
                justifyContent={'center'}
                alignItems={"center"}
                spacing={['0', '0', '0', '56']}
                >
                   <VStack minW={'50%'} alignItems={"center"}>

                         <Heading minW={'50%'} children="We are lost in study" size={['2xl', 'xl']} textAlign={'center'}/>
                         <Link to ="/home">
                            <Button variant={'link'}  colorScheme='yellow' children="lets go back to home "/>
                         </Link>
                   </VStack>

                        
                        <Image minW={'50%'} className="vector-graphics" boxSize={['sm','md']}  src={vg} objectFit={"contain"} />
                        
                </Stack>
                
</Container>
    );
}

export default PageNotFound;
 