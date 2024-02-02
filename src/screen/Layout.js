import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, HStack, Text, Grid, VStack, label, Button, Image, Select, Center, Drawer, Input, DrawerBody, DrawerFooter, DrawerContent, DrawerHeader, DrawerOverlay, Stack, FormLabel, useToast,InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import { bgColour, borderColor, plhColor, txtColor } from '../Dynamic';
import { useSelector, useDispatch } from "react-redux"
import { ContentAction } from '../redux/layoutReducer/action';
import { MdTitle } from "react-icons/md";
//import landscapeImage from './images/Landscape - Region 1 - 1.png'
const imagesContext = require.context('../../public/images', false, /\.(png)$/)
const imageFilenames = imagesContext.keys();
//import {data} from './redux/layoutReducer'
//console.log(imageFilenames)
const Layout = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [selectedImage, setSelectedImage] = useState();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [layoutstyle, setLayoutstyle] = useState('');
  const [source, setSource] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [starttime, setStarttime] = useState('');
  const [endtime, setEndtime] = useState('');
  const [title, setTitle] = useState('');

  const { data } = useSelector(state => state.layoutReducer)

  const dispatch = useDispatch()

  const toast = useToast();
  //console.log('data',data)
  const handleImageClick = (index, filename) => {
    setSelectedImage(index);
    setDrawerOpen(true);

    const parts = filename.split('/');
    const name = parts[parts.length - 1];

    setLayoutstyle(name);

  };


  //date and time handling
  const startDateHander = (e) => {

    setStartdate(e.target.value)
    console.log('startdate', startdate);

  }

  const endDateHander = (e) => {
    setEnddate(e.target.value)
    console.log('endDate', enddate);

  }
  const startTimeHander = (e) => {

    setStarttime(e.target.value)
    console.log('starttime', starttime);

  }
  //const endTimeHander=(e)=>{

  //  setEndtime(e.target.value)
  //  console.log('endtime',endtime);

  //  }
  const endTimeHandler = (e) => {
    setEndtime(e.target.value)
    console.log('starttime', starttime)
  };








  const add_eventHandler = async () => {

  


    try {
      // Make sure to replace 'your-api-endpoint' with your actual API endpoint



      const response = await axios.post(`${BACKEND_URL}/api/v1/add_event`, {
        title,
        starttime,
        startdate,
        endtime,
        enddate,
        layoutstyle,
        source,
      });

      console.log('Response:', data);
      // Add success toast if needed
    setDrawerOpen(false);


    setStarttime('')
setStartdate('')
setSource('')
setEnddate('')
setEndtime('')
setTitle('')

    } catch (error) {
      console.error('Error:', error.response?.data.error || error.message);
      //console.error("addevent_error",error.data)
      const errorMessage = error.response?.data.error || "An unexpected error occurred"

      toast({
        title: `${errorMessage}`,
        //description: "We've created your account for you.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })


      // Use useToast to display an error toast
      // Example: useToast({ title: 'Error', description: 'An error occurred.', status: 'error' });
    }
  };







  console.log('startdate', startdate)

  useEffect(() => {

    dispatch(ContentAction(false))

  }, [])


  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };


  return (
    <Box p={'5'} bg={bgColour}>
      <Center mt={'4'}>
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={10}
        >
          {imageFilenames.map((filename, index) => {

            //console.log('filename', imagesContext(filename))
            //console.log('filename',imagesContext(filename).default)
            //const parts = filename.split('/');
            //const name= parts[parts.length - 1];
            //console.log('name',name)

            return (
              <Image
                key={index}
                src={imagesContext(filename)}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index, filename)}
                cursor="pointer"
              />
            )
          })}
        </Grid>
      </Center>

      {/* Drawer */}
      <Drawer size="md" isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose}>
        <DrawerContent bg={bgColour} boxShadow='md'>
          <DrawerHeader >
            Manage Layout
          </DrawerHeader>
          <DrawerBody>


<Box  >
 
<Box p={3}>
<InputGroup>
                <Input type='text' placeholder='Enter title' bg={bgColour} color={txtColor} _placeholder={{ opacity: 1, color: plhColor }} borderColor={borderColor} 
                
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                
                />
                <InputRightElement>
                  <Icon as={MdTitle}  color={plhColor} boxSize={5} />
                </InputRightElement>
              </InputGroup>


</Box>

            <Select  p={3}  placeholder='Select ' w={'100%'} value={source} onChange={(e) => setSource(e.target.value)}>

              {data &&

                data.map((item, index) => (

                  <option key={index}>{item}</option>


                )
                )}



            </Select>
            {/*<FormLabel >Choose Date:</FormLabel>*/}
         
         


          
            <HStack fontSize={'13'} p={3}>
              <Input
                size="md"
                type="date"
                value={startdate}
                onChange={startDateHander}
              />


              <Text fontWeight={'bold'}>to</Text>
              <Input
                size="md"
                type="date"
                value={enddate}
                onChange={endDateHander}

              />
            </HStack>
            {/*<FormLabel >Choose Time:</FormLabel>*/}
            <HStack fontSize={'13'} p={3}>

              <Input
                size="md"
                type="time"
                value={starttime}
                onChange={startTimeHander}

              />
              <Text fontWeight={'bold'}>to</Text>
              <Input
                size="md"
                type="time"
                value={endtime}
                onChange={endTimeHandler}
              />
            </HStack>
 
           </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px' >
            <Button colorScheme='red' mr={3} variant={'outline'} onClick={handleDrawerClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' variant={'outline'} onClick={add_eventHandler}>save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </Box>


  )
}

export default Layout