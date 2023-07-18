import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartNav from "./CartNav";
import { requestLogout } from "../../reducers/loginSlice";


const LoginNav = () => {

	const {email, loading, nickname} = useSelector(state => state.login)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	console.log("LoginNav...............", email, loading)

	if (email !== '') {
		return (
			<div>
				<div>
					{email} - {nickname}
				</div>
				<div>
					<button onClick={() => {
						dispatch(requestLogout())
						navigate("/")
					}}>LOGOUT</button>
				</div>
				<CartNav></CartNav>
			</div>
		)
	}


	return (  
		<div>
			<div>
				<Link to="/member/login">LOGIN</Link>
			</div>
		</div>
	);
}
 
export default LoginNav;