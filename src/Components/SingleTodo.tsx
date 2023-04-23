import React, { useEffect, useState, useRef } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((el) => todo.id === id ? { ...todo, todo: editTodo } : todo));
        setEdit(false);
    }

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (

                    <form
                        className='singleTodo'
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {
                            edit ? (
                                <input
                                    ref={inputRef}
                                    value={editTodo}
                                    onChange={
                                        (e) =>
                                            setEditTodo(e.target.value)
                                    }
                                    className='singleTodoTitle'
                                />
                            ) : todo.status ? (
                                <s className='singleTodoTitle'>{todo.todo}</s>
                            ) : (
                                <span className='singleTodoTitle'>{todo.todo}</span>
                            )
                        }
                        <span className="icon" onClick={() => {
                            if (!edit && !todo.status) {
                                setEdit(!edit);
                            }
                        }}><AiFillEdit /></span>
                        <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
                    </form>
                )
            }
        </Draggable>
    )
}

export default SingleTodo