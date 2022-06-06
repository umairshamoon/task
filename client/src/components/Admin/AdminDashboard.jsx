import React, { useState } from 'react';
import NavbarComp from '../NavbarComp';
import AddProduct from './AddProduct';
import './adminDashboard.css';
import ProductCard from './ProductCard';
import axios from 'axios';
const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        'api/products/get-all-products'
      );
      setProducts(...products, data);
    } catch (err) {
      // alert(err .response.data.msg);
      console.log(err);
    }
  };
  return (
    <div>
      <NavbarComp />
      <ProductCard
        getAllProducts={getAllProducts}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default AdminDashboard;
