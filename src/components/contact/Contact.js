import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomIcon from "@material-ui/icons/Room";
import HartaDark from "../../img/harti/dark.png";
import HartaLight from "../../img/harti/light.png";
import Helmet from "react-helmet";

const Line = ({ icon, text }) => (
	<div
		style={{
			display: "flex",
			alignItems: "center",
			flexWrap: "wrap",
			marginBottom: 5,
		}}>
		{icon}

		<span style={{ marginLeft: 10, fontSize: 15 }}>{text}</span>
	</div>
);

const Contact = ({ darkmode }) => {
	return (
		<>
		<Helmet>
				<title>{`Contact - OSUT`}</title>
				<meta name="description" content="Datele de contact ale Organizației Studenților din Universitatea de Vest din Timișoara și ale studenților reprezentanți." />
			</Helmet>
		<Container maxWidth="lg">
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<div id="contact" className="whitebg">
						<Typography color="textPrimary" variant="h4" gutterBottom>
							Contact OSUT
						</Typography>
						<Typography color="textSecondary" variant="body1">
							<Line
								icon={<RoomIcon fontSize="small" />}
								text="B-dul Vasile Pârvan Nr.4 cam.247"
							/>
							<Line icon={<PhoneIcon fontSize="small" />} text="0256 592 181" />
							<Line
								icon={<MailOutlineIcon fontSize="small" />}
								text="office@osut.ro"
							/>
							<small>
								<b>Program sediu OSUT:</b> <br />
								de luni până vineri 09:00 - 17:00
							</small>
						</Typography>
					</div>
				</Grid>

				<Grid item xs={12} md={8}>
					<div className="whitebg">
						<Typography color="textPrimary" variant="h4">
							Persoane de contact
						</Typography>
						<Grid container spacing={0}>
							<Grid item xs={12} md={4} style={{ marginTop: 20 }}>
								<Typography
									color="textPrimary"
									variant="h5"
									style={{ marginBottom: 5 }}>
									Adrian BREHA
								</Typography>
								<Typography
									color="textSecondary"
									variant="body2"
									style={{ marginBottom: 10, fontWeight: 400 }}>
									Președinte OSUT
								</Typography>
								<Typography color="textSecondary" variant="body1">
									<Line
										icon={<PhoneIcon fontSize="small" />}
										text="0748 322 663"
									/>
									<Line
										icon={<MailOutlineIcon fontSize="small" />}
										text="adrian@osut.ro"
									/>
								</Typography>
							</Grid>
							<Grid item xs={12} md={4} style={{ marginTop: 20 }}>
								<Typography
									color="textPrimary"
									variant="h5"
									style={{ marginBottom: 5 }}>
									Patricia VĂLEANU
								</Typography>
								<Typography
									color="textSecondary"
									variant="body2"
									style={{ marginBottom: 10, fontWeight: 400 }}>
									Vicepreşedinte OSUT
								</Typography>
								<Typography color="textSecondary" variant="body1">
									<Line
										icon={<PhoneIcon fontSize="small" />}
										text="0769 616 250"
									/>
									<Line
										icon={<MailOutlineIcon fontSize="small" />}
										text="patricia.valeanu@osut.ro"
									/>
								</Typography>
							</Grid>
							<Grid item xs={12} md={4} style={{ marginTop: 20 }}>
								<Typography
									color="textPrimary"
									variant="h5"
									style={{ marginBottom: 5 }}>
									Andreea ARGEȘEANU
								</Typography>
								<Typography
									color="textSecondary"
									variant="body2"
									style={{ marginBottom: 10, fontWeight: 400 }}>
									Vicepreşedinte OSUT
								</Typography>
								<Typography color="textSecondary" variant="body1">
									<Line
										icon={<PhoneIcon fontSize="small" />}
										text="0746 036 096"
									/>
									<Line
										icon={<MailOutlineIcon fontSize="small" />}
										text="andreea.argeseanu@osut.ro"
									/>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography
									color="textSecondary"
									variant="body2"
									id="contact"
									style={{ marginBottom: 10, fontWeight: 200 }}>
									<br />
									Listele cu studenții reprezentanți sunt disponibile aici:
									<a
										href="https://drive.google.com/file/d/1EkCGTmd-FNqVoNKo8WATQsDll-Of1jUO/view"
										target="_blank"
										style={{ display: "block" }}>
										Senatul UVT
									</a>
									<a
										href="https://drive.google.com/file/d/1gsnlpP0diKiblloRwcR9BDTxJGPb9ZNN/view"
										target="_blank"
										style={{ display: "block" }}>
										Consiliile facultăților
									</a>
									<a
										href="https://drive.google.com/file/d/1-TWPxVoyPvqHf9SiQRB9EUkheJKdGdmb/view"
										target="_blank"
										style={{ display: "block" }}>
										CSD și CSUD
									</a>
								</Typography>
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid item xs={12}>
					{darkmode ? (
						<img
							src={HartaDark}
							alt={"Harta"}
							style={{ width: "100%", borderRadius: 10 }}
						/>
					) : (
						<img
							src={HartaLight}
							alt={"Harta"}
							style={{ width: "100%", borderRadius: 10 }}
						/>
					)}
				</Grid>
			</Grid>
		</Container>
		</>
	);
};
export default Contact;
