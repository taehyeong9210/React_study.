import React, { useState } from 'react';
import List from './dir/List';
import Insert from './dir/Insert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import WeatherApp from './dir/WeatherApp';

function App() {
  const [formdata, setFormdata] = useState({
    name: '',
    goal: '',
  });

  const [submit, setSubmit] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onDelete = (index) => {
    // filter 함수를 사용하여 삭제할 아이템을 제외한 새로운 배열을 생성
    const updatedInsertApp = insertApp.filter((_, i) => i !== index);
    setInsertApp(updatedInsertApp);
  };

  const onClickNameGoal = () => {
    setSubmit({
      subname: formdata.name,
      subgoal: formdata.goal,
    });
  };

  const [insertApp, setInsertApp] = useState([]);

  const InsertApp = (newItem) => {
    setInsertApp((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <WeatherApp />
      <div style={styles.container}>
        <input
          type="text"
          value={formdata.name}
          name="name"
          placeholder="이름"
          onChange={onChange}
          style={styles.input}
        />
        <input
          name="goal"
          value={formdata.goal}
          type="text"
          placeholder="목표"
          onChange={onChange}
          style={styles.input}
        />
        <Button
          onClick={onClickNameGoal}
          variant="dark"
          className="float-right"
        >
          등록
        </Button>
      </div>
      <div style={styles.result}>
        {submit.subname}님의 목표: {submit.subgoal}
      </div>
      <div>
        <Insert onInsert={InsertApp} />
      </div>
      <div>
        <List todos={insertApp} onDelete={onDelete} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    alignItems: 'flex-start', // 왼쪽으로 정렬

    padding: '5px',
    marginTop: '20px',
  },
  input: {
    width: '200px',
    height: '34px',
    flex: 1,
    marginRight: '10px',
  },
  result: {
    textAlign: 'center',
    fontSize: '20px',
  },
  insert: {},
};
export default App;
