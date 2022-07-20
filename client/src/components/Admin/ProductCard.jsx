import React, { useEffect } from 'react';

import { Card, Button } from 'react-bootstrap';

const ProductCard = ({
  getAllProducts,
  products,
  setProducts,
}) => {
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(products);

  const reRenderProducts = products.map((product) => {
    return (
      <Card
        key={product._id}
        style={{
          width: '15rem',
          margin: '10px auto',
        }}
      >
        <Card.Img variant='top' src='./images/p2.png' />
        <Card.Body>
          <Card.Title>
            <h5
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              Name:
            </h5>
            {product.name}
          </Card.Title>
          <Card.Text>
            {' '}
            <h5
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              Discriptoin:
            </h5>
            {product.discription}
          </Card.Text>
          <Button
            styles={{ margin: '0px 0px' }}
            variant='primary'
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {reRenderProducts}
    </div>
  );
};

export default ProductCard;
