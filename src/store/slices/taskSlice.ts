import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
    taskName: string;
    completed: boolean;
}

interface TodoState {
    todo: TaskState | {};
}

const initialState: TodoState = {
    todo: {},
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            let cpyTodo = state.todo;
            let newcpyTodo = { ...cpyTodo, ...action.payload };
            state.todo = newcpyTodo;
        },
        completeTodo: (state, action) => {
            let cpyTodo = state.todo;
            let newcpyTodo = { ...cpyTodo, completed: action.payload };
            state.todo = newcpyTodo;
        },
        deleteTodo: (state) => {
            state.todo = {};
        },
    },
});

export const { setTodo, completeTodo, deleteTodo } = taskSlice.actions;
export default taskSlice.reducer;
