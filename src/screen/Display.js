import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbBooks } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi2";
import { TbSettings } from "react-icons/tb";

function Display() {
    return (
        <HStack
           
            
            p={{ base: "2", sm: "4" }}
            spacing={"4"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}>
            <Box bg={"white"} w={{ base: "100%", md: "45%", lg: "45%" }} p={{ base: "2", sm: "4" }}>
                <HStack>
                    <Box bg={'orange'} rounded={'50%'} p={'4'} >

                        <HiMiniComputerDesktop size={'40'} color="white" />
                    </Box>
                    <Stack>

                        <Text fontWeight={'bold'}>1</Text>
                        <Text>Displays</Text>
                    </Stack>
                </HStack>
            </Box>
            <Box bg={"white"} w={{ base: "100%", md: "45%", lg: "45%" }} p={{ base: "2", sm: "4" }}>
                <HStack>
                    <Box bg={'red.500'} rounded={'50%'} p={'4'}>

                        <TbBooks size={'40'} color="white" />
                    </Box>
                    <Stack>

                        <Text fontWeight={'bold'}>140.3MiB</Text>
                        <Text>Library Size</Text>
                    </Stack>
                </HStack>
            </Box>
            <Box bg={"white"} w={{ base: "100%", md: "45%", lg: "45%" }} p={{ base: "2", sm: "4" }}>
                <HStack>
                    <Box bg={'green.400'} rounded={'50%'} p={'4'}>

                        <HiUserGroup size={'40'} color="white" />
                    </Box>
                    <Stack>

                        <Text fontWeight={'bold'}>1</Text>
                        <Text>User</Text>
                    </Stack>
                </HStack>
            </Box>
            <Box bg={"white"} w={{ base: "100%", md: "45%", lg: "45%" }} p={{ base: "2", sm: "4" }}>
                <HStack>
                    <Box bg={'blue.500'} rounded={'50%'} p={'4'}>

                        <TbSettings size={'40'} color="white" />
                    </Box>
                    <Stack>
                        
            

                        <Text fontWeight={'bold'}>1</Text>
                        <Text>Now Showing</Text>
                    </Stack>
                </HStack>
            </Box>
        </HStack>


    )
}
export default Display;