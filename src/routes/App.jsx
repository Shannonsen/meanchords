import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'containers/Layout';
import Login from 'containers/login/Login';
import Register from 'containers/login/Register';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import 'styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;