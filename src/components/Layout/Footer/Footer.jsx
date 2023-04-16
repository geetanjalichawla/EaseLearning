import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { DiGithub} from 'react-icons/di';
import { TiSocialYoutubeCircular , TiSocialInstagramCircular  } from 'react-icons/ti';

const Footer = () => {
    return (
        <Box bg={'blackAlpha.900'} minH={'10vh'} >
            <Stack direction={['column', 'row']}>
                <VStack alignItems={['center', 'flex-start']} width={'full'}>
                    <Heading 
                    children="All Rights Reserverd"
                    color={'white'}
                    />
                                        <Heading 
                    children="Geetanjali Chawla"
                    color={'yellow'}
                    fontFamily={'body'}
                    size={'sm'}
                    />

                </VStack>
                
                <HStack spacing={['2','10']} justifyContent={'center'} color={'white'} fontSize={'50'}>
                    <a href="https://www.youtube.com/@EASELearning" target={'blank'}>
                       <TiSocialYoutubeCircular/> 
                    </a>
                    <a href="https://www.instagram.com/ease_learning/?igshid=iinhrohixh1" target={'blank'}>
                       <TiSocialInstagramCircular/> 
                    </a>
                    <a href="https://github.com/geetanjalichawla" target={'blank'}>
                       <DiGithub/> 
                    </a>
                </HStack>
            </Stack>
        </Box>
    );
}

export default Footer;
