import React, { useEffect } from 'react';

import { Card, Button } from 'react-bootstrap';

const ProductCard = ({
  getAllProducts,
  products,
  setProducts,
}) => {
  useEffect(() => {
    getAllProducts();
  });
  console.log(products);
  const productcard = async () => {
    products.map((product) => {
      return (
        <Card
          style={{
            width: '18rem',
            margin: '10px auto',
          }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.discription}</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <div
      style={{
        margin: '10px auto',
        padding: '10px auto',
        display: 'flex',

        flexFlow: 'row wrap',
      }}
    >
      <Card
        style={{
          width: '18rem',
          margin: '10px auto',
        }}
      >
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>{' '}
    </div>
  );
};

export default ProductCard;
