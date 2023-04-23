import React from 'react'
import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodo: Todo[];
    setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodo, setCompletedTodo }) => {
    return (
        <div className="container">
            <Droppable droppableId='todosList'>
                {
                    (provided) => (
                        <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todosHeading">Active Tasks</span>
                            {
                                todos.map((todo, index) => (
                                    <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
            </Droppable>
            <Droppable droppableId='completedTodos'>
                {
                    (provided) => (
                        <div className="removeTodos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todosHeading">Completed Tasks</span>
                            {
                                completedTodo.map((todo, index) => (
                                    <SingleTodo index={index} todo={todo} todos={completedTodo} key={todo.id} setTodos={setCompletedTodo} />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}

export default TodoList