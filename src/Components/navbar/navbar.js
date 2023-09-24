import React from 'react';
import { Link } from 'react-router-dom'
import "./navbar.css"
import Banner from '../banner/banner';
import Group16Image from '../../images/Group16.png';
import Background from '../../images/Rectangle.png'
const Navbar = ({ items }) => {
    console.log(items)
    return (
        <>
            <div class="maincontainer">
                <div class="left-header">
                    <i class="fa-solid fa-truck-fast"></i>
                    <h4>Free Delivery |</h4>
                    <h4>Return Policy</h4>
                </div>
                <div class="right-header">
                    <h4>Login </h4>
                    <h4>Follow Us</h4>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className='second-container'>
                <div className='background'><img src={Background} className='background' alt='black rectangle' /></div>
                <div className='secondcontainer-2'>
                <div className='container'>
  <div className='heading'>
    <h1>ShopKart</h1>
  </div>
  <div className='cart'>
    <span>WISHLIST(0)</span>
    <span>BAG(0)</span>
  </div>
</div>
                    
                    
                        <img src={Group16Image} className='Separator' alt="Separator" />
                    
                    <nav>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <Link to={`#${item.id}`}>{item.name}</Link>
                                    {item.child && item.child.length > 0 && (
                                        <ul>
                                            {item.child.map((subItem) => (
                                                <li key={subItem.id}>
                                                    <Link to={`#${subItem.id}`}>{subItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Banner /></div>
            </div>


        </>

    );
};

export default Navbar;
