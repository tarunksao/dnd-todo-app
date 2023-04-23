import React from 'react'
import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todosHeading">Active Tasks</span>
                {
                    todos.map((todo) => (
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>
            <div className="removeTodos">
                <span className="todosHeading">Completed Tasks</span>
                {
                    todos.map((todo) => (
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList