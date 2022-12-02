import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

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