import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Intrebari from "../intrebari/Intrebari";
import MessengerPlugin from "react-messenger-plugin";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./informatii.css";
import { incarcaInformatiiStudenti } from "../reuse/API";
import Helmet from "react-helmet";

const Sep = () => (
	<>
		<div
			style={{
				margin: "2px auto",
				padding: "60px 0px",
				borderBottom: "1px solid rgba(160,160,160,0)",
			}}></div>
	</>
);
const ContacteazaNe = () => (
	<>
		<div
			style={{
				padding: "20px 0px",
				marginTop: 0,
			}}>
			<Container
				maxWidth="lg"
				id="contacteaza_ne_helpcenter"
				style={{ marginTop: "80px", marginBottom: "0px" }}>
				<Grid container spacing={4} direction="row" alignItems="flex-start">
					<Grid item xs={12}>
						<Typography
							color="textPrimary"
							variant="h4"
							component="h6"
							gutterBottom
							style={{ textAlign: "center", marginBottom: 30 }}>
							N-ai găsit informațiile care te interesează?
							<br />
							<MessengerPlugin
								appId="532160876956612"
								pageId="212822908785170"
								color="blue"
								type="message-us"
								size="large"
							/>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	</>
);
const Informatie = ({ titlu, descriere, link }) => {
	return (
		<>
			<Grid item xs={12} md={6} lg={4} style={{ marginBottom: 30 }}>
				<Link to={"/info-studenti/" + link}>
					<div className="sectiune whitebg" role="button">
						<Typography
							color="textPrimary"
							variant="h4"
							component="h6"
							gutterBottom>
							{titlu}
						</Typography>
						<Typography color="textSecondary" variant="body1" component="p">
							{descriere}
						</Typography>
					</div>
				</Link>
			</Grid>
		</>
	);
};
const Informatii = () => {
	const [info, setInfo] = useState([]);
	useEffect(() => {
		if (info.length == 0) {
			incarcaInformatiiStudenti(setInfo, "informatii");
		}
		console.log("informatii");
	});
	return (
		<>
			<Container maxWidth="lg" id="centru_ajutor" style={{ marginTop: "30px" }}>
				<Grid container spacing={4} direction="row" alignItems="flex-start">
					{info.length !== 0 ? (
						info.map((item) => (
							<>
								<Informatie
									titlu={item.titlu}
									descriere={item.descriere}
									link={item.link}
								/>
							</>
						))
					) : (
						<>
							<Grid item xs={12} style={{ textAlign: "center" }}>
								<Loader />
								Se încarcă...
							</Grid>
						</>
					)}
				</Grid>
			</Container>
			<Sep />
			<Intrebari />
			<ContacteazaNe />
			<Helmet>
				<title>{`OSUT - Info studenți`}</title>
				<meta
					name="description"
					content="Diverse informații privind parcursul academic al unui student la Universitatea de Vest din Timișoara (UVT)."
				/>
			</Helmet>
		</>
	);
};

export default Informatii;
