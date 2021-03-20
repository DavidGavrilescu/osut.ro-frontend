import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import "./proiecte.css";
import sf from "../../img/sf.png";
import wsu from "../../img/wsu.png";
import abc from "../../img/abc.png";
import itfest from "../../img/itfest.png";
import gsap from "gsap";

const Pro = ({ img }) => (
	<Grid item xs={2}>
		<div className="proiect_submeniu">
			<img src={img} />
		</div>
	</Grid>
);

const Proiecte = ({ vis = true }) => {
	const [viz, setViz] = useState(0);
	useEffect(() => {
		if (viz !== 0) {
			if (viz) {
				gsap.to(".proiect_submeniu", {
					x: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.1,
				});
				gsap.to("#proiecte_dropdown", {
					height: "auto",
					padding: "15px 0px",
					duration: 0.1,
				});
			} else {
				gsap.to(".proiect_submeniu", {
					x: 10,
					opacity: 0,
					stagger: {
						from: "end",
						amount: 0.5,
					},
					duration: 0.1,
					onComplete: () => {
						gsap.to("#proiecte_dropdown", {
							height: "0px",
							padding: 0,
							duration: 0.1,
						});
					},
				});
			}
		} else {
			gsap.set(".proiect_submeniu", {
				x: 10,
				opacity: 0,
				stagger: 0.1,
				duration: 0.1,
				onComplete: () => {
					gsap.set("#proiecte_dropdown", {
						height: "0px",
						padding: 0,
						duration: 0.1,
					});
				},
			});
		}
		setViz(vis);
	}, [vis]);
	return (
		<div id="proiecte_dropdown">
			{/* <Container maxWidth="lg">
            <Grid 
                container 
                spacing={2} direction="row"
                justify="flex-start"
                alignItems="flex-start">
                     {/* <Grid item xs={4}></Grid> */}
			{/* <Pro img={sf} />
                    <Pro img={wsu} />
                    <Pro img={abc}/>
                    <Pro img={itfest} /> */}
			{/* </Grid>
                </Container> */}
		</div>
	);
};

export default Proiecte;
