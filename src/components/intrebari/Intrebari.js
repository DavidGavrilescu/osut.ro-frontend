import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, IconButton, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { getFAQ } from "../reuse/API";
import Helmet from "react-helmet";
import "./faq.css";
export default function Intrebari() {
	const [faqs, setFaqs] = useState("");
	const [toate, setToate] = useState(false);
	useEffect(() => {
		getFAQ(setFaqs);
	}, []);

	return (
		<div className="" style={{ marginTop: 0, paddingTop: 50 }} id="faq">
			<Helmet>
				<title>{`Întrebări frecvente - OSUT`}</title>
				<meta
					name="description"
					content="Cele mai frecvente întrebări puse de către studenții UVT și răspunsurile la acestea."
				/>
			</Helmet>
			<Container maxWidth="lg">
				<Grid container spacing={2} style={{ padding: "20px 0px" }}>
					<Grid item xs={12}>
						<Typography
							color="textPrimary"
							variant="h4"
							gutterBottom
							component="h3"
							style={{ textAlign: "center", marginBottom: 40 }}>
							Întrebări frecvente
						</Typography>
					</Grid>

					{!toate &&
						faqs !== "" &&
						faqs
							.slice(0, 6)

							.map((faq) => (
								<Grid item xs={12} md={6}>
									<Accordion
										active={false}
										className="faqIntrebare"
										style={{
											background: "transparent",
											border: "1px solid rgba(150,150,150,0.3)",
											minHeight: "105px",
										}}>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											<Typography
												color="textPrimary"
												variant="body1"
												style={{ fontSize: "1.3rem" }}
												gutterBottom
												component="div">
												{faq.intrebare}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography
												color="textSecondary"
												variant="body1"
												gutterBottom
												style={{ maxWidth: "75ch", fontWeight: 200 }}
												component="p"
												dangerouslySetInnerHTML={{
													__html: faq.raspuns,
												}}></Typography>
										</AccordionDetails>
									</Accordion>
								</Grid>
							))}
					{toate &&
						faqs !== "" &&
						faqs.map((faq) => (
							<Grid item xs={12} md={6}>
								<Accordion
									active={false}
									className="faqIntrebare"
									style={{
										background: "transparent",
										border: "1px solid rgba(150,150,150,0.3)",
										minHeight: "105px",
									}}>
									<AccordionSummary expandIcon={<ExpandMoreIcon />}>
										<Typography
											color="textPrimary"
											variant="body1"
											style={{ fontSize: "1.3rem" }}
											gutterBottom
											component="p">
											{faq.intrebare}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											color="textSecondary"
											variant="body1"
											gutterBottom
											style={{ maxWidth: "75ch" }}
											component="p"
											dangerouslySetInnerHTML={{
												__html: faq.raspuns,
											}}></Typography>
									</AccordionDetails>
								</Accordion>
							</Grid>
						))}
					<div
						style={{
							textAlign: "right",
							marginTop: 20,

							width: "100%",
						}}>
						<Button
							variant="default"
							onClick={() => {
								setToate(!toate);

								window.location.hash = "#faq";
							}}>
							{toate ? "Arată mai puține" : "Arată mai multe"}
						</Button>
					</div>
				</Grid>
			</Container>
		</div>
	);
}
