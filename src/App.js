import * as React from 'react'
import Home from './screen/Home';
import MyChart from './screen/BarChart';

import { ChakraProvider } from '@chakra-ui/react'
import Display from './screen/Display';
import PieChart from './screen/PieChart';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import Content from './screen/Content';

function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
      <Home />
      {/*<Display/>*/}
      {/*<MyChart />*/}
      {/*<PieChart/>*/}
      {/*<Content/>*/}
      <Main/>
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App;