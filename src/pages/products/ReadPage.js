import { useParams } from "react-router-dom"
import ReplyWrapper from "../../components/reply/ReplyWrapper"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/products/ReadComponent"
import useCustomLogin from "../../hooks/useCustomLogin";

const ReadPage = () => {

	const {queryObj, setSearch, moveRead, moveList, moveModify} = useQueryObj()
	const {pno} = useParams()

	// useCustomLogin(() => {
	// 	alert("로그인 해주세요.")
	// })

	console.log(pno)
	console.log(queryObj)

	return (  	
		<div>
			<ReadComponent pno={pno} moveModify={moveModify} moveList={moveList}></ReadComponent>
		</div>
	);
}

 
export default ReadPage;