import React from 'react'
import { createBrowserRouterBrowserRouter,Routes,Route } from "react-router-dom";
import Home from './screen/Home';
import Layout from './screen/Layout';
import Content from './screen/Content';
import Event from './screen/Event';
import { SocketProvider } from './context/socket/SocketProvider';
import Dashboard from './screen/Dashboard';
const Main = () => {
  return (
<SocketProvider>
    <Routes>
      <Route path="/" element={<Dashboard/>} /> 
      <Route path="/layout" element={<Layout/>} /> 
      <Route path="/manage_content" element={<Content/>} /> 
      <Route path="/manage_event" element={<Event/>} /> 

    </Routes>
</SocketProvider>
  )
}

export default Main