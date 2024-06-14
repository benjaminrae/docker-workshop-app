import axios from "axios";
import {PropsWithChildren, useEffect, useState} from "react";
import {NewTodo, Todo} from "../types.ts";
import {TodoContext} from "./TodoContext.ts";


export const TodoContextProvider = ({children}: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        loadTodos().catch(error => console.log(error.message));
    }, []);
    const loadTodos = async () => {
        const response = await axios.get<Todo[]>('/todos');
        setTodos(response.data);
    };

    const updateTodo = async (todo: Todo) => {
        await axios.patch(`/todos/${todo.id}`, todo);

        setTodos(prevTodos =>
            prevTodos.map(prevTodo =>
                todo.id === prevTodo.id ? todo : prevTodo));
    };

    const createTodo = async (newTodo: NewTodo) => {
        try {
            const response = await axios.post<Todo>('/todos', newTodo);
            setTodos(prevTodos => [...prevTodos, response.data]);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <TodoContext.Provider value={{
            todos,
            updateTodo,
            loadTodos,
            createTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}