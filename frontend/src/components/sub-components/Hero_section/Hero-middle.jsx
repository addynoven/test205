import React from "react";
import banner_01 from "../../../assets/img/banner-01.jpg";
import banner_02 from "../../../assets/img/banner-02.jpg";
const HeroMiddle = () => {
	return (
		<>
			<div className="flex w-full">
				<div className="m-3 relative">
					<div className="z-0 h-full w-full">
						<img src={banner_01} alt="" />
					</div>
					<div className="bg-[#1b1b1b36] absolute h-full  p-6 w-full  top-0 left-0 flex justify-center items-center flex-col">
						<h3 className="text-white text-4xl capitalize font-semibold">
							One stop jewelry shopping
						</h3>
						<h4 className="text-white text-lg">
							Thoughtfully designed jewelry to wear everyday
						</h4>
					</div>
				</div>
				<div>
					<div className="m-3 relative">
						<div className="z-0 h-full w-full">
							<img src={banner_02} alt="" />
						</div>
						<div className="bg-[#1b1b1b36] absolute h-full  p-6 w-full  top-0 left-0 flex justify-center items-center flex-col">
							<h3 className="text-white text-4xl capitalize font-semibold">
								We have the jewelry for you
							</h3>
							<h4 className="text-white text-lg">
								Thoughtfully designed jewelry to wear everyday
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroMiddle;
