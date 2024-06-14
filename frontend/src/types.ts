export type Todo = {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'doing' | 'done';
}

export type NewTodo = {
    title: string;
    description: string;
}