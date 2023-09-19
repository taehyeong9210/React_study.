import { useState } from "react";
import React from "react";
import List from "./dir/List";
import Insert from "./dir/Insert";

const App = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    goal: "",
  });
  const [submit, setSubmit] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const onClickNameGoal = (e) => {
    setSubmit({
      subname: formdata.name,
      subgoal: formdata.goal,
    });
  };

  const [insertApp, setInsertApp] = useState([]);

  const InsertApp = (newItem) => {
    setInsertApp([...insertApp, newItem]);
    console.log(...insertApp, newItem);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={formdata.name}
          name="name"
          placeholder="이름"
          onChange={onChange}
        ></input>
        <input
          name="goal"
          value={formdata.goal}
          type="text"
          placeholder="목표"
          onChange={onChange}
        ></input>
        <button onClick={onClickNameGoal}>등록</button>
      </div>
      <div>
        {submit.subname}님의 목표: {submit.subgoal}
      </div>
      <div>
        <Insert onInsert={InsertApp} />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default App;
