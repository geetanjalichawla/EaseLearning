import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Line } from 'react-icons/ri';
const Profile = () => {
  const user = {
    name: 'geet',
    email: 'geetanjalichawla@gmail.com',
    CreatedAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'achtive',
    },
    playlist: [
      {
        course: 'id',
        poster:
          'https://img.freepik.com/premium-vector/online-courses-concept_23-2148524390.jpg?w=900',
      },
      {
        course: 'id2',
        poster:
          'https://img.freepik.com/premium-vector/online-courses-concept_23-2148524390.jpg?w=900',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log('id removed');
  };
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [AvtarImage, setAvtarImage] = useState("");
  const changeImageSubmitHandeler =(Image, chooseAvtar)=>{
    setAvtarImage(chooseAvtar);
    
  }
 
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />

      <Stack
        justify={'flex-start'}
        direction={['column', 'row']}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'}  src={AvtarImage}/>
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            change photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.CreatedAt.split('T')} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button variant={'unstyled'} color={'yellow.500'}>
                  Cancel subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack
            justify={'flex-start'}
            direction={['column', 'row']}
            spacing={['8', '16']}
            padding={'8'}
          >
            <Link to="updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="changepassword">
              <Button>change password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading size="md" my={'8'}>
        Playlist
      </Heading>
      {user.playlist.length > 0 && (
        <Stack
          justify={'flex-start'}
          direction={['column', 'row']}
          padding={'4'}
          flexWrap={'wrap'}
        >
          {user.playlist.map((e, i) => (
            <VStack w="48" key={e.course}>
              <Image boxSize={'full'} objectFit={'contain'} src={e.poster} />
              <HStack>
                <Link to={`/course/${e.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    watch now
                  </Button>
                </Link>
                <Button onClick={() => removeFromPlaylistHandler(e.course)}>
                  <RiDeleteBin7Line />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox isOpen={isOpen} onClose={onClose}  changeImageSubmitHandeler= {changeImageSubmitHandeler} />
    </Container>
  );
};

export default Profile;

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandeler }) => {
  const [chooseAvtar, setChooseAvtar] = useState('');
  const [Image, setImage] = useState('');
  const filehander = e => {
    const file = e.target.files[0];
    let image = Image;
    let Avatar = chooseAvtar;
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setChooseAvtar(reader.result);
        setImage(file);
      };
    } catch (e) {
      setChooseAvtar(Avatar);
      setImage(image);
      console.log('error');
    }
  };

  const handelSubmit =(e)=>{
    e.preventDefault();
    changeImageSubmitHandeler(Image, chooseAvtar);
    onClose();
   
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropBlur={'10px'} />
      
      <ModalContent>
        <ModalHeader>Change photo</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handelSubmit} >
        <ModalBody>
          <Container>
       
              <VStack spacing={'8'}>
                <Box my="2">
                  <Avatar src={chooseAvtar} size={'20'} />
                </Box>
                <Box my={'4'}>
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
                        color: '#ECC948',
                        backgroundColor: 'white',
                        marginLeft: '-5%',
                      },
                    }}
                  />
                </Box>
              </VStack>
         
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            cancel
          </Button>
          <Button type= {'submit'} variant="ghost">confirm</Button>
        </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
