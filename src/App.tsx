import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';
import TodoList from './Components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, status: false }]);
      setTodo('');
    }
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination } = result;
    console.log(source, destination);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">What Todo</span>
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <TodoList todos={todos} setTodos={setTodos} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo} />
      </div>
    </DragDropContext>
  );
}

export default App;
