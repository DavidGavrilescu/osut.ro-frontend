import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./rec.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Slide = ({ titlu, text, b1 = "", b2 = "", textB1 = "" }) => {
	return (
		<>
			<div className="slide">
				<Typography
					color="textPrimary"
					variant="h3"
					component="h4"
					gutterBottom
					style={{ textTransform: "uppercase" }}>
					{titlu}
				</Typography>
				<Typography color="textSecondary" variant="body1" component="p">
					{text}
				</Typography>
				<br />
				{b1 !== "" && textB1 && (
					<Link to={b1}>
						<Button
							variant="outlined"
							color="primary"
							style={{ color: "#eee", borderColor: "#fff" }}
							size="large">
							Afla mai multe
						</Button>
					</Link>
				)}
				&nbsp; &nbsp;
				{b2 !== "" && (
					<Link to={b2}>
						<Button
							variant="outlined"
							color="primary"
							style={{ color: "#eee", borderColor: "#fff" }}
							size="large">
							Afla mai multe
						</Button>
					</Link>
				)}
			</div>
		</>
	);
};

export default function Recrutari() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Container maxWidth="lg" id="containerAnunturi">
			<div id="slid">
				<Slider {...settings}>
					<div style={{ outline: "none" }}>
						<Slide
							titlu="OSUT RECRUTEAZă"
							text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
						/>
					</div>
					<div>
						<Slide
							titlu="1991"
							text="OSUT are iniţiativa introducerii burselor sociale în Universitatea de Vest din Timişoara şi facilitează accesul studenţilor la tabere cu preţ redus. "
						/>
					</div>
				</Slider>
			</div>
		</Container>
	);
}
