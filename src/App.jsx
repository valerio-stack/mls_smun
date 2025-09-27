import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './components/mainPage/mainPage';
import LoginPage from './components/loginPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={MainPage}/>
          <Route path='login' Component={LoginPage}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
