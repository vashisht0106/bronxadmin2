import * as React from 'react'

import { Box, Center, HStack, Img, Spacer,  Icon, Button } from '@chakra-ui/react'
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    MenuIcon,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { bgColour, fsh1, fwh1, txtColor } from '../Dynamic'
import { Link,useNavigate   } from 'react-router-dom'

function Home() {
    //const navigate = useNavigate ();

    //const handleLayoutClick = () => {
    //  // Navigate to the desired route when the MenuItem is clicked
    //  navigate ('/layouts'); // Replace '/layouts' with your desired route
    //};
    return (
        <Center >
            <HStack w={'100%'} h={'100%'} bg={bgColour} p={'4'}  >
                <Img justifyContent={'left'} w={'10%'} h={'10%'} src='https://www.bronx.co.in/assets/images/logowhite.png' />
                <Spacer />
                <HStack spacing={8} color={txtColor}>
                
                    <Menu >
                    <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                            Dashboard
                        </MenuButton>

                    </Menu>
                        {/*<Menu bg={bgColour}>
                            <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                                Schedule
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList bg={bgColour}>
                                <MenuItem bg={bgColour}>Schedule</MenuItem>
                                <MenuItem bg={bgColour} >Dayparting</MenuItem>

                            </MenuList>
                        </Menu>*/}

                        <Menu>
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                               <Link> Design</Link>
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour} >
                                <MenuItem  bg={bgColour} >Dayparting</MenuItem>
                                
                              <Link to='/layout'>
                               <MenuItem  bg={bgColour} >Layouts</MenuItem>
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
                                <Link to='manage_event'>
                                <MenuItem  bg={bgColour}>Event</MenuItem>
                                </Link>
                                <Link to='/manage_content'>
                                <MenuItem  bg={bgColour} >Content</MenuItem>
                                </Link>

                            </MenuList>
                        </Menu>

                        <Menu  > 
                        <MenuButton fontSize={fsh1} fontWeight={fwh1} >
                                Displays
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour} >
                                <MenuItem   bg={bgColour} >Displays</MenuItem>

                            </MenuList>
                        </Menu>



                        <Menu  > 
                        <MenuButton  fontSize={fsh1} fontWeight={fwh1} >
                                Reporting
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={txtColor}  bg={bgColour}  style={{zIndex:'999',position:'fixed',display:'block'}}>
                                <MenuItem  bg={bgColour}> Display Statistics</MenuItem>
                                <MenuItem  bg={bgColour}>Proof of Play</MenuItem>
                                <MenuItem  bg={bgColour}> Libarary Usage</MenuItem>

                            </MenuList>
                        </Menu> 
                        
                </HStack>
                {/* </Box> */}
                <Spacer />
                <Img justifyContent={'right'} borderRadius={30} w={'3%'} h={'3%'} src='https://cms.signagetv.in/theme/default/img/avatar.jpg' />
            </HStack>

            {/*</Header>*/}
        </Center>
    )
}
export default Home;