import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../asests/images/cursor.png';
import SideBar from '../SideBar';
import {} from 'react-icons/ai';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Bar = ({ title, value, profit }) => {
  return (
    <Box py={'4'} maxW="100vw"  >
      <Heading size="sm" children={title} mb={'2'} />
      <HStack alignItems={'center'}>
        <Text children={'0%'} />
        <Progress
          w="full"
          value={value}
          colorScheme={profit ? 'green' : 'red'}
        />
        <Text children={`${value > 100 ? value : '100'}%`} />
      </HStack>
    </Box>
  );
};

const DataBox = ({ title, qty, qtyPrecentage, profit }) => (
  <Box
    w={['90%', '90%', '80%', '30%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    borderRadius={'lg'}
    p={'8'}
  >
    <Text>{title}</Text>
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />

      <HStack>
        <>{qtyPrecentage}%</>
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="green" />
        )}
      </HStack>
    </HStack>
    <Text>Childrens sciense last month</Text>
  </Box>
);
function DashBoard() {
  return (
    <Grid
      minH={'100vh'}
      maxW={'100vw'}
      p={0}
      css={{ cursor: `url(${cursor}) , default` }}
      templateColumns={['1fr', '1fr', '1fr','4fr 1fr']}
    >
      <Box boxSizing="border-box" py={'16'} px={['0', '0', '0', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`last change was ${String(new Date()).split('G')[0]} `}
        />
        <Heading
          children="Dashbord"
          ml={['0', '0', '0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'column', 'column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
        >
          <DataBox title="Views" qty={123} qtyPrecentage={30} profit={true} />
          <DataBox title="Users" qty={54} qtyPrecentage={53} profit={false} />
          <DataBox
            title="Subscribers"
            qty={444}
            qtyPrecentage={100}
            profit={true}
          />
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          maxW={"100vw"}
        >
          <Heading
            textAlign={['center', 'left']}
            children={'views Graph'}
            pt={['8', '0']}
            ml={['0', '16']}
            
          />
          <LineChart />
        </Box>

        <Grid  maxW="full" templateColumns={['1fr','2fr 1fr']} >
          <Box boxSizing='border-box' p={'8'}>
            <Heading
              textAlign={['center', 'left']}
              children={'Progess Bar'}
              pt={['8']}
              ml={['0', '0', '0', '16']}
            />
            <Bar title="view" value={30} profit={true} />
            <Bar title="users" value={54} profit={false} />
            <Bar title="subscription" value={100} profit={true} />
          </Box>

          <Box   boxSizing="border-box" py="4" >
            <Heading textAlign={'center'} children="users"size="md" 
            />
            <DoughnutChart/>
          </Box>
        </Grid>
      </Box>

      <SideBar />
    </Grid>
  );
}

export default DashBoard;
