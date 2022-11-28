import React from 'react';
import shopimg from 'assets/img/discs.jpg';
import 'styles/pages/store.scss';
const Store = () => {
    return (
        <div class ="container-fluid container-store">
        <div class="container-filter">
            <img src={shopimg} class="img2" alt="CD" />
        </div>
        </div>
    );
}

export default Store;