import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    discription: '',
    image: '',
  });

  return (
    <div id='productform'>
      <h2 id='headerTitle'>Add Product</h2>

      {/* name */}
      <div className='row'>
        <label>Product Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
        />
      </div>

      {/* Discription */}
      <div className='row'>
        <label>Enter Product Discription</label>
        <input
          type='text'
          name='discriptoin'
          id='discriptoin'
          value={product.discription}
          onChange={(e) =>
            setProduct({
              ...product,
              discription: e.target.value,
            })
          }
        />
      </div>
      <div className='row'>
        <label>Upload Image</label>
        <input
          type='file'
          name='discriptoin'
          id='discriptoin'
          value={product.image}
          onChange={(e) =>
            setProduct({
              ...product,
              image: e.target.value,
            })
          }
        />
      </div>
      {/* button */}
      <div id='button' className='row'>
        <button className='btn-primary'>Upload</button>
      </div>
    </div>
  );
};

export default AddProduct;
