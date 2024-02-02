import React,{useEffect,useState,useContext} from "react";
import SocketContext from "./SocketContext";

import {io} from 'socket.io-client';

export const SocketProvider=(props)=>{
const [socket, setSocket] = useState(null);
const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;
useEffect(()=>{
console.log('backendurl',BACKEND_URL)
    const newSocket = io(BACKEND_URL);
setSocket(newSocket)

newSocket.on('connect',()=>{
    console.log('connected to socket server');
},[]);




return () => newSocket.disconnect();
},[])



return(

<SocketContext.Provider value={socket}>

{props.children}

</SocketContext.Provider>


)


}




//const useSocket = () => {
//    const socket = useContext(SocketContext);
//    if (!socket) {
//      throw new Error('useSocket must be used within a SocketProvider');
//    }
//    return socket;
//  };




//  export {SocketProvider,useSocket}