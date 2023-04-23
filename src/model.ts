export interface Todo {
    id: number,
    todo: string,
    status: boolean
}

type Actions = { type: 'add', payload: string }
    | { type: 'remove', payload: number }
    | { type: 'done', payload: number }

const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                { id: Date.now(), todo: action.payload, status: false }
            ];
        case 'done':
            return state.map((todo) => todo.id === action.payload ? { ...todo, status: !todo.status } : todo);
        case 'remove':
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};

import { useReducer } from 'react';
import { act } from 'react-dom/test-utils';

const ReducerExample = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
    )
}