import TodoTemplate from './directory/TodoTemplate';
import TodoInsert from './directory/TodoInsert';
import TodoList from './directory/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
