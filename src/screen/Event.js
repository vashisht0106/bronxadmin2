import React, { useEffect,useContext } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
  chakra,
  Tooltip,
  Box,Text
} from '@chakra-ui/react';

import {useSelector,useDispatch} from 'react-redux'
import { fetchEvent } from '../redux/layoutReducer/action';
import { bgColour, borderColor, txtColor } from '../Dynamic';
import SocketContext from '../context/socket/SocketContext';
const Event = () => {
const dispatch=useDispatch()
const socket=useContext(SocketContext);
//const socket=useSocket()
useEffect(()=>{

dispatch(fetchEvent())

},[socket])


const {event} =useSelector((state)=>state.layoutReducer)




const handlePublish = (eid) => {
  // Replace this with the actual data you want to send to the server
  //const dataToSend = {
  //  eventId: eventId,
  //  // Add other data fields as needed
  //};

  // Emit the 'screenvalue' event to the server
  console.log('eid',eid)
  socket.emit('eventID', eid);
};







  return (
    <Table variant="striped" colorScheme="teal" size="md">
      <Thead fontSize={12} bg={bgColour} color={txtColor}>
        <Tr >
          <Th color={txtColor}>Event ID</Th>
          <Th color={txtColor}>Layout Style</Th>
          <Th color={txtColor} w={10}>Source</Th>
          <Th color={txtColor}>Start Date</Th>
          <Th color={txtColor}>Start Time</Th>
          <Th color={txtColor}>End Date</Th>
          <Th color={txtColor}>End Time</Th>
          <Th color={txtColor}>Actions</Th>
        </Tr>

{event &&

event.map((item,index)=>(

<Tr key={index} >

<Td>{item.eventid}</Td>
<Td>{item.layoutstyle}</Td>
<Td ><Box w={'20'} h={'20'}><Text>{item.source}</Text></Box></Td>
<Td>{item.startdate}</Td>
<Td>{item.enddate}</Td>
<Td>{item.starttime}</Td>


<Td>{item.endtime}</Td>
<Td><Button w='12' h='6' fontSize={10} variant={'outline'} color={borderColor}onClick={()=>handlePublish(item.eventid)}>Publish</Button></Td>
</Tr>

))

}

      </Thead>
 


   




      <Tbody>
         </Tbody>
    </Table>
  );
};

export default Event;