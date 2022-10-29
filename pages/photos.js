import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function photos(props) {
    return (
        <>
            <Navbar/>
            <div className='p-5'></div>
            <Content/>
            <Footer/>
        </>
    );
}

export default photos;