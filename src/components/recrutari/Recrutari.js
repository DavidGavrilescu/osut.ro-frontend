import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./rec.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Slide = ({ titlu, text, b1 = "", b2 = "", textB1 = "", textB2 = "" }) => {
	return (
		<>
			<div className="slide" style={{ padding: "40px 30px" }}>
				<Typography
					color="textPrimary"
					variant="h4"
					component="h4"
					gutterBottom
					dangerouslySetInnerHTML={{ __html: titlu }}
					style={{ textTransform: "none" }}
				/>
				<Typography
					color="textSecondary"
					variant="body1"
					component="p"
					dangerouslySetInnerHTML={{ __html: text }}
				/>
				<br />
				{b2 !== "" && (
					<Link to={b2} style={{ textDecoration: "none" }}>
						<Button
							variant="outlined"
							color="default"
							style={{borderColor: "#fff",marginBottom: 16}}
							size="large"
							style={{ marginBottom: 16 }}>
							{textB2}
						</Button>
					</Link>
				)}
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				{b1 !== "" && textB1 && (
					<Link to={b1} style={{ textDecoration: "none" }} target="_blank">
						<Button
							variant="contained"
							color="primary"
							style={{ borderColor: "#fff", marginBottom: 16 }}
							size="large">
							{textB1}
							<ArrowRightAltIcon />
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
				{/* <Slider {...settings}> */}
				<div style={{ outline: "none" }}>
					<Slide
						titlu="OSUT te invită să te alături mișcării studențești,<br /> investind în viitor!"
						text="Ești actualmente angajat și îți dorești să alegi unde investești 3,5% din impozitul pe venit?<br />
							Ei bine, îți povestim noi!​"
						b2="p/redirectioneaza-3-5-din-impozitul-pe-venit-catre-osut"
						textB2="Mai multe detalii"
						b1="https://redirectioneaza.ro/osut"
						textB1="CĂtre formularul 230"
					/>
				</div>
				{/* </Slider> */}
			</div>
		</Container>
	);
}
