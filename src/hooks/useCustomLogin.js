import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useCustomLogin = (fn) => {

	// 커스텀 훅: 로직을 재사용 할 때
	const loginInfo = useSelector(state => state.login)

	const navigate = useNavigate()

	// navigate를 사용하려면 useEffect를 사용해야 함
	useEffect(() => {

		if (fn) {
			if(!loginInfo.signed) {
				fn(navigate)
				return
			}
		}

		console.log(loginInfo.signed)

		if(!loginInfo.signed) {
			navigate('/member/login')
		}

	}, [loginInfo.signed])

	return {loginInfo}

}

export default useCustomLogin