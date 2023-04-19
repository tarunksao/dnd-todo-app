import React, { useRef } from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input' onSubmit={(e) => {
            handleSubmit(e)
            inputRef.current?.blur();
        }}>
            <input
                type="input"
                placeholder="Enter a task"
                className="inputBox"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='inputSubmit' type='submit'>Go</button>
        </form>
    )
}

export default InputField