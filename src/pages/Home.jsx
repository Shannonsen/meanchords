import React from 'react';
import 'styles/pages/home.scss';
import homeimg from 'assets/img/homeimg.png';


const Home = () => {
    return (
        <div class="container-fluid text-center container-img">
            <div class="container-shadow">
                <img src={homeimg} class="img" alt="CD" />
                <div class="vinilo-text"><h2>Vinilos</h2></div>
                <div class="cd-text"><h2>CD's</h2></div>
            </div>
        </div>
    );
}

export default Home;