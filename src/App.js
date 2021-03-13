import React, { useState, useEffect, Suspense, lazy } from "react";
import Home from "./components/home/Home";
import FooterWebsite from "./components/footer/Footer";

// import Proiecte from "./components/proiecte/Proiecte";
import Header from "./components/header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "./components/Loader/Loader";
import Paper from "@material-ui/core/Paper";
import {
	// BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
	withRouter,
	useHistory,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import {
	createMuiTheme,
	ThemeProvider,
	responsiveFontSizes,
} from "@material-ui/core/styles";
import "./App.css";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  .MuiPaper-root{box-shadow:none}
  
`;
// import Despre from "./components/despre/Despre";
const Despre = lazy(() => import("./components/despre/Despre"));

//import Proiecte from "./components/proiecte/Proiecte";
const Proiecte = lazy(() => import("./components/proiecte/Proiecte"));

// import DesprePresedinti from "./components/despre/DesprePresedinti";
// import PoliticaCookies from "./components/cookies/PoliticaCookies";
// import ArhivaMedia from "./components/arhivaMedia/ArhivaMedia";
const DesprePresedinti = lazy(() =>
	import("./components/despre/DesprePresedinti")
);
const PoliticaCookies = lazy(() =>
	import("./components/cookies/PoliticaCookies")
);
const ArhivaMedia = lazy(() => import("./components/arhivaMedia/ArhivaMedia"));

// import Parteneri from "./components/parteneri/Parteneri";
const Parteneri = lazy(() => import("./components/parteneri/Parteneri"));

// import Postare from "./components/blog/Postare";
// import Informatii from "./components/informatii/Informatii";
// import IntrebariInformatii from "./components/informatii/IntrebariInformatii";
// import Informatie from "./components/informatii/Informatie";
// import Cookies from "./components/cookies/Cookies";
// import BlogPage from "./components/blog/BlogPage";
// import Contact from "./components/contact/Contact";
// import Intrebari from "./components/intrebari/Intrebari";

const Postare = lazy(() => import("./components/blog/Postare"));
const Informatii = lazy(() => import("./components/informatii/Informatii"));
const IntrebariInformatii = lazy(() =>
	import("./components/informatii/IntrebariInformatii")
);
const Informatie = lazy(() => import("./components/informatii/Informatie"));
const Cookies = lazy(() => import("./components/cookies/Cookies"));
const BlogPage = lazy(() => import("./components/blog/BlogPage"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Intrebari = lazy(() => import("./components/intrebari/Intrebari"));

function _ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
	const [dark, switchDark] = useState(
		localStorage.getItem("dark_mode") == null
			? false
			: JSON.parse(localStorage.getItem("dark_mode"))
	);
	useEffect(() => {
		localStorage.setItem("dark_mode", dark);
		if (dark) {
			document.body.className = "isDark";
		} else {
			document.body.className = "isLight";
		}
	}, [dark]);
	const history = useHistory();

	let theme = createMuiTheme({
		overrides: {
			MuiCardContent: {
				root: {
					marginTop: 0,
					"&:first-child": {
						paddingTop: 0,
					},
				},
			},
		},
		palette: {
			type: dark ? "dark" : "light",
			background: {
				//	paper: dark ? "#1d222e" : "#efefef",
				paper: dark ? "#161a24" : "#efefef",
			},
			primary: {
				main: "#dd2020ee",
			},
			text: {
				secondary: dark ? "#ddd" : "#383838",
			},
		},
		typography: {
			fontFamily: "Merriweather Sans, sans-serif",
			fontWeight: 400,
			h1: {
				fontFamily: "Merriweather Sans, sans-serif",
				fontWeight: 800,
			},
			h2: {
				fontFamily: "Merriweather Sans, sans-serif",
				fontWeight: 800,
			},
			h3: {
				fontFamily: "Merriweather Sans, sans-serif",
				fontWeight: 800,
			},
			h4: {
				fontFamily: "Merriweather Sans, sans-serif",
				fontWeight: 800,
			},
			h5: {
				fontFamily: "Merriweather Sans, sans-serif",
				fontWeight: 800,
			},
			h6: {
				fontFamily: "Merriweather Sans, sans-serif",
				fontWeight: 800,
			},
			body1: {
				fontSize: "1.08rem",
				lineHeight: 1.74,
			},
		},
	});
	theme = responsiveFontSizes(theme);
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					OSUT - Organizația Studenților din Universitatea de Vest Timișoara
				</title>
				<link rel="canonical" href="http://osut.ro" />
			</Helmet>
			<GlobalStyle />
			<Suspense
				fallback={
					<div style={{ margin: "130px auto", textAlign: "center" }}>
						<Loader />
					</div>
				}>
				<ThemeProvider theme={theme}>
					<CssBaseline className="baseLineCSS" />
					<div className={dark ? "dark_mode" : "light_mode"}>
						<Paper style={{ borderRadius: 0, boxShadow: "none" }}>
							<Header mode={dark} changeMode={switchDark} />

							<Switch basename="/" history={history}>
								<ScrollToTop>
									<Route path="/" component={Home} exact />
									<Route
										path="/contact"
										component={() => <Contact darkmode={dark} />}
										exact
									/>
									<Route
										path="/despre-noi/arhiva-media/"
										component={ArhivaMedia}
										exact
									/>
									<Route path="/cookies" component={PoliticaCookies} exact />

									<Route path="/proiecte" component={Proiecte} exact />
									<Route path="/intrebari" component={Intrebari} exact />
									<Route
										exact
										path="/despre-noi"
										component={() => <Despre dark={dark} />}
									/>
									<Route
										exact
										path="/despre-noi/presedinti-osut"
										component={() => <DesprePresedinti dark={dark} />}
									/>

									<Route path="/blog" exact component={BlogPage} />
									<Route path="/blog/:id/:categ?" component={BlogPage} />
									<Route
										path="/informatii-studenti"
										component={Informatii}
										exact
									/>
									<Route
										path="/informatii-studenti/:categorie"
										component={IntrebariInformatii}
										exact
									/>
									<Route
										path="/informatii-studenti/:categorie/:informatie"
										component={Informatie}
										exact
									/>
									<Route
										path="/info-studenti"
										component={Informatii}
										exact
									/>
									<Route
										path="/info-studenti/:categorie"
										component={IntrebariInformatii}
										exact
									/>
									<Route
										path="/info-studenti/:categorie/:informatie"
										component={Informatie}
										exact
									/>

									<Route
										path="/parteneri"
										component={() => <Parteneri darkmode={dark} />}
									/>
									<Route path="/p/:id" component={Postare} />
									{/*} <Route component={Error} />{*/}
								</ScrollToTop>
							</Switch>
							<FooterWebsite dark={dark} />
							<Cookies />
						</Paper>
					</div>
				</ThemeProvider>
			</Suspense>
		</div>
	);
};

export default App;
