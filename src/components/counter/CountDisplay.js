import { useSelector } from "react-redux";


const CountDisplay = () => {

	// 스토어에 있는 받고 싶은 데이터를 선별
	const obj = useSelector(state => state.counter)	// 리듀서 이름

	console.log(obj)


	return (  
		<div className="text-4xl">
			COUNT: {obj.num}
		</div>
	);
}
 
export default CountDisplay;