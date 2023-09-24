import React from 'react';
import Navbar from '../navbar/navbar';
import ContactForm from '../contactform/contact';
import ProductListing from '../productlisting.js/productlisting';
import "./main.css"

const App = () => {
    const navbarItems = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT', id: 'about' },
        {
            name: 'OUR PRODUCTS',
            id: 'product',
            child: [
                { name: 'PRODUCT 1', id: 'p1' },
                { name: 'PRODUCT 2', id: 'p2' },
                { name: 'PRODUCT 3', id: 'p3' },
                { name: 'PRODUCT 4', id: 'p4' },
            ],
        },
        { name: 'CONTACT US', id: 'contact' },
    ];

    return (
        <div className="App">
            <Navbar items={navbarItems} />
            <ProductListing />

        </div>
    );
};

export default App;
