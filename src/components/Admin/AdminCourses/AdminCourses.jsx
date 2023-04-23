import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../SideBar'
import cursor from '../../../asests/images/cursor.png';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CourseModal from './CourseModal';

function AdminCourse() {

  const users = [{
                _id : "432",
                title: "react course",
                category: "web devlopment",
                poster:{
                  url:'https://asia.olympus-imaging.com/content/000107506.jpg'
                },
                createdBy:"geetanjali chawla",
                views:123,
                numOfVideos : 123
  }];
  const {isOpen, onClose,onOpen} = useDisclosure();
const deleteLecutreHandler =(courseId , lectureId)=>{

}
const addLecutreHandler = (courseId , lectureId)=>{
  
}
  const courseDetailsHandler = (id)=>{
   onOpen();
  }
    const deleteHandler = (id)=>{
    console.log(id);
  }
  return (
  <Grid
    minH={'100vh'}
    maxW={'100vw'}
    p={0}
    css={{ cursor: `url(${cursor}) , default` }}
    templateColumns={['1fr', '1fr', '1fr','4fr 1fr']}
  >
            <Box boxSizing="border-box" py={['0', '16']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'} my={'16'} textAlign={['center', 'left']}>
                   All Users
                </Heading>

                <TableContainer w={['100vw' , 'full']}>
                  <Table variant={'simple'} size={'lg'} >
                    <TableCaption>
                        All available Users in the DataBase
                    </TableCaption>

                    <Thead>
 
                        <Tr>
                        <Th>Id</Th>
                        <Th>poster</Th>
                        <Th>title</Th>
                        <Th>category</Th>
                        <Th>creator</Th>
                        <Th isNumeric>Views</Th>
                        <Th isNumeric>Lectures</Th>
                        <Th isNumeric>Action</Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                          <Row items = {users[0]}
                          deleteHandler = {deleteHandler} 
                          courseDetailsHandler={courseDetailsHandler}/>
                    </Tbody>
                  </Table>              
                </TableContainer>
                <CourseModal  isOpen = {isOpen} onClose= {onClose}  deleteButton = {deleteLecutreHandler} id= {"courseId"} />
            </Box>
            <SideBar />
    </Grid>
  )
}

function Row ({items,courseDetailsHandler ,deleteHandler}) {
  return (
    <Tr textTransform={'capitalize'}>
      <Td>{items._id}</Td>
      <Td>{
        <Image src = {items.poster.url} />
        }</Td>
      <Td>{items.title}</Td>
      <Td>{items.category}</Td>
      <Td>{items.createdBy}</Td> 
      <Td>{items.views}</Td> 
      <Td>{items.numOfVideos}</Td> 
      <Td>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>courseDetailsHandler(items._id)} variant={'outline'}  color={"purple.500"}>View Lectures</Button>
          <Button onClick={()=>deleteHandler(items._id)} color="purple.600">
            <RiDeleteBin6Line/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}

export default AdminCourse



