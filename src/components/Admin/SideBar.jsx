import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'

function SideBar() {
  let location = useLocation();
  return (
    <VStack spacing={'8'} py = "16" px={'8'} boxShadow={'-2px 0 10px #6b46c19e' }>
      <LinkButton url ='dashboard' text={'DashBoard'} Icon={RiDashboardFill}  active = {location.pathname === "/admin/dashboard"}/>
      <LinkButton url ='courses' text={'Coureses'} Icon={RiEyeFill} active = {location.pathname === '/admin/courses'}/>
      <LinkButton url ='users' text={'users'} Icon={RiUser3Fill} active = {location.pathname === '/admin/users'}/>
      <LinkButton url ='createcourse' text={'create course'} Icon={RiAddCircleFill} active = {location.pathname === '/admin/createcourse'}/>
    </VStack>
  

  )
}

export default SideBar




const LinkButton = ({url,Icon,text , active}) => {
  return (
    <Link to ={ `/admin/${url}`}>
    <Button colorScheme={`${active === true?'purple' : ''}`} fontSize={'larger'} variant={'ghost'} textTransform={'capitalize'}>
      <Icon style={{margin:"4px"}}/>
      {text}
    </Button>
      </Link>
  );
}


