import countSlice from "../reducers/countSlice";
import loginSlice from "../reducers/loginSlice";
import todoSlice from "../reducers/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");


// 외부에서 사용하기 위해 export
export default configureStore({
	reducer: {
		counter: countSlice,	// 리듀서 세팅
		todo: todoSlice,
		login: loginSlice
	}		// 리듀서는 객체
})	// 함수의 결과물이 스토어