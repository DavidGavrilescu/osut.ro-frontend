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
				{b2 !== "" && (
					<a href={b2} style={{textDecoration:'none'}} target="_blank">
						<Button
							variant="contained"
							color="primary"
							style={{borderColor: "#fff",marginBottom: 16}}
							size="large"
							>
							Către Formularul 230
						</Button>
					</a>
				)}
				&nbsp;&nbsp;&nbsp;&nbsp;
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
							titlu="Alătură-te mișcării studențești investind în viitor!"
							text="Ești actualmente angajat și îți dorești să alegi unde investești 3,5% din impozitul pe venit? Formularul 230 îți vine în ajutor!"
						b1='https://osut.ro/p/redirectioneaza-3-5-din-impozitul-pe-venit-catre-osut-'
						textB1='Mai multe detalii'
						b2='https://redirectioneaza.ro/osut'
						/>
					</div>
					
				</Slider>
			</div>
		</Container>
	);
}
