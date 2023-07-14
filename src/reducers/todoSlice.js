import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todoSlice",
	initialState: ['aaa', 'bbb'],
	
	// 객체
	reducers: {
		addTodo: (state, param) => {
			console.log("todo...", state)
			return [...state, param.payload]
		}
	}
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer