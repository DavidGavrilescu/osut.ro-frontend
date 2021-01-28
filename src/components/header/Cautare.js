import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/grid";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import { slugify } from "../reuse/Functions";
import Helmet from "react-helmet";
import AdditionalResults from "./AdditionalResults";

const local = "https://api.osut.ro";

const useStyles = makeStyles((theme) => ({
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
	},
	inputPanica: {
		marginBottom: "20px",
	},
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
	divider: {
		height: 28,
		margin: 4,
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

	const classes = useStyles();
	let bgSearch = dark ? "#262B36" : "#fefefe";
	useEffect(() => {
		if (input !== "") {
			/// blog
			const apiUrl = `${local}?cautare=${input}`;
			axios.get(apiUrl).then((res) => {
				let rez = res.data;
				setRezultate(rez.rezultate);
			});

			const apiUrl2 = `${local}?cautare_info_studenti=${input}`;
			axios.get(apiUrl2).then((res) => {
				let rez = res.data;
				setRezultateIS(rez.rezultate);
			});
		}
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
									{/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" /> */}
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
							overflowY: "scroll",
							paddingTop: 20,
						}}>
						<Grid
							container
							spacing={0}
							direction="row"
							alignItems="stretch"
							alignContent="stretch">
							{rezultate.length !== [] &&
								input == "aici stau lucrurile in care cred" && (
									<img
										src="https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.0-9/84246007_2902306279836806_3700865309125640192_n.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=KAhfzrsAYB8AX9ikR2M&_nc_ht=scontent.ftsr1-1.fna&oh=534f2fec7195519ea4f8d31a432f6d04&oe=600B94A6"
										style={{ width: "100%" }}
									/>
								)}
							{rezultate.length !== [] && rezultate.length > 0 && input !== "" && (
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

							{rezultate.length !== [] &&
								input !== "" &&
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
							{rezultateIS.length !== [] &&
								rezultateIS.length > 0 &&
								input !== "" && (
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
							{rezultateIS.length !== [] &&
								input !== "" &&
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
