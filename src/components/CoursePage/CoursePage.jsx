import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const CoursePage = () => {
   const [lectureNumber, setlectureNumber] = useState(0);
   const lectures = [ {
    _id : "sadasdsad",
    title :"Sample",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores deleniti maiores. Suscipit libero laboriosam quas ipsam numquam praesentium illo fuga ut quae porro odio dolor perspiciatis, facilis nesciunt sapiente?",
    video:{
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
}, 
{
    _id : "sadas3dsad",
    title :"Sample2",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores deleniti maiores. Suscipit libero laboriosam quas ipsam numquam praesentium illo fuga ut quae porro odio dolor perspiciatis, facilis nesciunt sapiente?",
    video:{
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
},
{
    _id : "sad3asds3ad",
    title :"Samp3le",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores deleniti maiores. Suscipit libero laboriosam quas ipsam numquam praesentium illo fuga ut quae porro odio dolor perspiciatis, facilis nesciunt sapiente?",
    video:{
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
},
{
    _id : "sada4sdsad",
    title :"Sampl4e",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores deleniti maiores. Suscipit libero laboriosam quas ipsam numquam praesentium illo fuga ut quae porro odio dolor perspiciatis, facilis nesciunt sapiente?",
    video:{
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
},];
    return (


        <Grid minH={'90vh'} templateColumns={['1fr' , '1fr','1fr','3fr 1fr']}>
            <Box>
            <video 
            width={'100%'}
                 src={lectures[lectureNumber].video.url}
                 controls
                controlsList='nodownload noremoteplayback noplaybackrate no'
                disablePictureInPicture
                disableRemotePlayback
                ></video>
        <Heading children = {`#${lectureNumber +1}  ${lectures[lectureNumber].title}`} m={'4'}/>
       <Heading children = "Description" m={'4'}/>
       <Text  m={'4'}>
        {lectures[lectureNumber].description}
               </Text>

            </Box>

            <VStack>
                {
                    lectures.map((item, index)=>{
                        return <Button
                        width={"100%"}
                        padding={'1rem'}
                        textAlign={'center'}
                        margin={'0'}
                        variant={'ghost'}
                        borderBottom={'2px solid rgba(0,0,0,0.2)'}
                        key = {item._id}
                        onClick={()=>setlectureNumber(index)}
                        >
                            <Text>
                                #{index+1} {item.title}
                            </Text>
                        </Button>
                    })
                }
            </VStack>
        </Grid>

    );
}

export default CoursePage;
