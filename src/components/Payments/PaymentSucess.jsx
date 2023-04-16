import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom'
import {RiCheckboxCircleFill} from 'react-icons/ri'
const PaymentSucess = () => {
    return (
        <Container h = "90vh" p = "16">
            <Heading my="8">
                You have Pro Pack
            </Heading>
            <VStack boxShadow={'lg'} pb={'16'} alignItems={'center'} borderRadius={'lg'}>
            <Box bg={'yellow.400'} padding={'4'} css= {{borderRadius: "8px 8px 0 0 "}} w="full">
                    <Text color = "black" children="Payment Success" />
                </Box>
                <Box p = "4">
                    <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
                        <Text>
                            congratulation you are a pro member you have access to all the premium contents
                        </Text>
                        <Heading size ="4xl">
                            <RiCheckboxCircleFill/>
                        </Heading>
                    </VStack>
                </Box>

                <Link to ="/profile">
                <Button variant={'ghost'} >
                    Go to profile                </Button>
                </Link>

                <Heading size = "xs" >
                    refuences: fksajdfkljsdklfjkl
                </Heading>
            </VStack>

        </Container>
    );
}

export default PaymentSucess;
