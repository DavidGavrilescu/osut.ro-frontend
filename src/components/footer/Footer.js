import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./footer.css";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import osut from "../../img/osut-alb-meniu.png";
import osutDark from "../../img/osut-negru-meniu.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
import { incarcaInformatiiStudenti } from "../reuse/API";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 12,
		margin: "0px auto",
		marginTop: "100px",
		padding: "50px 0px",
	},
	wrapIcon: {
		verticalAlign: "middle",
		display: "inline-flex",
		marginBottom: "3px",
	},
}));
export default function FooterWebsite({ dark }) {
	const classes = useStyles();
	const history = useHistory();
	const [IS, setIS] = useState("");
	const goToPost = (url) => {
		history.push(url);
	};
	useEffect(() => {
		if (IS === "") incarcaInformatiiStudenti(setIS);
	}, []);
	const Despre = [
		["Despre noi", "/despre-noi/"],
		["Istoric președinți", "/despre-noi/presedinti-osut"],
		["Arhivă media", "/despre-noi/arhiva-media/"],
	];
	const Proiecte = [
		["Abecedarul Carierei", "https://abc.osut.ro"],
		// ["Democrația în UVT", "#"],
		["ITFest Timișoara", "https://itfest.osut.ro"],
		["StudentFest", "https://studentfest.ro"],
		["West Summer University", "https://wsu.osut.ro"],
	];
	const AlteLinkuri = [
		["Contact", "/contact"],
		["Întrebări frecvente", "/intrebari"],
		["Parteneri", "/parteneri"],
		["Politica privind fișierele cookies", "/cookies"],
	];
	return (
		<>
			<footer id="websiteFooter" className={classes.root + " whitebg"}>
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={3}>
							<Link to="/contact">
								{dark ? (
									<img src={osut} style={{ height: "50px" }} />
								) : (
									<img src={osutDark} style={{ height: "50px" }} />
								)}
							</Link>
							<br />
							<br />
							<Typography
								color="textPrimary"
								variant="subtitle2"
								component="p"
								gutterBottom
								title="Adresa:B-dul Vasile Pârvan Nr.4 cam.247, Timisoara">
								Bd. Vasile Pârvan nr. 4, camera 247, Timișoara, județul Timiș
								<br />
								+40.256.592.181
							</Typography>
							<a
								target="_blank"
								follow="nofollow"
								href="https://www.instagram.com/osut_247/">
								<IconButton size="small" edge="start">
									<InstagramIcon fontSize="default" />
								</IconButton>
							</a>
							<a
								target="_blank"
								follow="nofollow"
								href="https://www.facebook.com/osut.ro/">
								<IconButton size="small" edge="start">
									<FacebookIcon fontSize="default" />
								</IconButton>
							</a>
							<a
								target="_blank"
								follow="nofollow"
								href="https://www.youtube.com/channel/UCCtrYNhJN036DyWxyuQIaCg">
								<IconButton size="small" edge="start">
									<YouTubeIcon fontSize="default" />
								</IconButton>
							</a>
						</Grid>
						<Grid item xs={12} sm={6} md={2}>
							<Typography
								className="footer_heading_meniu"
								color="textPrimary"
								variant="h6">
								PROIECTE
							</Typography>
							{Proiecte.map((proiect, key) => (
								<a
									href={proiect[1]}
									target="_blank"
									follow="follow"
									key={key}
									style={{ display: "block" }}>
									<Typography
										className="block"
										color="textSecondary"
										variant="subtitle2">
										{proiect[0]}
									</Typography>
								</a>
							))}
						</Grid>

						<Grid item xs={12} sm={6} md={2}>
							<Typography
								className="footer_heading_meniu"
								color="textPrimary"
								variant="h6">
								Despre
							</Typography>
							{Despre.map((despre, key) => (
								<Link to={despre[1]} style={{ display: "block" }} key={key}>
									<Typography
										className="block"
										color="textSecondary"
										variant="subtitle2">
										{despre[0]}
									</Typography>
								</Link>
							))}
						</Grid>

						<Grid item xs={12} sm={6} md={3}>
							<Typography
								className="footer_heading_meniu"
								color="textPrimary"
								variant="h6">
								Linkuri utile
							</Typography>
							{AlteLinkuri.map((alte, key) => (
								<Link to={alte[1]} style={{ display: "block" }} key={key}>
									<Typography
										color="textSecondary"
										className="block"
										variant="subtitle2">
										{alte[0]}
									</Typography>
								</Link>
							))}
							<a
								href="https://old.osut.ro"
								target="_blank"
								follow="follow"
								style={{ display: "block" }}>
								<Typography
									className="block"
									color="textSecondary"
									variant="subtitle2">
									Website-ul vechi
								</Typography>
							</a>
						</Grid>
						<Grid item xs={12} sm={6} md={2}>
							<Typography
								className="footer_heading_meniu"
								color="textPrimary"
								variant="h6">
								Informații studenți
							</Typography>
							{IS !== "" &&
								IS.slice(0, 6).map((info, key) => (
									<Link
										key={key}
										to={"/informatii-studenti/" + info.link}
										style={{ display: "block" }}>
										<Typography
											color="textSecondary"
											className="block"
											variant="subtitle2">
											{info.titlu}
										</Typography>
									</Link>
								))}
						</Grid>
						<Grid item xs={12}>
							<div id="made" className="unselectable">
								Made with <span id="inima">❤</span> in Timișoara
							</div>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
}
