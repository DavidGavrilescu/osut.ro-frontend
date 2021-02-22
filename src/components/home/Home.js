import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import axios from "axios";
import Recrutari from "../recrutari/Recrutari";
import Container from "@material-ui/core/Container";

let page = 1;

const Home = () => {
	const [items, setItems] = useState([]);
	const [categ, setCateg] = useState([]);

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (items.length < 1) {
			axios.get(`https://api.osut.ro/?posts`).then((res) => {
				const postari = res.data;
				setItems(postari.postari);
				setCateg(postari.categorii);
			});
		}
	}, [items]);

	return (
		<>
			<Recrutari />
			<Container maxWidth="lg">
				{items.length > 0 ? <Blog items={items} categorii={categ} /> : ""}
				{/* <Separator /> */}
				{/* <Docs /> */}
			</Container>
		</>
	);
};
export default Home;
