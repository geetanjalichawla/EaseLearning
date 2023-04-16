

import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { useState } from 'react';
  import {Link} from 'react-router-dom'
  const Register = () => {
    const [email, setEmail] = useState('');
    const [passwod, setPasswod] = useState('');
const [name, setName] = useState("");
const [chooseAvtar, setChooseAvtar] = useState("");
const [Image, setImage] = useState("");
const filehander =(e)=>{
  const  file = e.target.files[0];
  let image = Image;
  let Avatar = chooseAvtar;
  try
  { 
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend=()=>{
 
  setChooseAvtar(reader.result);
     setImage(file);}
     
  }
  catch(e){
    setChooseAvtar(Avatar);
    setImage(image);
    console.log("error")
   }
}


    return (
      <Container minH={'95vh'} py={'20'}>
        <VStack h="full" justifyContent={'center'} spacing={'16'}>
          <Heading children={'Registration'} textTransform={'uppercase'} lineHeight={'shorter'} />
  
          <form action="" style={{ width: '100%' }}>
                <Box my='2'>
                    <Avatar src={chooseAvtar} size ="2xl"/>
                </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="email" children="Email Adress" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@email.com"
                type="email"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="name" children="name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="abc@email.com"
                type="text"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="chooseAvtar" children="chooseAvtar" />
              <Input
                required
                id="chooseAvtar"
                onChange={filehander}
                placeholder="abc@email.com"
                type="file"
                accept="image/png, image/jpeg"
                focusBorderColor="yellow.500"
                css={{"&::file-selector-button": {cursor:"pointer" , width:"110%" , border:"none" , color:"#ECC948" , backgroundColor:"white" , marginLeft:"-5%" 
            }}}
              />
            </Box>
  
  
            <Box my={'4'}>
              <FormLabel htmlFor="passwod" children="Passwod" />
              <Input
                required
                id="passwod"
                value={passwod}
                onChange={e => setPasswod(e.target.value)}
                placeholder="passwod"
                type="passwod"
                focusBorderColor="yellow.500"
              />
            </Box>

            
            <Box>
            <Link to ="/forgetpassword"><Button fontSize={'sm'} variant={'link'}>forget password</Button></Link>
            </Box>
              <Button my={'4'} colorScheme='yellow' type='submit'>Login</Button>
              <Box my={'4'}>
                New User? < Link to ='/register' ><Button mx="2px" colorScheme='yellow'>Sign in</Button></Link> {"   "} here
                </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Register;
  