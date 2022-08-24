import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name: "todo",
    initialState: {
        actives: [],
        completed: [],
        activeFilter: "active"
    },
    reducers: {
        addTodo: (state,action) => {
            state.actives.push(action.payload)
        },
        addToCompleted: (state,action) => {
            const todo = action.payload
            const moved = state.actives.filter((item) => item.id !== todo.id)
            state.actives = moved
            state.completed.push(action.payload)
        },
        deleteFromActives: (state,action) => {
            const filtered = state.actives.filter((item) => item.id !== action.payload)
            state.actives = filtered
        },
        changeFilter: (state,action) => {
            state.activeFilter = action.payload
        },
        clearActives: (state) => {
            state.actives= [];
        },
        clearCompleted: (state) => {
            state.completed= [];
        }
    }
})

export const { addTodo, changeFilter, addToCompleted, deleteFromActives, clearActives, clearCompleted, getActives } = todosSlice.actions
export default todosSlice.reducer
