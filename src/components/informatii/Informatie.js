import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {
	incarcaInformatiiStudenti,
	incarcaRaspunsIntrebareIS,
} from "../reuse/API";
import Hidden from "@material-ui/core/hidden";
import Helmet from "react-helmet";
import Loader from "../Loader/Loader";
import "./informatii.css";

const Informatie = () => {
	const [info, setInfo] = useState("");

	const [categorii, setCategorii] = useState([]);
	const [docs, setDocs] = useState([]);
	const [denin, setDenin] = useState([]);

	let { categorie } = useParams();
	let { informatie } = useParams();

	useEffect(() => {
		if (categorii.length == 0) {
			incarcaInformatiiStudenti(setCategorii);
		}
		incarcaRaspunsIntrebareIS(informatie, setDocs, setInfo, (r) => {
			setDenin(r);
		});
	}, [informatie]);

	return (
		<>
			<Helmet>
				<title>{`OSUT - Info studenți`}</title>
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
					{info === "" ? (
						<Grid item xs={12} style={{ textAlign: "center" }}>
							<Loader />
							Se încarcă...
						</Grid>
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
											color="textSecondary"
											variant="body1"
											component="span">
											{denin}
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
														to={"/informatii-studenti/" + item.link}
														style={{ color: "inherit" }}>
														<Typography
															color="textPrimary"
															variant="h5"
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
									{info !== "" && (
										<>
											<Typography
												color="textPrimary"
												variant="h4"
												component="h3"
												gutterBottom
												style={{
													fontWeight: 100,
												}}>
												{info.intrebare}
											</Typography>
											<Typography
												color="textSecondary"
												variant="body1"
												component="p"
												id="infoStudentiText"
												style={{ maxWidth: "75ch" }}
												dangerouslySetInnerHTML={{
													__html: info.raspuns,
												}}
												gutterBottom></Typography>
										</>
									)}
									<div
										style={{
											margin: "30px 0px",
											marginBottom: 0,
											padding: "20px 0px",
											borderTop: "1px solid rgba(160,160,160,.1)",
										}}>
										{Array.isArray(docs) && docs.length > 0 && (
											<Typography
												color="textPrimary"
												variant="h6"
												component="h6"
												gutterBottom
												style={{
													fontWeight: 100,
												}}>
												Atașamente:
											</Typography>
										)}
										{Array.isArray(docs) &&
											docs.length > 0 &&
											docs.map((item) => {
												let append =
													" <small>(" + item.tip_fisier + ")</small>";

												return (
													<>
														<a
															className="atasamentInfo"
															href={
																"https://api.osut.ro/media/docs/" + item.url
															}>
															<Typography
																variant="body1"
																color="textSecondary"
																dangerouslySetInnerHTML={{
																	__html: item.denumire + "" + append,
																}}></Typography>
														</a>
													</>
												);
											})}
									</div>
								</div>
							</Grid>
						</>
					)}
				</Grid>
			</Container>
		</>
	);
};

export default Informatie;
