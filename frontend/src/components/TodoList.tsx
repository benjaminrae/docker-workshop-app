import {Todo} from "../types.ts";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext.ts";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import {TodoCard} from "./TodoCard.tsx";
import {Paper} from "@mui/material";

export const TodoList = (props: { todos: Todo[], title: string }) => {
    const {updateTodo} = useContext(TodoContext);

    return <List component={Paper} sx={{flex: 1}} subheader={
        <ListSubheader component="h2" sx={{fontSize: "2rem"}}>
            {props.title}
        </ListSubheader>
    }>
        {props.todos.map((todo: Todo) => (
            <ListItem key={todo.id}>
                <TodoCard todo={todo} onStatusChange={(todo) => updateTodo(todo)}/>
            </ListItem>
        ))}
    </List>;
};