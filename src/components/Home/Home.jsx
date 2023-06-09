import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {CgGoogle , CgYoutube} from 'react-icons/cg'
import { SiCoursera , SiUdemy} from 'react-icons/si'
import {DiAws } from 'react-icons/di'
import vg from '../../asests/images/girl.png'
const Home = () => {
    // let vg = "https://ik.imagekit.io/b80sh2n2k/edtechApp/vg?updatedAt=1680708963631";
    let introVideo = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    return (
        <section className='home'>
            <div className="container">
                <Stack direction={["column",'column','column','row']}
                height="100%"
                justifyContent={['center', 'center','center',"flex-end"]}
                alignItems={"center"}
                spacing={['16', '18', '0', '56']}
                >
                    <VStack
                    width={"full"}
                    spacing={'8'}
                    alignItems={['center' ,'center','center', 'flex-end']}
                    >
                    <Heading textAlign={['center', 'left']} children="LEARN FROM THE EXPRERTS" size={'2xl'}/>
                    <Text children= "Find valueable Content At Reasonable Price" size={'2xl'} fontFamily={'cursive'}/>
                    <Link to = "/courses">
                        <Button size = {"lg"} colorScheme='yellow' >
                            Explore Now
                        </Button>
                     </Link>
                    </VStack>


                    <Image  className="vector-graphics" boxSize={'md'}  src={vg} objectFit={"contain"} />

                </Stack>
            </div>

            <Box padding={'8'} bg={'blackAlpha.800'}>
                <Heading textAlign={'center'} children="OUR Brands"  fontFamily={'body'} color={'yellow.400'}/>
                    <HStack className='brand-banner' justifyContent={'space-evenly'} marginTop={'4'}>
                        <CgGoogle/>
                        <CgYoutube/>
                        <SiCoursera/>
                        <SiUdemy/>
                        <DiAws/>
                    </HStack>
            </Box>

            <div className="container2">
                <video 
                 autoPlay
                 src={introVideo}

                 controls
                controlsList='nodownload nofullscreen noremoteplayback noplaybackrate no'
                disablePictureInPicture
                disableRemotePlayback
               
                loop

                ></video>


            </div>
        </section>
    );
}

export default Home;
