import {NewTodo, Todo} from "../types.ts";
import React from "react";

export type TodoContextValue = {
    todos: Todo[];
    loadTodos: () => Promise<void>;
    updateTodo: (todo: Todo) => Promise<void>;
    createTodo: (todo: NewTodo) => Promise<void>;
}

export const TodoContext = React.createContext<TodoContextValue>({} as TodoContextValue);