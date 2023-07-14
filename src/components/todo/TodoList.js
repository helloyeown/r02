import { useSelector } from "react-redux";

const TodoList = () => {

	const todoArr = useSelector(state => state.todo)	// 투두는 스토어 이름
	// 셀렉터를 이용하면 state로 모든 데이터가 다 들어옴 (전역)

	console.log("todo list ", todoArr)


	return (  
		<div>
			<ul>
				{todoArr.map((ele, idx) => <li key={idx}>{ele}</li>)}
			</ul>
		</div>
	);
}
 
export default TodoList;