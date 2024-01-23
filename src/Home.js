import * as React from 'react'

import { Box, Center, HStack, Img, Spacer, Text, Button, Icon } from '@chakra-ui/react'
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    MenuIcon,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function Home() {
    return (
        <Center>
            <HStack w={'100%'} h={'100%'} bg={'#000080'} p={'4'}  >
                <Img justifyContent={'left'} w={'20%'} h={'20%'} src='https://cms.signagetv.in/theme/default/img/xibologo.png' />
                <Spacer />
                {/* <Box bg={'red'} > */}
                <HStack spacing={8} color={'white'}>
                    <Menu>
                        <MenuButton  >
                            Dashboard
                        </MenuButton>

                    </Menu>
                        <Menu>
                            <MenuButton  >
                                Schedule
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={'black'}>
                                <MenuItem>Schedule</MenuItem>
                                <MenuItem>Dayparting</MenuItem>

                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton  >
                                Design
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={'black'}>
                                <MenuItem>Dayparting</MenuItem>
                                <MenuItem>Layouts</MenuItem>
                                <MenuItem>Templates</MenuItem>
                                <MenuItem>Resolutions</MenuItem>

                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton  >
                                Library
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={'black'}>
                                <MenuItem>Playlists</MenuItem>
                                <MenuItem>Media</MenuItem>

                            </MenuList>
                        </Menu>


                        <Menu>
                            <MenuButton  >
                                Displays
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={'black'}>
                                <MenuItem>Displays</MenuItem>

                            </MenuList>
                        </Menu>



                        <Menu>
                            <MenuButton  >
                                Reporting
                                <Icon as={ChevronDownIcon} />
                            </MenuButton>
                            <MenuList color={'black'}>
                                <MenuItem> Display Statistics</MenuItem>
                                <MenuItem>Proof of Play</MenuItem>
                                <MenuItem> Libarary Usage</MenuItem>

                            </MenuList>
                        </Menu>



                </HStack>
                {/* </Box> */}
                <Spacer />
                <Img justifyContent={'right'} w={'5%'} h={'5%'} src='https://cms.signagetv.in/theme/default/img/avatar.jpg' />
            </HStack>

            <Box></Box>
        </Center>
    )
}
export default Home;