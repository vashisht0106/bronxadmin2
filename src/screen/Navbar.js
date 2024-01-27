import React from 'react';
import { useDisclosure, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { Box, Button, Flex,HStack,VStack, Img, Menu,Icon, MenuButton, MenuItem, MenuList,Collapse, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { bgColour, fsh1, fwh1, txtColor } from '../Dynamic'

const Navbar = () => {

const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bgColour}
      color="white"
    >
      {/* Navbar Brand */}
      <Img justifyContent={'left'} w={{ base: '30%', md: '10%' }} h={{ base: '30%', md: '10%' }} src='https://www.bronx.co.in/assets/images/logowhite.png' />

      {/* Navbar Links */}
      <Box color={'white'}   display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center">
      
      
      <HStack spacing={8} color={txtColor}>
      
      <Menu >
                    <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                           <Link> Dashboard</Link>
                        </MenuButton>

                    </Menu>
                        <Menu bg={bgColour}>
                            <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                            <Link> Schedule</Link>
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList bg={bgColour}>
                                <MenuItem bg={bgColour}>Schedule</MenuItem>
                                <MenuItem bg={bgColour} >Dayparting</MenuItem>

                            </MenuList>
                        </Menu>

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                               <Link> Design</Link>
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour} >
                                <MenuItem  bg={bgColour} >Dayparting</MenuItem>
                                
                              <Link to='/layout'>
                               <MenuItem  bg={bgColour}>Layouts</MenuItem>
                              </Link> 
                                <MenuItem  bg={bgColour} >Templates</MenuItem>
                                <MenuItem  bg={bgColour} >Resolutions</MenuItem>

                            </MenuList>
                        </Menu>

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} 
                        display= {'block'}
                    
                        
                        >
                                Library
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour}
                            >
                                <MenuItem  bg={bgColour}  >Playlists</MenuItem>
                                <MenuItem  bg={bgColour} >Media</MenuItem>
                                <Link to='/manage_content'>
                                <MenuItem  bg={bgColour} >Content</MenuItem>
                                </Link>

                            </MenuList>
                        </Menu>

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                                Displays
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour} >
                                <MenuItem   bg={bgColour} >Displays</MenuItem>

                            </MenuList>
                        </Menu>



                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                                Reporting
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour}>
                                <MenuItem  bg={bgColour}> Display Statistics</MenuItem>
                                <MenuItem  bg={bgColour}>Proof of Play</MenuItem>
                                <MenuItem  bg={bgColour}> Libarary Usage</MenuItem>

                            </MenuList>
                        </Menu>
                        </HStack>
                        {/* </Collapse> */}
      </Box>
      <Img justifyContent={'right'} borderRadius={30} w={{ base: '10%', md: '3%' }} h={{ base: '10%', md: '3%' }} src='https://cms.signagetv.in/theme/default/img/avatar.jpg' />

 {/* Navbar Links */}
 <Box color={'white'}   display={{ base: 'flex', md: 'none' }} mt={{ base: 4, md: 0 }}>

 


<Collapse in={isOpen} animateOpacity>
      <VStack spacing={8} color={txtColor}>
      
      <Menu >
                    <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                           <Link> Dashboard</Link>
                        </MenuButton>

                    </Menu>
                        <Menu bg={bgColour}>
                            <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                            <Link> Schedule</Link>
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList bg={bgColour}>
                                <MenuItem bg={bgColour}>Schedule</MenuItem>
                                <MenuItem bg={bgColour} >Dayparting</MenuItem>

                            </MenuList>
                        </Menu>

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                               <Link> Design</Link>
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour} >
                                <MenuItem  bg={bgColour} >Dayparting</MenuItem>
                                
                              <Link to='/layout'>
                               <MenuItem  bg={bgColour}>Layouts</MenuItem>
                              </Link> 
                                <MenuItem  bg={bgColour} >Templates</MenuItem>
                                <MenuItem  bg={bgColour} >Resolutions</MenuItem>

                            </MenuList>
                        </Menu>

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} 
                        display= {'block'}
                    
                        
                        >
                                Library
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour}
                            >
                                <MenuItem  bg={bgColour}  >Playlists</MenuItem>
                                <MenuItem  bg={bgColour} >Media</MenuItem>
                                <Link to='/manage_content'>
                                <MenuItem  bg={bgColour} >Content</MenuItem>
                                </Link>

                            </MenuList>
                        </Menu>

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                                Displays
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour} >
                                <MenuItem   bg={bgColour} >Displays</MenuItem>

                            </MenuList>
                        </Menu>



                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                                Reporting
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour}>
                                <MenuItem  bg={bgColour}> Display Statistics</MenuItem>
                                <MenuItem  bg={bgColour}>Proof of Play</MenuItem>
                                <MenuItem  bg={bgColour}> Libarary Usage</MenuItem>

                            </MenuList>
                        </Menu>
                        </VStack>
                        </Collapse>
                        <Button onClick={isOpen ? onClose : onOpen}>
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
     </Box> 
    </Flex>
  );
};

export default Navbar;
