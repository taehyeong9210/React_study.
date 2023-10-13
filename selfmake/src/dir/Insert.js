import React, { useState } from 'react';
import './Insert.css';
import Button from 'react-bootstrap/Button';

const Insert = ({ onInsert }) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClickButton = () => {
    onInsert(input);
    setInput('');
  };

  return (
    <form
      className="Insert"
      onSubmit={(e) => {
        e.preventDefault();
        onClickButton();
      }}
    >
      <input
        className="InsertInput"
        value={input}
        placeholder="할 일"
        onChange={onChange}
      ></input>
      <Button type="submit" variant="outline-info">
        등록
      </Button>{' '}
    </form>
  );
};
export default Insert;
