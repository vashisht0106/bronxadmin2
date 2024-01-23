import * as React from 'react'
import Home from './Home';
import MyChart from './BarChart';

import { ChakraProvider } from '@chakra-ui/react'
import Display from './Display';
import PieChart from './PieChart';

function App() {
  return (
    <ChakraProvider>
      <Home />
      <Display/>
      <MyChart />
      <PieChart/>
    </ChakraProvider>
  )
}

export default App;