import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import SideBar from '../SideBar';
import cursor from '../../../asests/images/cursor.png';
import { useState } from 'react';

function CreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'Web Devlopment ',
    'Arifical Intelegience',
    'Data stuctures',
    'App devlopment',
    'Data science ',
    'Game devlopment',
  ];

  const filehander = e => {
    const file = e.target.files[0];
    let img = image;
    let imgPrev = imagePrev;
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    } catch (e) {
      setImagePrev(imgPrev);
      setImage(img);
      console.log('error');
    }
  };

  return (
    <Grid
      minH={'100vh'}
      maxW={'100vw'}
      p={0}
      css={{ cursor: `url(${cursor}) , default` }}
      templateColumns={['1fr', '1fr', '1fr', '5fr 1fr']}
    >
      <Container py="16" w={'full'}>
        <form action="">
          <Heading my="8" textAlign={['center', 'left']}>
            Create course
          </Heading>
          <VStack m="auto" spacing={'8'}>
            <Box w={'full'} my={'2'}>
              <FormLabel htmlFor="title" children="Title" />
              <Input
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
                focusBorderColor="#6b46c19e"
              />
            </Box>

            <Box w={'full'} my={'2'}>
              <FormLabel htmlFor="description" children="Description" />
              <Input
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
                type="text"
                focusBorderColor="#6b46c19e"
              />
            </Box>
            <Box w={'full'} my={'2'}>
              <FormLabel htmlFor="createdBy" children="Creator Name" />
              <Input
                id="createdBy"
                value={createdBy}
                onChange={e => setCreatedBy(e.target.value)}
                placeholder="creator name"
                type="text"
                focusBorderColor="#6b46c19e"
              />
            </Box>

            <Select
              focusBorderColor="#6b46c19e"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">category</option>
              {categories.map(c => (
                <option value={c}>{c}</option>
              ))}
            </Select>

            <Input
              required
              id="chooseAvtar"
              onChange={filehander}
              placeholder="abc@email.com"
              type="file"
              accept="image/png, image/jpeg"
              focusBorderColor="yellow.500"
              css={{
                '&::file-selector-button': {
                  cursor: 'pointer',
                  width: '110%',
                  border: 'none',
                  color: 'purple',
                  backgroundColor: 'white',
                  marginLeft: '-5%',
                },
              }}
            />

            {imagePrev && <Image src={imagePrev} />}
          </VStack>

          <Button w="full" colorScheme='purple' type='submit' my={'2'}>
            Create
          </Button>
        </form>
      </Container>
      <SideBar />
    </Grid>
  );
}

export default CreateCourse;
