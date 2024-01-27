import * as React from 'react'
import Home from './screen/Home';
import MyChart from './screen/BarChart';

// import { ChakraProvider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Display from './screen/Display';
import PieChart from './screen/PieChart';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './screen/Navbar';
import Menu from './screen/Menu';

function App() {
  return (
    <BrowserRouter>
    {/* <ChakraProvider> */}
      {/* <Home /> */}
      <Navbar/>
      {/*<Display/>*/}
      {/*<MyChart />*/}
      {/*<PieChart/>*/}
      <Main/>
      {/* <Menu/> */}
    {/* </ChakraProvider> */}
    </BrowserRouter>
  )
}

export default App;