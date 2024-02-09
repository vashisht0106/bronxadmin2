import React from 'react'
import Sidebar from './Sidebar'
import {Box,HStack,Button} from '@chakra-ui/react'
import Main from '../Main'
import { bgColour } from '../Dynamic'
const Home = () => {
  return (
    <Box bg={bgColour} display={'flex'}>
    
<Box w={'20%'} bg={bgColour}>
   
<Sidebar/> 

</Box>
<Box w={'90%'}>
<Main/>

</Box>




    </Box>
  )
}

export default Home