import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";


const CountButtons = () => {

	// useSelector <-> dispatch
	// 슬라이스의 함수 호출
	const dispatch = useDispatch()

	const handleClickInc = () => {
		dispatch(inc(2, "INC"))
	}

	const handleClickDec = () => {
		dispatch(dec(2, "DEC"))
	}


	return ( 	
		<div>
			<button onClick={handleClickInc}> INC </button>
			<button onClick={handleClickDec}> DEC </button>
		</div>
	);
}
 
export default CountButtons;