import React from 'react'
import { Box, Input, VStack ,Text, Flex} from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomToggle ,CustomMenu} from './Custom';
function Content() {

const DropdownEvent=()=>{

return(

<Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Select folder
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Orange
      </Dropdown.Item>
      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

)

}


  return (
    <div style={{marginTop:'70px', minHeight: '100vh', backgroundColor: 'blue',}}>

{/*<Box bg={'red'} w={'25%'} minHeight={'100vh'} position={'fixed'}>sdf</Box>*/}
<Flex>

  
</Flex>

<Box  bg={'white'}>
<Text color={'black'}>dskjfhv</Text>





</Box>

<Box>sdjfb</Box>
 </div>
  )
}

export default Content