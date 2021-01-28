import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./proiecte.css";
import wsu from "../../img/bgproiecte/wsu.jpg";
import sf from "../../img/bgproiecte/sf.jpg";
import itfest from "../../img/bgproiecte/itfest.jpg";
import abc from "../../img/bgproiecte/abc.jpg";
import balul from "../../img/bgproiecte/balul.jpg";
import democratia from "../../img/bgproiecte/democratia.jpg";
import gsap, { Power2 } from "gsap";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Helmet from "react-helmet";

export const Proiect = ({
	linkSite,
	poza,
	descriere,
	denumire,
	style = {},
}) => {
	return (
		<Grid item xs={12} className="Proiect">
			<div
				className="container_proiect"
				style={{
					background: "url(" + poza + ")",
					backgroundSize: "cover",
					backgroundPosition: "center center",
					borderRadius: 10,
				}}>
				<div className="overlay">
					<Typography
						color="textPrimary"
						variant="h3"
						component="h1"
						style={{ marginBottom: 20, paddingTop: 20 }}
						gutterBottom>
						{denumire}
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						component="p"
						style={{ maxWidth: "65ch" }}
						dangerouslySetInnerHTML={{
							__html: descriere,
						}}
						gutterBottom></Typography>
					<br />
					{linkSite !== "" && (
						<a href={linkSite} target="_blank">
							<Button color="primary" size="large" variant="contained">
								Website proiect <ArrowRightAltIcon />
							</Button>
						</a>
					)}
				</div>
			</div>
		</Grid>
	);
};
export default function Proiecte() {
	// useEffect(() => {
	// 	const timelineGsap = gsap.timeline({ duration: 0.3, stagger: 0.15 });
	// 	timelineGsap.from(".container_proiect", {
	// 		ease: Power2.easeInOut,
	// 		duration: 0.3,
	// 		scale: 2,
	// 		y: -60,
	// 		opacity: 0,
	// 		stagger: 0.09,
	// 	});
	// });
	return (
		<>
			<Helmet>
				<title>{`OSUT - Proiecte`}</title>
				<meta
					name="description"
					content="Proiectele tradiționale ale Organizației Studenților din Universitatea de Vest din Timișoara."
				/>
			</Helmet>
			<Container maxWidth="lg" style={{ marginTop: "20px" }}>
				<Grid container spacing={0} direction="row" justify="flex-start">
					<Proiect
						poza={sf}
						denumire="StudentFest"
						linkSite="https://studentfest.ro"
						descriere="StudentFest, festival internațional de artă și cultură a cărui tematică este realeasă anual este reflectat în opt secțiuni de artă ce cuprind evenimente, piese de teatru sau concerte, fiind un mediu propice de cultivare a artei și de lansare pentru tinerii artiști.
						<div></div>Acest proiect este născut din problemele actuale ale societății, fapt reflectat, anul trecut, în ediția AUTENTIC. Ediția recentă a festivalului unic din România s-a desfășurat în regim hibrid, având diverși invitați speciali în mediul online, dar și artiști locali puși în valoare la evenimentele fizice."
					/>
					<Proiect
						poza={wsu}
						denumire="West Summer University"
						linkSite="https://wsu.osut.ro"
						descriere="West Summer University are ca activitate principală simularea procesului de predare, învățare și evaluare în cadrul Universității de Vest din Timișoara și simularea vieții de student timp de două săptămâni.
						<div></div>Proiectul îşi propune promovarea învăţământului superior şi prevenirea abandonului şcolar la nivelul elevilor de liceu, absolvenţi ai clasei a XI-a. Cele mai tari cadre didactice ale celor 11 facultăți din cadrul Universității de Vest din Timișoara sunt dornice să-i introducă pe participanți în disciplinele de bază ale profilului ales."
					/>
					<Proiect
						poza={balul}
						denumire="Balul Bobocilor UVT"
						linkSite=""
						style={{ backgroundPosition: "0px" }}
						descriere="Balul Bobocilor UVT facilitează interacțiunea dintre studenții de anul I, fiind o competiție de talente, frumusețe și nu numai, adaptate unei tematici realese în fiecare an.
						<div></div>Acest proiect este prima ocazie de afirmare, comunicare și cunoaștere pentru studenții de anul I, aceștia având șansa de a-și îmbunătăți spiritul de echipă prin activitățile din cadrul perioadei preparatorii pentru probele concursului."
					/>
					<Proiect
						poza={itfest}
						denumire="ITFest Timișoara"
						linkSite="https://itfest.osut.ro"
						descriere="ITFest Timișoara își propune o serie de activități ce includ ateliere, conferințe, jocuri în rețea și competiții dedicate tinerilor pasionați de IT&C.
						<div></div>Obiectivele proiectului sunt dezvoltarea cunoștințelor și abilităților practice din domeniul IT&C. Anul acesta activitățile s-au desfășurat în regim online, utilizând diverse platforme ajutătoare, principalele fiind Zoom și Discord."
					/>
					<Proiect
						poza={abc}
						denumire="Abecedarul Carierei"
						linkSite="https://abc.osut.ro"
						descriere="Abecedarul Carierei este un proiect care urmărește dezvoltarea cunoștințelor în domeniul economiei și antreprenoriatului și îndrumarea în carieră a tinerilor. 
						<div></div>
						O prioritate a proiectului este integrarea și inițierea studenților pe piața muncii. Astfel, un element aparte îl constituie târgul de joburi, unde reprezentanți ai marilor firme din județul Timiș îți dau întâlnire cu potențiali angajați."
					/>
					<Proiect
						poza={democratia}
						denumire="Democrația în UVT"
						linkSite=""
						descriere="Democrația în UVT vizează alegerea studenților reprezentanți în consiliile facultăților, Consiliile Școlilor Doctorale, Consiliul pentru Studii Universitare de Doctorat (CSUD) și Senatul UVT, precum și alegerea șefilor de cămin. 
						<div></div>Democrația în UVT pune în aplicare procedeul clasic de votare a reprezentanților studenților, fiind un proiect ce încurajează spiritul civic, implicarea și inițiativa studenților care aspiră la a îmbunătăți procesul educațional."
					/>
				</Grid>
			</Container>
		</>
	);
}
