import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import React, { useState, useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Grd from "../reuse/Grd";
import "./docs.css";
import Document from "./Document";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import gsap, { Power2 } from "gsap";

export default function Docs() {
	const [documente, setDocumente] = useState(null);

	async function incarca_documente() {
		let urlAPI = `https://osut.ro/posts.php?documente`;
		await axios
			.get(urlAPI)
			.then((res) => {
				const result = res.data;
				setDocumente(result.documente);
			})
			.then(() => {
				const timelineGsap = gsap.timeline({ duration: 0.25, stagger: 0.1 });
				timelineGsap.from(".Doc", {
					ease: Power2.easeInOut,
					duration: 0.4,
					scale: 1,
					y: -40,
					opacity: 0,
					stagger: 0.09,
				});
			});
	}
	useEffect(() => {
		if (!documente) incarca_documente();
	}, [documente]);

	return (
		<>
			<Grd style={{ margin: "10px auto" }}>
				<Grid item xs={12} sm={12} md={12}>
					<Typography
						color="textPrimary"
						variant="h4"
						component="h2"
						style={{ textTransform: "none" }}
						gutterBottom>
						Documente
					</Typography>
				</Grid>
				{documente &&
					documente.map((item) => (
						<Document
							nume={item.nume}
							categorie={item.denumire_categorie}
							dimensiune={item.marime + " MB"}
						/>
					))}
			</Grd>
		</>
	);
}
