import { useEffect, useState } from "react";
import { getProduct } from "../../api/productsAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
	pno:0,
	pname:'',
	pdesc:'',
	price:0,
	images:[]
}

	const ReadComponent = ({pno, moveModify, moveList}) => {

		const {email} = useSelector(state => state.login)
		const dispatch = useDispatch()

		const [product, setProduct] = useState(initState)

		useEffect(() => {
			getProduct(pno).then(data => {
				setProduct(data)
			}).catch(e => {
				console.log(e)
				moveList()
			})
		}, [pno])


		return (  
			<div className="m-2 p-2">
			<div className="m-2 p-2 border-2">
				{product.pname}
			</div>
			<div className="m-2 p-2 border-2">
				{product.pdesc}
			</div>
			<div className="m-2 p-2 border-2">
				{product.price}
			</div>
			<div className="m-2 p-2 border-2">
				<ul className="list-none">
					{product.images.map((fname, idx) => 
					<li key={idx}>
						<img src={`http://localhost/${fname}`}/>
					</li>)}
				</ul>
			</div>
			<div>

				<div>{email !== '' ? 
					<>
						<button className="bg-[#fdd000] border-2 m-2 p-2 text-white font-bold"
						onClick={() => {
							dispatch(addCartThunk({email, pno}))
						}}>
							ADD CART</button>
						<button className="bg-[#fdd000] border-2 m-2 p-2 text-white font-bold"
						onClick={() => moveModify(product.pno)}>MODIFY</button>
						</>
					: <></>}
					<button className="bg-[#2b2b2a] border-2 m-2 p-2 text-white font-bold"
					onClick={moveList}>LIST</button>
				</div>

			</div>
		</div>
		);
	}

export default ReadComponent