import React from 'react';
import "./banner.css"
import bannerimage from "../../images/Group15.png"
const Banner = () => {
    return (
        <>
        <div className='container-1'>
       <div className='heads'>
       <h1 id='first'>Fresh</h1>
        <h1 id='second'>2022</h1>
        <h1 id='third'>Look</h1>
       </div> 

        <div className='photo'>
            <img src={bannerimage} alt='photoofmodel'/>
        </div>
        </div>

        </>
       
    );
};
export default Banner;
