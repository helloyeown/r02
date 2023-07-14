import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";

const TodoInput = () => {

	const [text, setText] = useState('')
	const dispatch = useDispatch()	// 훅스는 컴포넌트 바로 밑에 정의해야 함

	const handleClickSave = () => {
		dispatch(addTodo(text))	// 페이로드 전달값 (두 번째 파라미터)
	}


	return (  
		<div>
			Todo Input
			<input type="text" value={text} onChange={e => setText(e.target.value)}></input>
			<button onClick={handleClickSave}>SAVE</button>
		</div>
	);
}
 
export default TodoInput;