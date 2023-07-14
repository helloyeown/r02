import { getCookie, setCookie } from "../util/cookieUtil";

const { createSlice } = require("@reduxjs/toolkit");

const loadCookie = () => {
	const loginObj = getCookie("login")

	console.log("login...........obj...........")
	console.log(loginObj)

	if (!loginObj) {
		return initState
	}

	return loginObj
}

const initState = {
	email: '',
	signed: false
}

const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: loadCookie(),
	reducers: {
		requestLogin: (state, param) => {
			const payload = param.payload		// 아이디, 패스워드
			console.log("requestLogin " , payload)
			const loginObj = {email: payload.email, signed: true}

			setCookie("login", JSON.stringify(loginObj), 1)	// 하루
			// obj를 문자열로 변환

			return loginObj
		}
	}
})

export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer