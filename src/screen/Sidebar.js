import React from 'react';
import {Link} from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Center,
  Flex,
  Img
} from '@chakra-ui/react';
import { MdDashboard } from 'react-icons/md';
import { HiTemplate } from 'react-icons/hi';
import { bgColour, txtColor } from '../Dynamic';
import { SiEventstore } from "react-icons/si";
import { TbArrowAutofitContentFilled } from "react-icons/tb";
import { TbResize } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { IoLogOut } from "react-icons/io5";
const Sidebar = () => {
  return (
    <Box    >
      <Flex color={txtColor} pos={'fixed'} flexDirection={'column'}  p={'10'} boxShadow={'md'} bg={bgColour}  gap='5'
      minH={'100%'}
      w={'18%'}
      >
<Box justifyContent={'center'}>
  <HStack>

<Img justifyContent={'center'}  src='https://www.bronx.co.in/assets/images/logowhite.png' w={'70%'} />

<Text>CMS</Text>
  </HStack>

</Box>
        <Link to={'/'}>
      <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={MdDashboard} />
                <Text>Dashboard</Text>
              </HStack>
                </Link>



                <Link to={'/layout'}>

              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={HiTemplate} />
                <Text>Templates</Text>
              </HStack>

              </Link>


<Link to={'/manage_event'}>
              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={SiEventstore} />
                <Text>Events</Text>
              </HStack>

              </Link>


<Link to="/manage_content">
              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={TbArrowAutofitContentFilled} />
                <Text>Content</Text>
              </HStack>

              </Link>






              <Link to={'/set_resolution'}>
              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={TbResize} />
                <Text>Media Player</Text>
              </HStack>

              </Link>










<Link to={'/set_resolution'}>
              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={TbResize} />
                <Text>Resolution</Text>
              </HStack>

              </Link>


<Link to="/bronx_support">
              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={MdContactSupport} />
                <Text>Support</Text>
              </HStack>
              </Link>


              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={GrUserManager} />
                <Text>User</Text>
              </HStack>


              <HStack spacing="10px" cursor={'pointer'}>
                <Icon as={IoLogOut} />
                <Text>Logout</Text>
              </HStack>

      </Flex>
    </Box>
  );
};

export default Sidebar;
