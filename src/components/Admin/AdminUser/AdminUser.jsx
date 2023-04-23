
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../SideBar'
import cursor from '../../../asests/images/cursor.png';
import { RiDeleteBin6Line } from 'react-icons/ri';

function AdminUser() {

  const users = [{
                _id : "432",
                name: "geetanjali chawla",
                email: "geetc1919@gamil.com",
                role: "admin",
                subscription:{
                  status:"active"
                }
  }];

  const updateHandler = (id)=>{
    console.log(id);
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
                       
                          <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        <Th>Subscription</Th>
                        <Th isNumeric>Action</Th>
                      </Tr>
                    </Thead>

                    <Tbody>
                          <Row items = {users[0]}
                          deleteHandler = {deleteHandler} 
                          updateHandler={updateHandler}/>
                    </Tbody>
                  </Table>              
                </TableContainer>
            </Box>
            <SideBar />
    </Grid>
  )
}

function Row ({items,updateHandler ,deleteHandler}) {
  return (
    <Tr textTransform={'capitalize'}>
      <Td>{items._id}</Td>
      <Td>{items.name}</Td>
      <Td>{items.email}</Td>
      <Td>{items.role}</Td>
      <Td>{items.subscription.status === "active" ?'Active' : "Not Active"}</Td>
      <Td>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>updateHandler(items._id)} variant={'outline'}  color={"purple.500"}>Change Roles</Button>
          <Button onClick={()=>deleteHandler(items._id)} color="purple.600">
            <RiDeleteBin6Line/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}
export default AdminUser