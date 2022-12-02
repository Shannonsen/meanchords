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
import AdminLayout from 'containers/AdminLayout';
import ControlPanel from 'pages/ControlPanel';
import DiscPanel from 'pages/DiscPanel';
import AddDisc from 'pages/AddDisc';
import authService from 'services/auth-services';
import { useState } from 'react';
import SalesPanel from 'pages/SalesPanel';
import ReportPanel from 'pages/ReportPanel';

const App = () => {
    const [isAdminActive, setAdminActivity] = useState(sessionStorage.getItem("state") || false);
    const user = authService.getCurrentUserRol() || 2;

    const onChangeA = (state) => {
        sessionStorage.setItem("state", state)
        setAdminActivity(state)
    }
    console.log("Log", isAdminActive, user);
    let layout;
    if(user === 1 && isAdminActive){
        layout = 
            <AdminLayout admin={onChangeA}>
                <Routes>
                    <Route exact path="/panel" element={<ControlPanel />}></Route>
                    <Route exact path="/a/pedidos" element={<SalesPanel />}></Route>
                    <Route exact path="/a/discos" element={<DiscPanel />}></Route>
                    <Route exact path="/a/discos/add" element={<AddDisc />}></Route>
                    <Route exact path="/a/discos/edit/:id" element={<AddDisc />}></Route>
                    <Route exact path="/a/reportes" element={<ReportPanel />}></Route>
                    <Route exact path="/" element={<ControlPanel />}></Route>
                </Routes>
            </AdminLayout>
    }
    else{
        layout = 
            <Layout admin={onChangeA}>
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
        console.log();
    }


    return (
        <BrowserRouter>
            {layout}
        </BrowserRouter >
    );
}

export default App;