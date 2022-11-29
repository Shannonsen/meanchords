import React from 'react';
import shopimg from 'assets/img/discs.jpg';
import 'styles/pages/store.scss';
const Store = () => {
    return (
        <div className ="container-fluid container-store">
        <div className="container-filter">
            <img src={shopimg} className="img2" alt="CD" />
        </div>
        </div>
    );
}

export default Store;