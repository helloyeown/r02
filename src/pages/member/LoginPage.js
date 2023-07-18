import KakaoLoginComponent from "../../components/member/KakaoLoginComponent";
import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";

const LoginPage = () => {
	return (  
		<div>
			<BasicLayout>
				<div>Login Page</div>
				<LoginComponent></LoginComponent>
				<KakaoLoginComponent></KakaoLoginComponent>
			</BasicLayout>
		</div>
	);
}
 
export default LoginPage;