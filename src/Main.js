import React from 'react'
import { createBrowserRouterBrowserRouter,Routes,Route } from "react-router-dom";
import Home from './screen/Home';
import Layout from './screen/Layout';
import Content from './screen/Content';
import Event from './screen/Event';
import { SocketProvider } from './context/socket/SocketProvider';
import Dashboard from './screen/Dashboard';
import Sidebar from './screen/Sidebar';
import VideoResolutionAdjuster from './screen/Resolution';
import Login from './screen/Login ';
const Main = () => {
  return (
<SocketProvider>
  

   
    <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/dashboard" element={<Dashboard/>} /> 
      <Route path="/layout" element={<Layout/>} /> 
      <Route path="/manage_content" element={<Content/>} /> 
      <Route path="/manage_event" element={<Event/>} /> 
      <Route path="/set_resolution" element={<VideoResolutionAdjuster/>} /> 

    </Routes>
   
</SocketProvider>
  )
}

export default Main