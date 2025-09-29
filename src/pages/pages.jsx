import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage';
import LoginPage from '../pages/loginPage/loginPage';

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={MainPage}/>
                <Route path='login' Component={LoginPage}/>
            </Routes>
        </BrowserRouter>
    )
}