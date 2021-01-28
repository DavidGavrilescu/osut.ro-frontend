import React, { useState, useEffect } from "react";
import Partener from "./Partener";
import Grid from "@material-ui/core/grid";
import Container from "@material-ui/core/Container";
import Separator from "../separator/Separator";
import Typography from "@material-ui/core/Typography";
import { getParteneri } from "../reuse/API";
import Helmet from "react-helmet";

const Parteneri = ({ darkmode }) => {
	const [parteneri, setParteneri] = useState([]);
	useEffect(() => {
		getParteneri((r) => {
			setParteneri(r);
		});
	}, []);
	return (
		<>
<Helmet>
				<title>{`Parteneri - OSUT`}</title>
				<meta name="description" content="Partenerii și colaboratorii Organizației Studenților din Universitatea de Vest din Timișoara." />
			</Helmet>
		<div>

			<Container maxWidth="lg">
				<Grid
					container
					spacing={5}
					direction="row"
					alignItems="center"
					justify="center">
					<Grid item xs={12}>
						<Typography
							color="textPrimary"
							variant="h4"
							component="h2"
							style={{
								textTransform: "none",
								marginTop: "10px",
								textAlign: "center",
							}}
							gutterBottom>
							Parteneri
						</Typography>
					</Grid>
					{parteneri !== [] &&
						parteneri.map((part) => {
							if (part.tip.toString() === "1")
								return (
									<Partener
										img={part.poza}
										imgdark={part.pozaDark}
										denumire={part.denumire}
										url={part.url}
										darkmode={darkmode}
									/>
								);
						})}
					<Grid item xs={12}>
						<Typography
							color="textPrimary"
							variant="h4"
							component="h2"
							style={{
								textTransform: "none",
								marginTop: "10px",
								textAlign: "center",
							}}
							gutterBottom>
							Parteneri media
						</Typography>
					</Grid>
					{parteneri !== [] &&
						parteneri.map((part) => {
							if (part.tip.toString() === "2")
								return (
									<Partener
										img={part.poza}
										imgdark={part.pozaDark}
										denumire={part.denumire}
										url={part.url}
										darkmode={darkmode}
									/>
								);
						})}
					<Grid item xs={12}>
						<Typography
							color="textPrimary"
							variant="h4"
							component="h2"
							style={{
								textTransform: "none",
								marginTop: "10px",
								textAlign: "center",
							}}
							gutterBottom>
							Prieteni
						</Typography>
					</Grid>
					{parteneri !== [] &&
						parteneri.map((part) => {
							if (part.tip.toString() === "3")
								return (
									<Partener
										img={part.poza}
										imgdark={part.pozaDark}
										denumire={part.denumire}
										url={part.url}
										darkmode={darkmode}
									/>
								);
						})}
				</Grid>
			</Container>
		</div>
		</>
	);
};

export default Parteneri;
