import React from 'react';
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import { RiDashboardFill, RiMenu5Fill } from 'react-icons/ri';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
    // const [menu, setMenu] = useState(true);
    const {isOpen , onOpen , onClose}  = useDisclosure();


    
    const menu = [{url : "/" , title: "Home"},
    {url : "/courses" , title: "Browes All Courses"},
    {url : "/request" , title: "Request a Course"},
    {url : "/contact" , title: "Contact Us"},
    {url : "/about" , title: "About Us"},

]

const isAuthanicated = true;
const user  = {
    role: "admin"
}

const logoutHandlee = ()=>{
    console.log("logout");
}
    return (
<>
<ColorModeSwitcher zIndex={'overlay'} />
<Button colorScheme='yellow'
zIndex={'overlay'} width={'12'} height={'12'} rounded={'full'} position={'fixed'} top={'6'} left={'6'}
 onClick={onOpen}>
    <RiMenu5Fill/>
</Button>

<Drawer placement='right' isOpen={isOpen} onClose={onClose}  >
        <DrawerOverlay backdropFilter={"blur(3px)"}/>
        <DrawerContent>

        <DrawerHeader borderBottomWidth={'1px'}>
         Ease Learning 
        </DrawerHeader>
        <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>

              {
                menu.map((item, index)=>{
                    return (<Link to ={item.url} key = {index} onClick={onClose}>
                    <Button variant={'ghost'}>
                       {item.title} 
                    </Button>
                    
                </Link>)

                })
              }

              <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>
                 {
                    isAuthanicated ? (

                        <VStack>
                            <HStack>
                            <Link to ='/profile'onClick={onClose} >
                    <Button variant='ghost'>
                    profile
                    </Button>
                    </Link>
                            <Link to ='/logout'onClick={onClose} >
                    <Button variant='ghost' onClick={logoutHandlee}>
                    logout
                    </Button>
                    </Link>

                    
 
                            </HStack>

                            {
                                user && user.role === "admin" &&  <Link to ='/admin/dashboard' onClick={onClose}>
                                <Button variant='ghost' colorScheme='purple'>
                                <RiDashboardFill style = {{"margin":"5px"}} />
                                </Button>
                                </Link>
                            }
                        </VStack>
                )
                    
                    
                    
                    : (<>
                    <Link to ='/login' onClick={onClose}>
                    <Button colorScheme='yellow'>
                        login
                    </Button>
                    </Link>

                    <p>OR</p>

                    <Link to ='/register' onClick={onClose}>
                    <Button colorScheme='yellow'>
                        signup
                    </Button>
                    </Link>

                    </>)
                 }
              </HStack>
            </VStack>

        </DrawerBody>
        </DrawerContent>
</Drawer>

</>
    );
}


export default Header;

