import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, status: false }]);
      setTodo('');
    }
  }

  return (
    <div className="App">
      <span className="heading">What Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      {/* <TodoList /> */}
      {
        todos.map((el, i) => <li key={i}>{el.todo}</li>)
      }
    </div>
  );
}

export default App;
