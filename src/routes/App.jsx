import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'containers/Layout';
import Login from 'containers/login/Login';
import Register from 'containers/login/Register';
/* pages */
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Store from 'pages/Store';
import AboutUs from 'pages/AboutUs';
import Profile from 'pages/Profile';
import Details from 'pages/Details';
import Car from 'pages/Car';
import Buy  from 'pages/Buy';
import SucessfullBuy from 'pages/SucessfullBuy';
/* css */
import 'styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/store" element={<Store />}></Route>
                    <Route exact path="/about-us" element={<AboutUs />}></Route>
                    <Route exact path="/profile" element= {<Profile />} />
                    <Route path="/detail/:id" element={<Details/>}></Route>
                    <Route exact path="/shoppingCar" element= {<Car/>} />
                    <Route exact path="/buyproducts" element= {<Buy/>} />
                    <Route path="/sucessBuy" element={<SucessfullBuy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter >
    );
}

export default App;