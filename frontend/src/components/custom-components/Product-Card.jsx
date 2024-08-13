import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
	return (
		<>
			<div className="w-64 mx-5 mt-2 flex justify-start items-center gap-5">
				<div>
					<div className="relative">
						<img className="w-full rounded-lg" src={product.image} alt="" />
						<div className="absolute top-2 left-2 text-[#fff] border-[2px] bg-[#00000085] border-[#fff] bg-opacity-80 px-1 py-[0.15rem] font-medium text-sm rounded-sm">
							12%
						</div>
					</div>
					<div className=" flex flex-col gap-1">
						<p className="text-[#aeb6be] font-bold text-[0.8rem]">
							{product.category}
						</p>
						<div className="relative flex flex-col gap-1">
							<div className="flex justify-center items-center">
								<Link to={`/product/${product._id}`}>
									<p className=" font-semibold  w-[90%] text-[1rem] ">
										{product.name}
									</p>
								</Link>
								<p>
									<Heart size={20} />
								</p>
							</div>

							<div className="flex gap-2 items-center">
								<p className="text-[#e20000] font-bold">
									₹{product.price - 10}
								</p>
								<span className="text-[0.8rem] text-[#94979a] line-through">
									₹{product.price}
								</span>
							</div>

							<div>
								<div className="flex justify-start items-center gap-1">
									<img src="start.svg" alt="" />
									<span className="text-[0.8rem] font-bold">
										{product.rating.toFixed(2)}
									</span>
									<span>
										<p className="text-[0.8rem] text-[#4b4b4b] font-medium">
											{product.numReviews} Reviews
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
