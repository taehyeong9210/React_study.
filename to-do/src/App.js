import TodoTemplate from './directory/TodoTemplate';
import TodoInsert from './directory/TodoInsert';
import TodoList from './directory/TodoList';
import { useState, useCallback, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  // function create() {
  //   const array = [];
  //   for (let i = 1; i <= 2500; i++) {
  //     array.push({ id: i, text: `할 일 ${i}`, checked: false });
  //   }
  //   return array;
  // }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}
export default App;
