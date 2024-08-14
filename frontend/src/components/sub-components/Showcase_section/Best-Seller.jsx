import ProductCard from "../../custom-components/Product-Card";
import { useGetProductsQuery } from "@/slices/productApiSlice";
import Loader from "../../custom-components/Loader.jsx";
import Message from "../../custom-components/Message.jsx";
const BestSeller = () => {
	const { data: products, isLoading, error } = useGetProductsQuery(); // useGetProductsQuery returns an object with data, isLoading, and error properties
	const Best_products =
		products && products.filter((product) => product.isBestSeller === true);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error.Message || error.error}</Message>
			) : (
				<>
					<div className="mt-0">
						<h3 className="text-2xl font-semibold">Our Best Sellers</h3>
						<div className="grid grid-cols-5 py-5 justify-start items-center">
							{Best_products &&
								Best_products.map((product) => (
									<ProductCard key={product._id} product={product} />
								))}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default BestSeller;
