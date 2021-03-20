import React from "react";
import { Grid } from "@material-ui/core";
import { Proiect } from "../proiecte/Proiecte";
import wsu from "../../img/bgproiecte/wsu.jpg";
import sf from "../../img/bgproiecte/sf.jpg";
import itfest from "../../img/bgproiecte/itfest.jpg";
import abc from "../../img/bgproiecte/abc.jpg";
import balul from "../../img/bgproiecte/balul.jpg";
import democratia from "../../img/bgproiecte/democratia.jpg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
}));
export default function AdditionalResults({ input }) {
	const classes = useStyles();

	return (
		<>
			{(input.toLowerCase().includes("studentfest") ||
				input.toLowerCase().includes("sf") ||
				input.toLowerCase().includes("fest")) && (
				<Grid key="sf" item xs={12} sm={12} className={classes.card}>
					<Proiect
						poza={sf}
						denumire="StudentFest"
						linkSite="https://studentfest.ro"
						descriere="StudentFest, festival internațional de artă și cultură a cărui tematică este realeasă anual este reflectat în opt secțiuni de artă ce cuprind evenimente, piese de teatru sau concerte, fiind un mediu propice de cultivare a artei și de lansare pentru tinerii artiști."
					/>
				</Grid>
			)}
			{(input.toLowerCase().includes("wsu") ||
				input.toLowerCase().includes("west summer university")) && (
				<Grid key="wsu" item xs={12} sm={12} className={classes.card}>
					<Proiect
						poza={wsu}
						denumire="West Summer University"
						linkSite="https://wsu.osut.ro"
						descriere="West Summer University are ca activitate principală simularea procesului de predare, învățare și evaluare în cadrul Universității de Vest din Timișoara și simularea vieții de student timp de două săptămâni."
					/>
				</Grid>
			)}
			{(input.toLowerCase().includes("itfest") ||
				input.toLowerCase().includes("fest")) && (
				<Grid key="itfest" item xs={12} sm={12} className={classes.card}>
					<Proiect
						poza={itfest}
						denumire="ITFest Timișoara"
						linkSite="https://itfest.osut.ro"
						descriere="ITFest Timișoara își propune o serie de activități ce includ ateliere, conferințe, jocuri în rețea și competiții dedicate tinerilor pasionați de IT&C."
					/>
				</Grid>
			)}
			{(input.toLowerCase().includes("abc") ||
				input.toLowerCase().includes("abcdarul")) && (
				<Grid key="abc" item xs={12} sm={12} className={classes.card}>
					<Proiect
						poza={abc}
						denumire="Abecedarul Carierei"
						linkSite="https://abc.osut.ro"
						descriere="Abecedarul Carierei este un proiect care urmărește dezvoltarea cunoștințelor în domeniul economiei și antreprenoriatului și îndrumarea în carieră a tinerilor."
					/>
				</Grid>
			)}
			{input.toLowerCase().includes("democratia") && (
				<Grid key="abc" item xs={12} sm={12} className={classes.card}>
					<Proiect
						poza={democratia}
						denumire="Democrația în UVT"
						linkSite=""
						descriere="Democrația în UVT vizează alegerea studenților reprezentanți în consiliile facultăților, Consiliile Școlilor Doctorale, Consiliul pentru Studii Universitare de Doctorat (CSUD) și Senatul UVT, precum și alegerea șefilor de cămin. 
<div></div>Democrația în UVT pune în aplicare procedeul clasic de votare a reprezentanților studenților, fiind un proiect ce încurajează spiritul civic, implicarea și inițiativa studenților care aspiră la a îmbunătăți procesul educațional."
					/>
				</Grid>
			)}
			{input.toLowerCase().includes("bal") && (
				<Grid key="balul" item xs={12} sm={12} className={classes.card}>
					<Proiect
						poza={balul}
						denumire="Balul Bobocilor UVT"
						linkSite=""
						style={{ backgroundPosition: "0px" }}
						descriere="Balul Bobocilor UVT facilitează interacțiunea dintre studenții de anul I, fiind o competiție de talente, frumusețe și nu numai, adaptate unei tematici realese în fiecare an."
					/>
				</Grid>
			)}
		</>
	);
}
