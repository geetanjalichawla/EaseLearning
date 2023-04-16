import React from 'react';
import {  Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
const Subscribe = () => {
    return (
        <Container h="90vh" p ="16">
            <Heading children ="Welcome" my={'8'} textAlign={'center'}/>
            <VStack
            boxShadow={'lg'}
            alignItems={'stretch'}
            borderRadius={'lg'}
            spacing={'0'}
             >
                <Box bg={'yellow.400'} padding={'4'} css= {{borderRadius: "8px 8px 0 0 "}}>
                    <Text color ={'black'} children={"Pro pack - ₨. 2000"}/>

                </Box>
                <Box p={'4'} >
                <VStack textAlign={'center'} px={'8'} mt={'4'} spacing="8">
                <Text children={"Join pro pack and get access to all content"}/>
                <Heading size={'md'} children= " ₨. 2000 Only" />
                </VStack>
                <Button my="8" w= "full" colorScheme='yellow'  >
                    Buy Now
                </Button>
                </Box >

                <Box bg={'blackAlpha.600'} padding={'4'} css= {{borderRadius: "0 0 8px 8px "}}>
                <Heading color={'white'} textTransform={'uppercase'} size={'sm'} children ="100% refund at Cancellation" />
                <Text  color={'blackAlpha.700'} size={"2xs"} children={"** Terms and condition applied ** "}/>

                </Box>
            </VStack>
        </Container>
    );
}

export default Subscribe;
