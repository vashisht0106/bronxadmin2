import React from 'react'
import Display from './Display'
import MyChart from './BarChart'
import {Box} from '@chakra-ui/react'
import PieChart from './PieChart'
const Dashboard = () => {
  return (
    <Box>

        <Display/>

        <MyChart/>
        <PieChart/>
    </Box>


  )
}

export default Dashboard