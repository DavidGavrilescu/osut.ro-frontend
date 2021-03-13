import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./rec.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

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
				{/* {b2 !== "" && (
					<a href={b2} style={{textDecoration:'none'}} target="_blank">
						<Button
							variant="outlined"
							color="default"
							size="large"
							style={{marginBottom: 16}}
							>
							Află mai multe
						</Button>
					</a>
				)} */}
				{b1 !== "" && textB1 && (
					<a href={b1} style={{textDecoration:'none'}} target="_blank">
						<Button
							variant="contained"
							color="primary"
							style={{borderColor: "#fff",marginBottom: 16}}
							size="large">
							{textB1}
							<ArrowRightAltIcon />
						</Button>
						</a>
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
							titlu="OSUT te invită să te alături mișcării studențești, investind în viitor!"
							text="Ești actualmente angajat și îți dorești să alegi unde investești 3,5% din impozitul pe venit? 
							Ei bine, îți povestim noi!​"
						b1='https://osut.ro/p/redirectioneaza-3-5-din-impozitul-pe-venit-catre-osut-'
						textB1='Mai multe detalii'
						b2='Pisici'
						/>
					</div>
					
				</Slider>
			</div>
		</Container>
	);
}
