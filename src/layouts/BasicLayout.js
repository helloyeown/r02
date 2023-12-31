import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
	return (  
		<div className="container mx-auto min-w-[1280px] bg-[#fdd000]">
			<div>
				<SampleNav>
					Menu
				</SampleNav>
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}
 
export default BasicLayout;