import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import IntlRelativeFormat from "intl-relativeformat";
import Separator from "../separator/Separator";
import LabelIcon from "@material-ui/icons/Label";
import Document from "../docs/Document";
import Container from "@material-ui/core/Container";
import Image from "material-ui-image";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import wsu from "../../img/wsulogo.png";
import DoneIcon from "@material-ui/icons/Done";
import DescriptionIcon from "@material-ui/icons/Description";
import PageviewIcon from "@material-ui/icons/Pageview";

let local = "https://api.osut.ro/";
const Sectiune = ({ children }) => {
	return (
		<Grid item xs={12}>
			<div className="whitebg" style={{ padding: "20px" }}>
				{children}
			</div>
		</Grid>
	);
};
const Pasi = ({}) => {
	return (
		<>
			<Grid item xs={12}>
				<Typography
					color="textPrimary"
					variant="h4"
					component="h6"
					style={{ marginTop: 40 }}
					gutterBottom>
					Ce trebuie să faci pentru a participa la proiect?
				</Typography>
				<Typography
					color="textPrimary"
					variant="body1"
					component="p"
					gutterBottom>
					Este foarte simplu:
				</Typography>
			</Grid>
			<Grid item xs={12} sm={4}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						<PageviewIcon color="dark" fontSize="large" />
						<br />
						Pasul 01:
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						style={{ maxWidth: "45ch" }}
						component="p"
						gutterBottom>
						intră pe site-ul <a href="">westsummeruniversity.ro</a>
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={4}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						<DescriptionIcon color="dark" fontSize="large" />
						<br />
						Pasul 02:
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						style={{ maxWidth: "45ch" }}
						component="p"
						gutterBottom>
						intră la secțiunea <b>inscrie-te</b>
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={4}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						<DoneIcon color="dark" fontSize="large" />
						<br />
						Pasul 3:
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						style={{ maxWidth: "45ch" }}
						component="p"
						gutterBottom>
						Completează formularul de înscriere
					</Typography>
				</div>
			</Grid>
		</>
	);
};
const Obiectivele = ({}) => {
	return (
		<>
			<Grid item xs={12}>
				<Typography
					color="textPrimary"
					variant="h4"
					component="h2"
					style={{ marginTop: 40 }}
					gutterBottom>
					Obiectivele proiectului
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Lorem ipsum
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						component="p"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Facilitarea accesului unui număr de aproximativ 15.000 de elevi din
						România, la informaţii privind programa facultăţilor din cadrul UVT;
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Dummy text
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						component="p"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Prezentarea cadrului universitar celor 300 de participanţi la
						proiect;
						<br />
						<br />
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Placeholder asdf
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						style={{ maxWidth: "45ch" }}
						component="p"
						gutterBottom>
						Simularea vieţii de student pe parcursul celor 17 zile de
						desfăşurare a proiectului
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className="whitebg" style={{ padding: "20px" }}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="h6"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Ultimu titlu
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						component="p"
						style={{ maxWidth: "45ch" }}
						gutterBottom>
						Promovarea activităţilor extracurriculare prin intermediul
						workshopurilor şi sesiunilor de informare.
					</Typography>
				</div>
			</Grid>
		</>
	);
};
export default function Proiecte() {
	return (
		<>
			<Container maxWidth="lg" style={{ marginTop: "10px" }}>
				<Grid container spacing={2} direction="row" justify="flex-start">
					<Sectiune>
						<Typography
							color="textPrimary"
							variant="h3"
							component="h1"
							gutterBottom>
							<img src={wsu} style={{ maxHeight: "70px" }} />
						</Typography>
						<Typography
							color="textPrimary"
							variant="body1"
							component="p"
							style={{ maxWidth: "75ch" }}
							gutterBottom>
							West Summer University este un proiect organizat de către
							Organizația Studenților din Universitatea de Vest din Timișoara
							(OSUT) în parteneriat cu UVT.
						</Typography>
					</Sectiune>
					<Obiectivele />
					<Pasi />
					<Grid item xs={12} md={6}>
						<div style={{ padding: 20 }} className="whitebg">
							<Typography
								color="textPrimary"
								variant="h4"
								component="p"
								style={{ maxWidth: "75ch" }}
								gutterBottom>
								Lorem ipsum is placeholder text
							</Typography>
							<Typography
								color="textPrimary"
								variant="body1"
								component="p"
								style={{ maxWidth: "75ch" }}
								gutterBottom>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<img
							src="https://wsu.ro/wp-content/uploads/2020/02/48364576372_192a6a937f_o-1-scaled.jpg"
							style={{ width: "100%", borderRadius: 10 }}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
