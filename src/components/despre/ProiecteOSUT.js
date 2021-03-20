import React from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import sf from "../../img/sflogo.png";
import sfLight from "../../img/proiecte/sfLight.png";

import wsu from "../../img/wsulogo.png";
import abcLight from "../../img/proiecte/abcLight.png";
import abcDark from "../../img/proiecte/abcDark.png";
import itfestLight from "../../img/proiecte/itfestLight.png";

import itfest from "../../img/itfestlogo.png";
import Card from "@material-ui/core/Card";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Proiect = ({
	logoDark = "",
	logoLight = "",
	denumire,
	descriere,
	link = "",
	darkmode,
}) => {
	return (
		<>
			<Grid item xs={12} md={6}>
				<Card>
					<div className="whitebg proiect">
						{logoDark !== "" ? (
							darkmode ? (
								<img title={denumire} src={logoDark} className="logoproiect" />
							) : (
								<img title={denumire} src={logoLight} className="logoproiect" />
							)
						) : (
							<Typography
								color="textPrimary"
								variant="h5"
								component="h5"
								gutterBottom>
								{denumire}
							</Typography>
						)}
						<Typography
							color="textSecondary"
							variant="body1"
							component="p"
							gutterBottom>
							{descriere}
						</Typography>
						{link !== "" && (
							<Button
								variant="outlined"
								color="default"
								style={{
									marginTop: 20,
								}}>
								Citeste mai multe <ArrowRightAltIcon />
							</Button>
						)}
					</div>
				</Card>
			</Grid>
		</>
	);
};
const ProiecteOSUT = ({ dark }) => {
	return (
		<>
			<Grid item xs={12} md={12}>
				<Typography
					color="textPrimary"
					variant="h3"
					component="h3"
					gutterBottom>
					Proiectele noastre
				</Typography>
				<Typography
					color="textSecondary"
					variant="body1"
					component="p"
					gutterBottom
					style={{ marginBottom: "40px", maxWidth: "70ch" }}>
					Pentru că ne dorim să îmbunătățim calitatea comunității în care trăim,
					recurent organizăm proiecte și activități, fiecare cu un specific
					diferit.
				</Typography>
			</Grid>
			<Grid item xs={12} md={12}>
				<Grid
					container
					spacing={4}
					direction="row"
					alignItems="stretch"
					alignContent="stretch">
					<Proiect
						darkmode={dark}
						logoDark={sf}
						logoLight={sfLight}
						denumire="StudentFest"
						descriere="StudentFest, festival internațional de artă și cultură a cărui tematică este realeasă anual este reflectat în opt secțiuni de artă ce cuprind evenimente, piese de teatru sau concerte, fiind un mediu propice de cultivare a artei și de lansare pentru tinerii artiști."
					/>
					<Proiect
						logoDark={itfest}
						darkmode={dark}
						logoLight={itfestLight}
						denumire="ITFest"
						descriere="ITFest Timișoara își propune o serie de activități ce includ workshopuri, conferințe, jocuri în rețea și competiții dedicate tinerilor pasionați de IT."
					/>
					<Proiect
						logoDark={wsu}
						logoLight={wsu}
						darkmode={dark}
						denumire="West Summer University"
						descriere="West Summer University are ca activitate principală simularea procesului de predare, învățare și evaluare în cadrul Universității de Vest din Timișoara și simularea vieții de student."
					/>
					<Proiect
						logoDark={abcDark}
						logoLight={abcLight}
						darkmode={dark}
						denumire="Abecedarul Carierei"
						descriere="Abecedarul Carierei este un proiect care urmărește dezvoltarea cunoștințelor în domeniul economiei și al antreprenoriatului și îndrumarea în carieră a tinerilor."
					/>
					<Proiect
						logoDark=""
						darkmode={dark}
						logoLight=""
						denumire="Democrația în UVT"
						descriere="Democrația în UVT vizează alegerea studenților reprezentanți în consiliile facultăților, Consiliile Școlilor Doctorale și Consiliul pentru Studii Universitare de Doctorat (CSUD) și Senatul UVT, precum și alegerea șefilor de cămin."
					/>
					<Proiect
						logoDark=""
						darkmode={dark}
						logoLight=""
						denumire="Balul Bobocilor UVT"
						descriere="Balul Bobocilor UVT facilitează interacțiunea dintre studenții de anul I, fiind o competiție de talente, frumusețe și nu numai, adaptate unei tematici realese în fiecare an."
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default ProiecteOSUT;
