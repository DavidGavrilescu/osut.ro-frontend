import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {
	incarcaInformatiiStudenti,
	incarcaIntrebariInformatiiStudenti,
} from "../reuse/API";

import "./informatii.css";
import Hidden from "@material-ui/core/hidden";
import Helmet from "react-helmet";
import Loader from "../Loader/Loader";

const IntrebariInformatii = () => {
	const [info, setInfo] = useState([]);
	const [categorii, setCategorii] = useState([]);
	const [den, setDen] = useState("");

	let { categorie } = useParams();

	useEffect(() => {
		if (categorii.length == 0) {
			incarcaInformatiiStudenti(setCategorii, "intrebari informatii");
		}
		console.log("intrebariinfromatii");
		incarcaIntrebariInformatiiStudenti(categorie, setInfo, (r) => {
			setDen(r);
		});
	}, [categorie]);
	return (
		<>
			<Helmet>
				<title>{`OSUT - Info studenți - ${categorie}`}</title>
				<meta
					name="description"
					content="Diverse informații privind parcursul academic al unui student la Universitatea de Vest din Timișoara (UVT)."
				/>
			</Helmet>
			<Container maxWidth="lg" id="centru_ajutor" style={{ marginTop: "20px" }}>
				<Grid
					container
					spacing={4}
					direction="row"
					justify="flex-start"
					style={{ position: "relative" }}>
					{info.length === 0 ? (
						<>
							<Grid item xs={12} style={{ textAlign: "center" }}>
								<Loader />
								Se încarcă...
							</Grid>
						</>
					) : (
						<>
							<Grid item xs={12}>
								<Breadcrumbs aria-label="breadcrumb">
									<Link color="inherit" to="/informatii-studenti">
										<Typography
											color="textSecondary"
											variant="body1"
											component="span">
											Informații studenți
										</Typography>
									</Link>
									<Link
										color="inherit"
										to={"/informatii-studenti/" + categorie}>
										<Typography
											color="textPrimary"
											variant="body1"
											component="span">
											{den}
										</Typography>
									</Link>
								</Breadcrumbs>
							</Grid>
							<Hidden smDown>
								<Grid item xs={12} md={3}>
									<div className="sticky">
										{categorii.length !== 0 &&
											categorii.map((item) => (
												<>
													<Link
														key={item.id}
														to={"" + item.link}
														style={{ color: "inherit" }}>
														<Typography
															color="textSecondary"
															variant="h5"
															className="categorieInfo"
															component="h5"
															color={
																item.link.toLowerCase() ==
																categorie.toLowerCase()
																	? "primary"
																	: "default"
															}
															gutterBottom
															style={{
																fontWeight: 400,
																marginBottom: 6,
															}}>
															{item.titlu}
														</Typography>
													</Link>
												</>
											))}
									</div>
								</Grid>
							</Hidden>
							<Grid item xs={12} md={9}>
								<div className="whitebg">
									{info.length !== 0 &&
										info.map((item) => (
											<>
												<Link
													key={item.id}
													className="informatieLink"
													to={`/informatii-studenti/${categorie}/${item.link}`}>
													<Typography
														color="textPrimary"
														variant="h6"
														component="div"
														style={{ fontWeight: 200 }}
														gutterBottom>
														{item.intrebare}
													</Typography>
												</Link>
											</>
										))}
								</div>
							</Grid>
						</>
					)}
				</Grid>
			</Container>
		</>
	);
};

export default IntrebariInformatii;
