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
							titlu="OSUT RECRUTEAZă"
							text="Dacă ai visat la locul ideal care să îți contureze studenția, află că OSUT recrutează și e gata să îți ofere cea mai frumoasă experiență. Completează formularul de înscriere și pregătește-te să descoperi organizația care leagă prietenii, te dezvoltă personal, îți creează oportunități și cel mai important, luptă pentru studenți."
						b1='http://bit.ly/formular-recrutari-OSUT'
						textB1='Formular înscriere'
						b2='Pisici'
						/>
					</div>
					
				</Slider>
			</div>
		</Container>
	);
}
