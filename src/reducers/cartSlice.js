import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {
	items: [],
	loading: false
}

export const addCartThunk = createAsyncThunk('addCartThunk', async (item) => {
	const res = await axios.post('http://localhost:8080/api/cart/add', item)
	return res.data
})

export const getCartThunk = createAsyncThunk('getCartThunk', async (email) => {

	// 이메일이 없는 경우 new 프로미스를 만들어서 리턴해야 함
	if(!email) {
		return new Promise((resolve, reject) => {
			resolve([])		// 성공하면 빈 배열
		})
	}

	const res = await axios.get(`http://localhost:8080/api/cart/${email}`)

	return res.data
})

const cartSlice = createSlice({

	name: "cartSlice",

	initialState: initState,

	extraReducers: (builder) => {
		builder.addCase(addCartThunk.fulfilled, (state, action) => {
			console.log(action.payload)

			state.items = action.payload
		})
		.addCase(getCartThunk.fulfilled, (state, action) => {
			console.log("getCartThunk fulfilled..........")
			console.log(action.payload)

			state.items = action.payload
		})
	}

})

export default cartSlice.reducer