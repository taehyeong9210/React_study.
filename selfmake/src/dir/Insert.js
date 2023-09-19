import React, { useState } from "react";

const Insert = ({ onInsert }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClickButton = () => {
    onInsert(input);
  };

  return (
    <div>
      <input value={input} placeholder="할 일" onChange={onChange}></input>
      <button onClick={onClickButton}>등록</button>
    </div>
  );
};

export default Insert;
