import BasicLayout from "../layouts/BasicLayout";
import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import useCustomLogin from "../hooks/useCustomLogin";

const AboutPage = () => {

	const {loginInfo} = useCustomLogin()


	return (  
		<BasicLayout>
			<h2>About Page</h2>

			<TodoInput></TodoInput>

			<CountDisplay></CountDisplay>
			<CountButtons></CountButtons>
		</BasicLayout>
	);
}
 
export default AboutPage;