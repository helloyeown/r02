import { createSlice } from "@reduxjs/toolkit";


// 객체 스타일
const countSlice = createSlice({
	name: "CountSlice",
	initialState: {num: 5},  // 상태로 관리해야 할 데이터의 초기 상태
	reducers:{
		inc: (state, param, third) => { 
			console.log(state)	// state 안에 num이 있음
			console.log(param)	// 페이로드: param 출력
			console.log(third)	// undefined
			
			// 새로운 객체여야 상태가 업데이트 된 걸로 침
			return {num: state.num + param.payload}  // 리턴 값은 새로운 상태
		},
		dec: (state, param, third) => {
			console.log(state)
			console.log(param)
			console.log(third)

			return {num: state.num - param.payload}
		}
	}
})

export const {inc, dec} = countSlice.actions

export default countSlice.reducer