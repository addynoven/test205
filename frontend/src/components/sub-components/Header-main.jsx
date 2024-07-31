import Header_img from "../../assets/Header_logo.png";
import Menu from "../../assets/menu.svg";
import Search from "../custom-components/Search.jsx";
import user from "../../assets/user.svg";
import heart from "../../assets/heart.svg";
import backArrow from "../../assets/backArrow.svg";
import shoppingBag from "../../assets/shoppingBag.svg";
const HeaderMain = () => {
	return (
		<>
			<div className="mx-10 my-2 flex items-center  gap-4 border-2 ">
				<img src={Header_img} alt="" className="w-40 " />
				<img src={Menu} alt="" />
				<div className="w-[70vw]">
					<Search />
				</div>
				<div className="flex items-center justify-evenly gap-2">
					<img src={user} alt="" />
					<img src={heart} alt="" />
					<img src={backArrow} alt="" />
					<img src={shoppingBag} alt="" />
				</div>
			</div>
		</>
	);
};

export default HeaderMain;
