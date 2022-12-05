import React from "react";
import Header from "./header.jsx";
import Body from "./body.jsx";
import BodyContainer from "./body-container.jsx";
import Footer from "./footer.jsx";



//include images into your bundle
import data from "../data.json";

//create your first component
const Home = () => {

	const cardMap = data.map((item)=>{
	return <BodyContainer item={item}/>
});

	return (
		<>
		<Header />
		<Body />
		<div className="row">{cardMap}</div>
		<Footer />
		</>
	);
};

export default Home;
