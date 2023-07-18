import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";

export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {
	return postLogin(params)
})

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
	nickname: '',
	admin: false,
	loading: false,		// axios 통신상태 확인
	errorMsg: null
}

const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: loadCookie(),
	reducers: {
		requestLogin: (state, action) => {
			const payload = action.payload		// 아이디, 패스워드
			console.log("requestLogin " , payload)
			const loginObj = {email: payload.email, signed: true}

			setCookie("login", JSON.stringify(loginObj), 1)	// 하루
			// obj를 문자열로 변환

			return payload
		},
		requestLogout: (state, param) => {
			console.log("request Logout........")

			removeCookie("login")

			return initState;
		}
	},
	extraReducers: (builder) => {		// 비동기
		builder.addCase(postLoginThunk.fulfilled, (state, action) => {
			console.log("fulfilled", action.payload)	// payload: 실제 서버에서 가져온 데이터
			const {email, nickname, admin, errorMsg} = action.payload

			if(errorMsg) {
				state.errorMsg = errorMsg
				return
			}

			state.loading = false
			state.email = email
			state.nickname = nickname
			state.admin = admin

			setCookie("login", JSON.stringify(action.payload), 1)
		})
		.addCase(postLoginThunk.pending, (state, action) => {
			console.log("pending")
			state.loading = true
		})
		.addCase(postLoginThunk.rejected, (state, action) => {
			console.log("rejected")
		})
	},
})

export const {requestLogout, requestLogin} = loginSlice.actions

export default loginSlice.reducer