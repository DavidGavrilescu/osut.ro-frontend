import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import Helmet from "react-helmet";
import AdditionalResults from "./AdditionalResults";

const API_BASE = "https://api.osut.ro";

const ANIMALS = [
	"🐭", "🐹", "🐰", "🐶", "🐺", "🦊", "🐯", "🦁", "🦒", "🦓",
	"🐴", "🐮", "🐷", "🐽", "🐻", "🐼", "🐸", "🐲", "🦄", "🐵",
	"🙈", "🙉", "🙊", "🐱", "🐾", "😸", "😹", "😺", "😼", "😻",
	"😽", "😾", "😿", "🙀", "🐅", "🐆", "🐘", "🦏", "🦛", "🐃",
	"🐂", "🐄", "🐒", "🦍", "🦧", "🦥", "🦘", "🐨", "🦌", "🐐",
	"🐏", "🐑", "🐎", "🦙", "🐪", "🐫", "🐗", "🐖", "🐉", "🦖",
	"🦕", "🐈", "🐕", "🐩", "🐇", "🦨", "🦝", "🦡", "🦔", "🦦",
	"🐀", "🐁", "🦇", "🐍", "👣", "🐦", "🦅", "🦉", "🦜", "🦩",
	"🐧", "🦚", "🦃", "🦢", "🦆", "🐓", "🐔", "🐣", "🐤", "🐥",
	"🐋", "🐳", "🐬", "🦈", "🐟", "🐠", "🐡", "🐙", "🦑", "🦐",
	"🦀", "🐚", "🐌", "🦞", "🦪", "🐢", "🦎", "🐊", "🏇", "🎠",
];
const randAnimal = () => ANIMALS[Math.floor(Math.random() * ANIMALS.length)];

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "7px 4px",
		display: "flex",
		alignItems: "center",
		width: "100%",
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
}));

const Cautare = ({ dark, inchide }) => {
	const [input, setInput] = useState("");
	const [rezultate, setRezultate] = useState([]);
	const [rezultateIS, setRezultateIS] = useState([]);
	const [cats, setCats] = useState(randAnimal());
	const debounceTimer = useRef(null);

	const classes = useStyles();
	const bgSearch = dark ? "#262B36" : "#fefefe";

	useEffect(() => {
		if (input === "") return;
		clearTimeout(debounceTimer.current);
		debounceTimer.current = setTimeout(() => {
			axios.get(`${API_BASE}?cautare=${input}`).then((res) => {
				setRezultate(res.data.rezultate);
			});
			axios.get(`${API_BASE}?cautare_info_studenti=${input}`).then((res) => {
				setRezultateIS(res.data.rezultate);
			});
		}, 300);
		return () => clearTimeout(debounceTimer.current);
	}, [input]);

	return (
		<>
			<Helmet>
				<title>{`Căutare - OSUT`}</title>
			</Helmet>
			<div
				id="Cautare"
				style={{
					zIndex: 9999,
					width: "100vw",
					position: "fixed",
					top: 0,
					left: 0,
					height: "100vh",
				}}>
				<Paper>
					<AppBar
						position="fixed"
						color="dark"
						style={{
							background: bgSearch,
							borderBottom: "1px solid rgba(125,125,165,.1)",
							boxShadow: "none",
							backdropFilter: "blur(14px)",
						}}>
						<Container maxWidth="lg">
							<Toolbar disableGutters={true} variant="regular">
								<div className={classes.root}>
									<InputBase
										className={classes.input}
										placeholder="Caută articole"
										inputProps={{ "aria-label": "cauta articole" }}
										fullWidth={true}
										autoFocus={true}
										onChange={(e) => setInput(e.target.value)}
									/>
									<IconButton
										color="default"
										className={classes.iconButton}
										aria-label="inchide"
										onClick={() => inchide()}>
										<CloseIcon />
									</IconButton>
								</div>
							</Toolbar>
						</Container>
					</AppBar>

					<Container
						maxWidth="lg"
						style={{
							marginTop: 58,
							height: "100vh",
							overflowY: "auto",
							paddingTop: 20,
						}}>
						<Grid
							container
							spacing={0}
							direction="row"
							alignItems="stretch"
							alignContent="stretch">
							{input.toLowerCase() === "meow" && (
								<h1
									style={{ userSelect: "none" }}
									onClick={() => setCats(cats + "" + randAnimal())}>
									{cats}
								</h1>
							)}
							{rezultate.length > 0 && input !== "" && (
								<Typography
									color="primary"
									variant="h5"
									style={{
										fontWeight: 300,
										textTransform: "uppercase",
										marginTop: 20,
										marginBottom: 20,
									}}>
									Articole:
								</Typography>
							)}
							{input !== "" &&
								rezultate.map((item) => (
									<Grid
										key={item.id}
										item
										xs={12}
										sm={12}
										className={classes.card}
										style={{ marginBottom: "10px" }}>
										<Link
											to={`/p/${item.urlfriendly}`}
											onClick={() => inchide()}>
											<Typography
												color="textSecondary"
												variant="body1"
												style={{
													fontSize: "1.3rem",
													fontWeight: 100,
													padding: "5px 0px",
													borderBottom: "1px solid rgba(180,170,170,.1)",
													marginTop: "0px",
												}}
												dangerouslySetInnerHTML={{ __html: item.titlu }}
											/>
										</Link>
									</Grid>
								))}
							{rezultateIS.length > 0 && input !== "" && (
								<Typography
									color="primary"
									variant="h5"
									style={{
										fontWeight: 300,
										textTransform: "uppercase",
										marginTop: 40,
										marginBottom: 20,
									}}>
									Info studenți:
								</Typography>
							)}
							{input !== "" &&
								rezultateIS.map((item) => (
									<Grid
										key={item.id}
										item
										xs={12}
										sm={12}
										className={classes.card}
										style={{ marginBottom: "10px" }}>
										<Link
											to={`/informatii-studenti/${item.linkCategorie}/${item.link}`}
											onClick={() => inchide()}>
											<Typography
												color="textSecondary"
												variant="body1"
												style={{
													fontSize: "1.3rem",
													fontWeight: 100,
													padding: "5px 0px",
													borderBottom: "1px solid rgba(180,170,170,.1)",
													marginTop: "0px",
												}}
												dangerouslySetInnerHTML={{ __html: item.intrebare }}
											/>
										</Link>
									</Grid>
								))}
							<AdditionalResults input={input} />
							<Grid
								key="paddingBottom"
								item
								xs={12}
								sm={12}
								className={classes.card}
								style={{ paddingBottom: 150 }}></Grid>
						</Grid>
					</Container>
				</Paper>
			</div>
		</>
	);
};

export default Cautare;
