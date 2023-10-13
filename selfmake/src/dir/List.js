import React from 'react';
import Item from './Item';

const List = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Item key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default List;
