import React from 'react'
import { createBrowserRouterBrowserRouter,Routes,Route } from "react-router-dom";
import Home from './screen/Home';
import Layout from './screen/Layout';
import Content from './screen/Content';
const Main = () => {
  return (

    <Routes>
      <Route path="/layout" element={<Layout/>} /> 
      <Route path="/manage_content" element={<Content/>} /> 

    </Routes>
  )
}

export default Main