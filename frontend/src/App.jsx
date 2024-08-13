import { Outlet } from "react-router-dom";
import Header from "./components/main-components/Header";
import Footer from "./components/sub-components/footer/Main-footer";
import { ToastContainer } from "react-toastify";

export default function App() {
	return (
		<>
			<Header />
			<div className="mx-8">
				<Outlet />
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
}
