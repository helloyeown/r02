import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const LoginNav = () => {

	const {email, signed} = useSelector(state => state.login)

	console.log("LoginNav...............", email, signed)

	if (signed) {
		return (
			<div>
				<div>
					{email}
				</div>
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