import Loader from "@/components/custom-components/Loader";
import Message from "@/components/custom-components/Message";
import ProductDetail from "@/components/custom-components/productDetail";
import { useGetProductsbyIdQuery } from "@/slices/productApiSlice";
import React from "react";
import { useParams } from "react-router-dom";
const ProductScreen = () => {
	const { id } = useParams();
	const { data, isLoading, error } = useGetProductsbyIdQuery(id);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<ProductDetail product={data} />
			)}
		</>
	);
};

export default ProductScreen;
