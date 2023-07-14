import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const SampleNav = () => {

	const todoArr = useSelector(state => state.todo)


	return (  
		<div className="flex m-3 p-4 text-white font-extrabold">
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/"}>Main</Link>
				<span className="bg-red-500 font-extrabold">{todoArr.length}</span>
			</div>
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/about"}>About</Link>
			</div>
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/products/list"}>Products</Link>
			</div>
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/board/list"}>Board</Link>
			</div>
			<div>
				<LoginNav></LoginNav>
			</div>
		</div>
	);
}
 
export default SampleNav;