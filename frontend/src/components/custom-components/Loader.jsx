import { Spinner } from "react-bootstrap";

import React from "react";

const Loader = () => {
	return (
		<>
			<Spinner
				animation="border"
				role="status"
				style={{
					width: "100px",
					height: "100px",
					margin: "auto",
					display: "block",
				}}
			></Spinner>
			<span
				className="sr-only"
				style={{
					width: "100px",
					height: "100px",
					margin: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Loading...
			</span>
		</>
	);
};

export default Loader;
