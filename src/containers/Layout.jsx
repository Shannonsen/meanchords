import React from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

const Layout = ({ children, admin }) => {
	return (
		<>
			<Header admin={admin}/>
			<div className="Layout">
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Layout;