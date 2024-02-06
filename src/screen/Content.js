import React, { useEffect, useRef, useState } from 'react'
import { Box, Checkbox, HStack,VStack,Flex, Text, Select, 
  Input, InputGroup, InputRightElement, Button, Icon, Center, Spacer,Grid, SelectField } from '@chakra-ui/react'
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { FaUpload } from 'react-icons/fa'
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiFolderVideoLine } from "react-icons/ri";
import './Content.css'
import axios from 'axios';
import { bgColour, txtColor, plhColor, borderColor } from '../Dynamic';
import { FileInput } from './Custom';

import {useDispatch,useSelector} from 'react-redux'
import { ContentAction } from '../redux/layoutReducer/action';

const Content = () => {
  const [file, setFile] = useState([]);  
  const [folder, setFolder] = useState([]);  
  const [folderdata, setFolderdata] = useState([]);
  const [rootfolder, setRootfolder] = useState('');
  const [childfolder,setChildfolder] = useState("");
//for reading file
const [filterfile,setFilterfile]=useState('null');



const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;
const dispatch=useDispatch();
const fetchData = async () => {
  try {

      const response = await axios.get(`${BACKEND_URL}/api/v1/readfolder`);
      setFolder(response.data);
      setFolderdata(response.data)
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
   

    fetchData(); // Call the async function inside useEffect
  }, []);


  //const fileInputRef = useRef(null);
  //const [filename, setFilename] = useState('null')
  //const handleIconClick = () => {
  //  fileInputRef.current.click();
  //};

  //const handleFileChange = (event) => {
  //  // Handle the file change event here
  //   setFile(event.target.files[0]);
  //  //console.log('Selected file:', selectedFile);
  //  //setFilename(selectedFile);
  //};


const createFolder=async()=>{


const requestData = {
  createrootfolder:rootfolder,
  createchildfolder:childfolder
};


try {
  const config={headers:{"Content-Type":"application/json"}}
const {data}=await axios.post(`${BACKEND_URL}/api/v1/createfolder`,requestData,config)

fetchData();
setRootfolder('')

} catch (error) {
 console.log(error) 
}

}




//handle read file from folder


const Readfile=async(filterfile)=>{

console.log('ROOTFOLDER',filterfile)


try {
  if(filterfile){

  
    const {data} = await axios.get(`${BACKEND_URL}/api/v1/readchildfolder/${filterfile}`);
    setFolderdata(data);
    dispatch(ContentAction(filterfile));
  
  }
  else{
    const { data} = await axios.get(`${BACKEND_URL}/api/v1/readfolder/`);
    dispatch(ContentAction(false));
  
  
    setFolderdata(data);
  }


} catch (error) {
  console.log(error)
}


}


useEffect(()=>{


Readfile(filterfile)


},[filterfile])



// handle content uploading

//console.log(selectedFile)





  return (
    <div>
      <Box bg={bgColour} minHeight={'100vh'} >
        <Center >
      <Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={'5'}

      mt={'2'}
      //bg={'red'}
   
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
                value={filterfile}
                onChange={(e)=>setFilterfile(e.target.value)}
              >

              {folder && folder.length>0 &&
              
              folder.map((item,index)=>(

<option key={index} value={item}>{item}</option>

              ))
            
              }


              </Select>


           <FileInput BACKEND_URL={BACKEND_URL}/>








           </Grid>







           </Center>




           <Center>
<Grid
      templateColumns={{ sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }}
      gap={'15'}
      mt={'8'}
      p={'10'}
>

{}


{folderdata.length>0 &&
              
              folderdata.map((item,index)=>(
<VStack  >
<Box cursor={'pointer'} >
  
<Icon as={RiFolderVideoLine} boxSize={20} key={index} color={plhColor} />

 
</Box> 



<Box bmaxH={'10'} maxW={'160'} cursor={'pointer'}>
<Text fontSize={'15'} >{item}</Text>


</Box>

</VStack>




              ))
            
              }




</Grid>
</Center>



              </Box>
         
        
    </div>
  )
}

export default  Content