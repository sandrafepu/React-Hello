import React from "react";
import Header from "./header.jsx";
import Body from "./body.jsx";
import BasicExample from "./body-container.jsx";
import Footer from "./footer.jsx";



//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
		<Header />
		<Body />
		<BasicExample />
		<Footer />
		</>
	);
};

export default Home;
