import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Tooltip from "@material-ui/core/Tooltip";
import osut from "../../img/osut-alb-meniu.png";
import osutDark from "../../img/osut-negru-meniu.png";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Cautare from "./Cautare";
import Paper from "@material-ui/core/Paper";
import "./header.css";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);

	return (
		<Hidden mdUp>
			<BottomNavigation
				id="whitebg"
				style={{
					position: "fixed",
					bottom: 0,
					left: 0,
					zIndex: 1099,
					padding: 0,
					width: "100%",
				}}
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels>
				<BottomNavigationAction
					component={Link}
					to="/despre-noi"
					label="Despre"
				/>

				<BottomNavigationAction
					label="Informații"
					component={Link}
					to="/informatii-studenti"
				/>
				<BottomNavigationAction component={Link} to="/blog" label="Articole" />

				<BottomNavigationAction
					component={Link}
					to="/proiecte"
					label="Proiecte"
				/>
			</BottomNavigation>
		</Hidden>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
		backdropFilter: "blur(10px)",
	},
	title: {
		flexGrow: 1,
		fontWeight: "bold",
	},
	link: {
		textDecoration: "none",
		overflow: "visible",
		//marginRight:"10px"
	},
	linkbutton: {
		// letterSpacing: 0.3,
		fontWeight: 800,
		opacity: 0.8,
		"&:hover": {
			background: "transparent",
			opacity: 1,
		},
	},
	inputPanica: {
		marginBottom: "20px",
	},
}));

const Despre = [
	["Scurt istoric", "/despre-noi/scurt-istoric/"],
	["Presedinti", "despre-noi/presedinti-osut"],
	["Arhiva media", "despre-noi/arhiva-media/"],
	["Echipa", "despre-noi/prezentare-osut/echipa/"],
	["Departamente", "despre-noi/prezentare-osut/departamente/"],
];

const MeniuMobil = ({ inchide }) => {
	const classes = useStyles();
	// useEffect(() => {
	// 	let tim = gsap.timeline({ duration: 0.2 });
	// 	/tim.from("#meniuMobil a", { top: -20, opacity: 0, stagger: 0.07 });
	// });
	return (
		<Paper
			id="meniuMobil"
			style={{ borderRadius: "0px", border: "none", boxShadow: "none" }}>
			<div>
				<Container maxWidth="lg">
					<NavLink
						activeClassName="selected"
						color="default"
						to="/despre-noi"
						onClick={() => inchide()}
						className={classes.link}>
						<Typography variant="h2" color="default">
							Despre noi
						</Typography>
					</NavLink>
					<NavLink
						activeClassName="selected"
						color="default"
						to="/informatii-studenti"
						onClick={() => inchide()}
						className={classes.link}>
						<Typography variant="h2" color="default">
							Informații pentru studenți
						</Typography>
					</NavLink>
					<NavLink
						activeClassName="selected"
						color="default"
						to="/proiecte"
						onClick={() => inchide()}
						className={classes.link}>
						<Typography variant="h2" color="default">
							Proiecte
						</Typography>
					</NavLink>
					<NavLink
						activeClassName="selected"
						color="default"
						to="/blog"
						onClick={() => inchide()}
						className={classes.link}>
						<Typography variant="h2" color="default">
							Articole
						</Typography>
					</NavLink>
				</Container>
			</div>
		</Paper>
	);
};

const Header = ({ mode, changeMode, fixed = true }) => {
	const [panica, setPanica] = useState(false);
	const Middot = () => (
		<div style={{ display: "inline", margin: "auto 5px", fontSize: "30px" }}>
			&middot;
		</div>
	);
	const handleClickOpen = () => {
		setPanica(true);
	};

	const handleClose = () => {
		setPanica(false);
	};
	const [cautare, setCautare] = useState(false);
	const [proiecte, setProiecte] = useState(false);
	const [meniuMobil, setMeniuMobil] = useState(false);

	const classes = useStyles();
	const [dark, switchDark] = useState(mode);
	const switchStyle = () => {
		switchDark(!dark);
		changeMode(!dark);
	};
	const bg = dark ? "rgba(29,34,46,.7)" : "rgba(255,255,255,.7)";
	const inchide = () => setCautare(false);
	return (
		<>
			<div id="main_nav" style={{ overflowY: "hidden" }}>
				<div class="snowflakes" aria-hidden="true">
					<div class="snowflake">❅</div>
					<div class="snowflake">❅</div>
					<div class="snowflake">❆</div>
					<div class="snowflake">❄</div>
					<div class="snowflake">❅</div>
					<div class="snowflake">❆</div>
					<div class="snowflake">❄</div>
					<div class="snowflake">❅</div>
					<div class="snowflake">❆</div>
					<div class="snowflake">❄</div>
				</div>
				<AppBar
					id="mainAppBar"
					position={fixed ? "fixed" : "sticky"}
					style={{
						borderBottom: "1px solid rgba(125,125,165,.1)",
						boxShadow: "none",
						background: bg,
						backdropFilter: "blur(100px)",
					}}>
					<Container maxWidth="lg">
						<Toolbar disableGutters={true} variant="regular">
							<Typography variant="h6" className={classes.title}>
								<Tooltip title={"Prima pagina"} placement="bottom">
									<Link to="/" style={{ textDecoration: "none" }}>
										{dark ? (
											<img
												src={osut}
												alt="OSUT"
												style={{ height: "38px", marginTop: "9px" }}
											/>
										) : (
											<img
												src={osutDark}
												alt="OSUT"
												style={{ height: "38px", marginTop: "9px" }}
											/>
										)}
									</Link>
								</Tooltip>
							</Typography>

							<Hidden smDown>
								<NavLink
									activeClassName="selected"
									to="/despre-noi"
									className={classes.link}>
									<Button color="default" className={classes.linkbutton}>
										Despre noi
									</Button>
								</NavLink>
								<NavLink
									activeClassName="selected"
									to="/informatii-studenti"
									className={classes.link}>
									<Button className={classes.linkbutton} color="default">
										Info studenți
									</Button>
								</NavLink>
								<NavLink
									activeClassName="selected"
									to="/blog"
									className={classes.link}>
									<Button color="default" className={classes.linkbutton}>
										Articole
									</Button>
								</NavLink>
								<NavLink
									activeClassName="selected"
									to="/proiecte"
									className={classes.link}>
									<Button color="default" className={classes.linkbutton}>
										Proiecte
									</Button>
								</NavLink>
								<Tooltip
									title={dark ? "Mod luminos" : "Mod întunecat"}
									placement="bottom">
									<IconButton size="medium" onClick={switchStyle}>
										{dark ? <Brightness7Icon /> : <Brightness4Icon />}
									</IconButton>
								</Tooltip>
								<Tooltip title={"Căutare"} placement="bottom">
									<IconButton
										size="medium"
										onClick={() => setCautare(!cautare)}>
										<SearchIcon />
									</IconButton>
								</Tooltip>
								&nbsp;
								<Tooltip title={"Contactează-ne rapid"} placement="bottom">
									<a
										href="https://form.123formbuilder.com/3378133"
										target="_blank"
										follow="nofollow">
										<Button
											// onClick={() => setPanica(!panica)}
											variant="contained"
											color="primary">
											<NewReleasesIcon />
										</Button>
									</a>
								</Tooltip>
							</Hidden>
							<Hidden mdUp>
								<Tooltip
									title={dark ? "Mod luminos" : "Mod întunecat"}
									placement="bottom">
									<IconButton size="medium" onClick={switchStyle}>
										{dark ? <Brightness7Icon /> : <Brightness4Icon />}
									</IconButton>
								</Tooltip>
								<Tooltip title={"Căutare"} placement="bottom">
									<IconButton
										size="medium"
										onClick={() => setCautare(!cautare)}>
										<SearchIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title={"Contactează-ne rapid"} placement="bottom">
									<a
										href="https://form.123formbuilder.com/3378133"
										target="_blank"
										follow="nofollow">
										<Button
											// onClick={() => setPanica(!panica)}
											variant="contained"
											color="primary">
											<NewReleasesIcon />
										</Button>
									</a>
								</Tooltip>
							</Hidden>
						</Toolbar>
					</Container>
				</AppBar>

				{/* dialog */}
				{/* <Dialog
					maxWidth={"sm"}
					open={panica}
					onClose={handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">
						<Typography variant="h">Ai apăsat butonul de panică</Typography>
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Acesta este doar un exemplu neterminat.
						</DialogContentText>
						<TextField
							autoFocus={true}
							label="Nume si prenume"
							fullWidth={true}
							variant="outlined"
							helperText="optional"
							required={false}
							className={classes.inputPanica}
						/>
						<TextField
							label="Număr de telefon"
							fullWidth={true}
							variant="outlined"
							helperText="Necesar doar în cazul în care vom avea nevoie de mai multe detalii."
							required={true}
							className={classes.inputPanica}
						/>
						<TextField
							label="Email"
							fullWidth={true}
							variant="outlined"
							helperText=""
							required={true}
							className={classes.inputPanica}
						/>
						<TextField
							label="Facultatea la care studiezi:"
							fullWidth={true}
							variant="outlined"
							helperText=""
							required={true}
							className={classes.inputPanica}
						/>
						<TextField
							label="Specializarea"
							fullWidth={true}
							variant="outlined"
							helperText=""
							required={true}
							className={classes.inputPanica}
						/>
						<TextField
							label="Anul de studiu"
							fullWidth={true}
							variant="outlined"
							helperText=""
							required={true}
							className={classes.inputPanica}
						/>
						<TextField
							label="Descrie-ne cât mai explicit problema întâmpinată"
							fullWidth={true}
							variant="outlined"
							helperText=""
							required={true}
							className={classes.inputPanica}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="default">
							Anuleaza
						</Button>
						<Button onClick={handleClose} color="primary" variant="contained">
							Trimite
						</Button>
					</DialogActions>
				</Dialog> */}
				{cautare && <Cautare dark={dark} inchide={inchide} />}
				{/* <Proiecte dark={dark} inchide={inchide} vis={proiecte} /> */}
				{/* {meniuMobil && (
					<MeniuMobil dark={dark} inchide={() => setMeniuMobil(false)} />
				)} */}
			</div>
			<SimpleBottomNavigation />
			<div
				style={{ minHeight: "100px", width: "100%", marginBottom: -10 }}></div>
		</>
	);
};
export default Header;
