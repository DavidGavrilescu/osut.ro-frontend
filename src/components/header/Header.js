import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
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
import { Hidden } from "@material-ui/core";
import Container from "@material-ui/core/Container";
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
				onChange={(event, newValue) => setValue(newValue)}
				showLabels>
				<BottomNavigationAction component={Link} to="/despre-noi" label="Despre" />
				<BottomNavigationAction label="Informații" component={Link} to="/info-studenti" />
				<BottomNavigationAction component={Link} to="/blog" label="Articole" />
				<BottomNavigationAction component={Link} to="/proiecte" label="Proiecte" />
			</BottomNavigation>
		</Hidden>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		fontWeight: "bold",
	},
	link: {
		textDecoration: "none",
		overflow: "visible",
	},
	linkbutton: {
		fontWeight: 800,
		opacity: 0.8,
		"&:hover": {
			background: "transparent",
			opacity: 1,
		},
	},
}));

const NavIcons = ({ dark, onToggleDark, onToggleSearch }) => (
	<>
		<Tooltip title={dark ? "Mod luminos" : "Mod întunecat"} placement="bottom">
			<IconButton size="medium" onClick={onToggleDark}>
				{dark ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Tooltip>
		<Tooltip title={"Căutare"} placement="bottom">
			<IconButton size="medium" onClick={onToggleSearch}>
				<SearchIcon />
			</IconButton>
		</Tooltip>
		<Tooltip title={"Contactează-ne rapid"} placement="bottom">
			<a href="https://form.123formbuilder.com/3378133" target="_blank" rel="nofollow">
				<Button variant="contained" color="primary">
					<NewReleasesIcon />
				</Button>
			</a>
		</Tooltip>
	</>
);

const Header = ({ mode, changeMode, fixed = true }) => {
	const [cautare, setCautare] = useState(false);
	const classes = useStyles();

	const switchStyle = () => changeMode(!mode);
	const bg = mode ? "rgba(29,34,46,.7)" : "rgba(255,255,255,.7)";
	const inchide = () => setCautare(false);

	return (
		<>
			<div id="main_nav" style={{ overflowY: "hidden" }}>
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
										<img
											src={mode ? osut : osutDark}
											alt="OSUT"
											style={{ height: "38px", marginTop: "9px" }}
										/>
									</Link>
								</Tooltip>
							</Typography>

							<Hidden smDown>
								<NavLink activeClassName="selected" to="/despre-noi" className={classes.link}>
									<Button color="default" className={classes.linkbutton}>
										Despre noi
									</Button>
								</NavLink>
								<NavLink activeClassName="selected" to="/info-studenti" className={classes.link}>
									<Button className={classes.linkbutton} color="default">
										Info studenți
									</Button>
								</NavLink>
								<NavLink activeClassName="selected" to="/blog" className={classes.link}>
									<Button color="default" className={classes.linkbutton}>
										Articole
									</Button>
								</NavLink>
								<NavLink activeClassName="selected" to="/proiecte" className={classes.link}>
									<Button color="default" className={classes.linkbutton}>
										Proiecte
									</Button>
								</NavLink>
								&nbsp;
								<NavIcons
									dark={mode}
									onToggleDark={switchStyle}
									onToggleSearch={() => setCautare(!cautare)}
								/>
							</Hidden>
							<Hidden mdUp>
								<NavIcons
									dark={mode}
									onToggleDark={switchStyle}
									onToggleSearch={() => setCautare(!cautare)}
								/>
							</Hidden>
						</Toolbar>
					</Container>
				</AppBar>

				{cautare && <Cautare dark={mode} inchide={inchide} />}
			</div>
			<SimpleBottomNavigation />
			<div style={{ minHeight: "100px", width: "100%", marginBottom: -10 }}></div>
		</>
	);
};
export default Header;
