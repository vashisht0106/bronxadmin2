import React, { useState } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import Form from 'react-bootstrap/Form';
//import { render } from '@testing-library/react';
import { BiSelectMultiple } from "react-icons/bi";
import './Custom.css'
import { Box, Checkbox, HStack,VStack,Flex, Text, Select, Input, InputGroup, InputRightElement, Button, Icon, Center, Spacer,Grid } from '@chakra-ui/react'
import { bgColour, borderColor, plhColor } from '../Dynamic';
import { IoMdCloudUpload } from "react-icons/io";
import Content from './Content';
import axios from 'axios';


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
 export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
// export const CustomMenu = React.forwardRef(
//  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//    const [value, setValue] = useState('');

//    return (
//      <div
//        ref={ref}
//        style={style}
//        className={className}
//        aria-labelledby={labeledBy}
//      >
//        <Form.Control
//          autoFocus
//          className="mx-3 my-2 w-auto"
//          placeholder="Type to filter..."
//          onChange={(e) => setValue(e.target.value)}
//          value={value}
//        />
//        <ul className="list-unstyled">
//          {React.Children.toArray(children).filter(
//            (child) =>
//              !value || child.props.children.toLowerCase().startsWith(value),
//          )}
//        </ul>
//      </div>
//    );
//  },
//);

//render(
//  <Dropdown>
//    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//      Select folder
//    </Dropdown.Toggle>

//    <Dropdown.Menu as={CustomMenu}>
//      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//      <Dropdown.Item eventKey="3" active>
//        Orange
//      </Dropdown.Item>
//      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//    </Dropdown.Menu>
//  </Dropdown>,
//);





export const FileInput = ({BACKEND_URL}) => {
//console.log(BACKEND_URL)

console.log('BACKEND_URL',BACKEND_URL);
//console.log('url',url)
  const [selectedFile, setSelectedFile] = useState(null);
  const [file_status, setFile_status] = useState(false);
  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    document.getElementById('fileInput').click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };







  const ContentUpload = async () => {

    
    if (!selectedFile) {
      console.log('No file selected');
      return;
    }
    
    try {
      setFile_status(true)
      const formData = new FormData();
     
  
        formData.append('video', selectedFile);
  
    
  
      // You can also append additional data to the form data if needed
      // formData.append('key', 'value');
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('File uploaded successfully', response.data);

      setFile_status(false);

    } catch (error) {
      console.error('Error uploading file', error);
    }
  };
  







  return (
    //<div className="file-input-container">
      //<Center bg={'red'}>
        <Box>
      <label htmlFor="fileInput" className="file-input-label">

        <HStack gap={'5'} justifyContent={'end'}>
      {/*<FaUpload className="upload-icon" />*/}
      <Button   className="file-input-label" bg={bgColour} variant={'outline'} onClick={handleButtonClick}>

     <Icon as={BiSelectMultiple} color={plhColor}/>  

      </Button>









<HStack  gap={'5'} >
              
              <Box>

                {/*{/<Icon as={FaUpload} color={plhColor} boxSize={4} />/}*/}
                <Button
                 leftIcon={<Icon as={IoMdCloudUpload} color={plhColor} boxSize={5} 
              
                />} variant='outline' borderColor={borderColor}   
                onClick={ContentUpload}>
                  <Text color={plhColor}>{file_status?"Uploading":'Upload'}</Text>
                </Button>
              </Box>

        {selectedFile ?
              <Box  maxH={'10'}  maxWidth={'150'} overflow={'hidden'}>
                <Text fontSize={'10'} color={plhColor}>{selectedFile.name} </Text>

              </Box>
         :'' }
            </HStack>


</HStack>


      </label>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      </Box>
      //</Center>

      
    //{/*</div>*/}
  );
};

