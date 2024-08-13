import React from "react";
import BrandLogo from "@/components/custom-components/brand-logo";
const Herobottom = () => {
	const arr = Array(6)
		.fill()
		.map((_, index) => index + 1);
	console.log(arr);

	return (
		<>
			<div className="flex">
				{arr.map((item) => (
					<BrandLogo key={item} />
				))}
			</div>
		</>
	);
};

export default Herobottom;
