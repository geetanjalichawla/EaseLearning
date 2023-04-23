import { Box, Button, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {RiDeleteBin7Fill} from 'react-icons/ri'

function CourseModal({isOpen , onClose,deleteButton}) {
    const courseTitle= "react course";
    const id = "id";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'full'} >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader textTransform={'capitalize'}>{courseTitle}</ModalHeader>
      <ModalCloseButton />
      <ModalBody textTransform={'capitalize'} py={'16'}>
        <Grid templateColumns={['1fr', '3fr 1fr']}>
          <Box px={['0','16']}>
            <Box my="5">
<Heading>{courseTitle}</Heading>
<Heading size={'sm'} opacity={0.4}>{`#${id}`}</Heading>
            </Box>
<Heading>lectures</Heading>
<VideoCard title = "react intro" description= "this is a introduction lecture of react course where you'll know the basics of react" num ={"1"} lectureId="sdjflkjlecture" courseId ={id} deleteButton ={deleteButton} />
          </Box>
        </Grid>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>

  )
}

export default CourseModal

function VideoCard({title , description , num , lectureId ,courseId , deleteButton}){
  return <Stack direction={["column", "row"]} my={'8'} borderRadius={'lg'} boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
  justifyContent={['flex-start','space-between']}
  p={['4','8']} alignItems={'center'} textTransform={'capitalize'}>
   <Box>
  <Heading size={'sm'}>
      {`#${num} ${title}`}
    </Heading>
    <Text>
    {description}
    </Text>
    </Box> 
    <Button color={'purple.600'} p={2}  onClick={deleteButton(courseId, lectureId)}>
      <RiDeleteBin7Fill size={"xl"}/>
    </Button>
  </Stack>
}