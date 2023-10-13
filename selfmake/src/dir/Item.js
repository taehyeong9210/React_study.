import React from 'react';
import './Item.css';
import Button from 'react-bootstrap/Button';

const Item = ({ todo, onDelete }) => {
  return (
    <div
      className="Item"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div>{todo}</div>
      <Button onClick={onDelete} variant="danger">
        삭제
      </Button>{' '}
    </div>
  );
};

export default Item;
