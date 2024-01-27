import React, { useEffect, useRef, useState } from 'react'
import { Box, Checkbox, HStack,VStack,Flex, Text, Select, Input, InputGroup, InputRightElement, Button, Icon, Center, Spacer,Grid } from '@chakra-ui/react'
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { FaUpload } from 'react-icons/fa'
import { IoCloudUploadOutline } from "react-icons/io5";
import './Content.css'
import axios from 'axios';
import { bgColour, txtColor, plhColor, borderColor } from '../Dynamic';
import { FileInput } from './Custom';
const Content = () => {
  const [folder, setFolder] = useState([]);
  const [rootfolder, setRootfolder] = useState("");
  const [childfolder,setChildfolder] = useState("");
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(`${BACKEND_URL}/api/v1/readfolder`);
          setFolder(response.data);
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


const createFolder=async()=>{


const requestData = {
  rootfolder,
  childfolder
};


try {
  const config={headers:{"Content-Type":"application/json"}}
const {data}=await axios.post(`${BACKEND_URL}/api/v1/createfolder`,requestData,config)
console.log(data)
} catch (error) {
 console.log(error) 
}

}







  return (
    <div>
      <Box bg={bgColour} minHeight={'100vh'} >
        <Center >
      <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={5}

      mt={'10'}
      
    >
          
              <InputGroup>
                <Input type='text' placeholder='Create folder' bg={bgColour} color={txtColor} _placeholder={{ opacity: 1, color: plhColor }} borderColor={borderColor} 
                
                value={rootfolder}
                onChange={(e)=>setRootfolder(e.target.value)}
                
                />
                <InputRightElement>
                  <Icon as={BsFillFileEarmarkPlusFill} onClick={createFolder} cursor={'pointer'} color={plhColor} boxSize={5} />
                </InputRightElement>
              </InputGroup>



              <Select
                bg={bgColour}
                borderColor={borderColor}
                color={plhColor}
                placeholder='---Select folder---'
              >

              {folder.length>0 &&
              
              folder.map((item,index)=>(

<option key={index}>{item}</option>

              ))
            
              }


              </Select>
           <FileInput/>









           </Grid>

           </Center>
              </Box>
         
        
    </div>
  )
}

export default  Content