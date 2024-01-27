import React from 'react'
import { useState } from 'react';
import { Box, HStack, Text, Grid, VStack, label, Button, Image, Select, Center, Drawer, Input, DrawerBody, DrawerFooter, DrawerContent, DrawerHeader, DrawerOverlay, Stack, FormLabel } from '@chakra-ui/react'
import { bgColour, plhColor } from '../Dynamic';
//import landscapeImage from './images/Landscape - Region 1 - 1.png'
const imagesContext = require.context('../../public/images', false, /\.(png)$/)
const imageFilenames = imagesContext.keys();
//console.log(imageFilenames)
const Layout = () => {

  const [selectedImage, setSelectedImage] = useState();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box p={'5'} bg={plhColor}>
      <Center mt={20}>
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={10}
        >
          {imageFilenames.map((filename, index) => {

            console.log('filename', imagesContext(filename))
            //  console.log('filename',imagesContext(filename).default)

            return (
              <Image
                key={index}
                src={imagesContext(filename)}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
                cursor="pointer"
              />
            )
          })}
        </Grid>
      </Center>

      {/* Drawer */}
      <Drawer size="md"   isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose}>
        <DrawerContent bg={'gray.400'}>
          <DrawerHeader >
            DrawerHeader
          </DrawerHeader>
          <DrawerBody>
          <Select p={'3'} placeholder='Select '>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
            <FormLabel >Choose Date:</FormLabel>
            <HStack fontSize={'13'} p={3}>

              <Input
                size="md"
                type="date"
              />
              <Text fontWeight={'bold'}>To</Text>
              <Input
                size="md"
                type="date"
              />
            </HStack>
            <FormLabel >Choose Time:</FormLabel>
            <HStack fontSize={'13'} p={3}>

              <Input
                size="md"
                type="time"
              />
              <Text fontWeight={'bold'}>To</Text>
              <Input
                size="md"
                type="time"
              />
            </HStack>

          </DrawerBody>
          <DrawerFooter borderTopWidth='1px' >
            <Button colorScheme='gray'  mr={3} onClick={handleDrawerClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    </Box>


  )
}

export default Layout