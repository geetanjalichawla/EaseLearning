import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  
  const addtoPlaylistHandler = (id)=>{
    console.log('added to playlist' + id + category);
  }
  // if(categories === category) setKeyword("");
  const Course = ({
    views,
    title,
    imageSrc,
    id,
    addtoPlaylistHandler,
    creator,
    discription,
    lectureCount,
  }) => {
    return (
      <VStack className="courses" alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
        <Heading
          textAlign={['center', 'left']}
          maxW={'200px'}
          fontFamily={'sans-serif'}
          noOfLines={'3'}
          children={title}
          size={'sm'}
        />
        <Text noOfLines={2} children={discription} />
        <HStack>
          <Text
            fontWeight={'bold'}
            textTransform={'uppercase'}
            children={'creator'}
          />

          <Text
            fontWeight={'body'}
            textTransform={'uppercase'}
            children={creator}
          />
        </HStack>
        <Heading textAlign={'center'} textTransform={'uppercase'}  size={'xs'} children = {`Lecturs - ${lectureCount}`}/>
        <Heading textAlign={'center'} textTransform={'uppercase'}  size={'xs'} children = {`Views - ${views}`}/>
            <Stack direction={['column' , 'row']} alignItems={'center'}>
                <Link to ={`/course/${id}`}>
                    <Button colorScheme='yellow'>
                        watch now
                    </Button>
                </Link>
                <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addtoPlaylistHandler(id)}>
                        Add to playlist
                    </Button>
            </Stack>
      </VStack>
    );
  };
  const categories = [
    'Web Devlopment ',
    'Arifical Intelegience',
    'Data stuctures',
    'App devlopment',
    'Data science ',
    'Game devlopment',
  ];
  return (
    <Container minH={'p5vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Course" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="search a course...."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        scrollPaddingY={'8'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, key) => (
          <Button
          key={key}
            minW={'60'}
            onClick={() => {
              setCategory(item);
            }}
          >
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          discription={'discription'}
          views={'200'}
          imageSrc={'https://asia.olympus-imaging.com/content/000107506.jpg'}
          id={'id'}
          creator={'creator'}
          addtoPlaylistHandler={addtoPlaylistHandler}
          lectureCount={'39'}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
