import React, { useEffect, useRef, useState } from 'react'
import { Box, Checkbox, HStack, Text, Select, Input, InputGroup, InputRightElement, VStack, Button, Icon, Center, Flex, Spacer } from '@chakra-ui/react'
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { FaUpload } from 'react-icons/fa'
import { IoCloudUploadOutline } from "react-icons/io5";
import './Content.css'
//import axios from 'axios';
import { bgColour, txtColor, plhColor, borderColor } from '../Dynamic';
import { left } from '@popperjs/core';
const Content = () => {
  const [folder, setFolder] = useState('null');
  console.log(process.env)
  useEffect(() => {
    const fetchData = async () => {
      try {
        //  const response = await axios.get(`http://192.168.1.4:4000/api/v1/readfolder`);
        //  console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);


  const fileInputRef = useRef(null);
  const [filename, setFilename] = useState('null')
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle the file change event here
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
    setFilename(selectedFile);
  };

  return (
    <div style={{ position: '' }} >
      <Box bg={plhColor}  >
        {/* <Center > */}
        <Box p={'10'} >
        <Flex mt={'20'}>
          <Spacer/>
            <VStack justifyContent={'center'} alignItems="flex-start" spacing={'30'}>
              <InputGroup>
                <Input type='text' placeholder='Create folder' bg={bgColour} color={txtColor} _placeholder={{ opacity: 1, color: bgColour }} borderColor={borderColor} />
                <InputRightElement>
                  <Icon as={BsFillFileEarmarkPlusFill} cursor={'pointer'} color={plhColor} boxSize={5} />
                </InputRightElement>
              </InputGroup>



              <Select
                bg={bgColour}
                borderColor={borderColor}
                color={plhColor}
                placeholder='---Select folder---'
              >

                <option >jdh</option>
                <option>jdh</option>
                <option>jdh</option>
                <option>jdh</option>

              </Select>
              {/* <Box> */}
<HStack>
                <Box className="file-input-container" >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="file-input"
                    accept=".png, .jpg, .jpeg, .gif" // Set accepted file types if needed
                  />
                  <Box bg={bgColour} className="file-input-icon" onClick={handleIconClick}>


                    <Icon as={FaUpload} color={plhColor} boxSize={4} />





                  </Box>

                </Box>



                {filename != 'null' &&

<HStack justifyContent={'left'}  >
              
              <Box>

                {/*<Icon as={FaUpload} color={plhColor} boxSize={4} />*/}
                <Button leftIcon={<Icon as={IoCloudUploadOutline} color={bgColour} boxSize={4} />} variant='outline' borderColor={bgColour}>
                  <Text color={bgColour}>Upload</Text>
                </Button>
              </Box>

              <Box>
                <Text  >{filename.name} </Text>

              </Box>
            </HStack>

          }

</HStack>




              {/* </Box> */}
            </VStack>
            {/*<Input type='file'/>*/}
            </Flex>
         
        </Box>
        {/* </Center> */}
      </Box>
    </div>
  )
}

export default Content