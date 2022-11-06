import React from 'react'
import Layout from 'containers/Layout'
import Login from 'containers/login/Login'
import Register from 'containers/login/Register'
import 'styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login />
            <Register />
        </Layout>
    );
}

export default App;