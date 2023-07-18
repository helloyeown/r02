import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestLogin } from "../../reducers/loginSlice";
// import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";

const KakaoRedirectPage = () => {

	const [searchParams] = useSearchParams()

	const authCode = searchParams.get('code')

	const dispatch = useDispatch()

	const navigate = useNavigate()

	useEffect(() => {

		axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`).then(res => {
			console.log(res.data)
			
			const memberInfo = res.data

			const nickname = memberInfo.nickname

			dispatch(requestLogin(memberInfo))
			// alert("로그인 성공")
			if(nickname === 'SOCIAL_MEMBER'){
				navigate("/member/modify")
			} else {
				navigate("/")
			}
		})

	// 	getAccessToken(authCode).then(accessToken => {
	// 		console.log(accessToken)
	// 		getUserEmail(accessToken).then(email => {
	// 			console.log("email: " + email)
	// 		})
	// 	})
	}, [authCode])


	return (  
		<div>
			{authCode}
		</div>
	);
}
 
export default KakaoRedirectPage;