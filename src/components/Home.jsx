import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <h1>Link Characters</h1>
            <Link  to={'/character'}>!HOLA!. presiona Aquí para ir la lista de Characteres</Link>
        </div>
    );
};

export default Home;