import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";

const LoginPage = () => {
	return (  
		<div>
			<BasicLayout>
				<div>Login Page</div>
				<LoginComponent></LoginComponent>
			</BasicLayout>
		</div>
	);
}
 
export default LoginPage;