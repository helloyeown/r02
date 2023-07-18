import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useCustomLogin = (fn) => {

	// 커스텀 훅: 로직을 재사용 할 때
	const loginInfo = useSelector(state => state.login)
	// 스토어의 login을 구독

	const navigate = useNavigate()

	// navigate를 사용하려면 useEffect를 사용해야 함
	useEffect(() => {

		if (fn) {
			if(!loginInfo.email) {
				fn(navigate)
				return
			}
		}

		console.log(loginInfo.email)

		if(!loginInfo.email) {
			navigate('/member/login')
		}

	}, [loginInfo.email])

	return {loginInfo}

}

export default useCustomLogin