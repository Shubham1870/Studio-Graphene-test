import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productlisting.css';
import underlineproduct from "../../images/Group 17.png"
import ContactForm from '../contactform/contact';
import arrow1 from "../../images/Arrow 2.png"
import arrow2 from "../../images/Arrow 1.png"
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryIsSelected, setCategoryIsSelected] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Data not found', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error in fetching', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categoryIsSelected) {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoryIsSelected}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Not able to get products', error);
        });
    }
  }, [categoryIsSelected]);

  const handleCategoryChange = (e) => {
    setCategoryIsSelected(e.target.value);
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < products.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <>
    <div className='product-container'>
    <div className='products-header'><h2>New products</h2>
      <div className='arrow'>
      
          <button className="prev-btn" onClick={handlePrev}>
          <img src={arrow1} alt="prevbutoon"/>
          </button>
          <button className="next-btn" onClick={handleNext}>
          <img src={arrow2} alt="prevbutoon2"/>
          </button>
      </div></div>
      
      <img className='underline' src={underlineproduct} alt='linebelowproduct'/>
      <div className="product-list">
        <div className='sidebar'>
          <select onChange={handleCategoryChange} value={categoryIsSelected}>
            <option value="">Select category</option>
            {categories.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <h4>Apparel</h4>
          <h3>Accessories</h3>
          <h4>Best Seller</h4>
          <h4>50% Off</h4>
        </div>
        <div className="slider-container">
         
        <ul className="product-cards">
            {products.slice(startIndex, startIndex + cardsPerPage).map((product) => (
              <li className="product-card" key={product.id}>
                <div id="product-image1">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    <ContactForm />
    </>
  );
};

export default ProductListing;
