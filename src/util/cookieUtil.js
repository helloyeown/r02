const { Cookies } = require("react-cookie");

const cookies = new Cookies()

export const setCookie = (cookieName, value, days) => {

	// 만료 기간
	const expires = new Date()
	expires.setUTCDate(expires.getUTCDate() + days)

	cookies.set(cookieName, value, {path: "/", expires: expires})
	// path: localhost:3000에 있는 모든 경로에서 사용할 수 있게 함

}

export const getCookie = (cookieName) => {
	return cookies.get(cookieName)	// 문자열 반환 -> parse 처리
}

// 쿠키를 삭제할 땐 경로가 필요
export const removeCookie = (cookieName, path="/") => {
	cookies.remove(cookieName, {path: path})
}