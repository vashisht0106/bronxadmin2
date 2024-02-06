import * as React from 'react'
import Home from './screen/Home';
import MyChart from './screen/BarChart';
import {Box,HStack,Text,Grid, VStack, Button,Image, Center}  from '@chakra-ui/react'
//import {dotenv} from 'dotenv';

import { ChakraProvider } from '@chakra-ui/react'
import Display from './screen/Display';
import PieChart from './screen/PieChart';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './screen/Navbar';
//import { SocketProvider } from './context/socket/SocketProvider';

function App() {
  
  return (
    <BrowserRouter>
      {/*<SocketProvider>*/}
      <Navbar/>
      {/*<Display/>*/}
      {/*<MyChart />
      <PieChart/>*/}
      {/*<Content/>*/}
      <Main/>
    {/*</SocketProvider>*/}
    </BrowserRouter>
  )
}

export default App;