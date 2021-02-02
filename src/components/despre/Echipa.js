import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/grid";
import "./despre.css";

//dsad
const diana = "diana_iuga";

const MembruEchipa = ({ nume_poza, nume, email, telefon, rank }) => {
	const [hov, setHov] = useState(`/echipa/${nume_poza}1.jpg`);
	const style = hov
		? { filter: "brightness(1.1)", width: "100%" }
		: { filter: "brightness(1)", width: "100%" };

	return (
		<>
			<Grid item xs={12} md={4} lg={3}>
				<div
					className="membruEchipa"
					onMouseOver={() => setHov(`/echipa/${nume_poza}2.jpg`)}
					onMouseLeave={() => setHov(`/echipa/${nume_poza}1.jpg`)}>
					<img src={hov} style={{ width: "100%" }} />
					<img
						src={`/echipa/${nume_poza}2.jpg`}
						style={{ width: 0, height: 0, opacity: 0 }}
					/>
					<Typography
						color="textPrimary"
						variant="h6"
						style={{ fontSize: 18 }}
						component="h6">
						{nume}
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						component="strong"
						style={{ fontSize: 14 }}
						gutterBottom>
						{rank}
					</Typography>
					<div className="contact">
						<Typography
							color="textSecondary"
							variant="body2"
							component="strong"
							gutterBottom>
							{telefon} &middot; {email}
						</Typography>
					</div>
				</div>
			</Grid>
		</>
	);
};

const BCE = [
	// {
	// 	nume: "Adrian-Alexandru BREHA",
	// 	functie: "Președinte OSUT",
	// 	telefon: "0748322663",
	// 	mail: "adrian@osut.ro",
	// 	poza: "breha",
	// },
	{
		nume: "Patricia VĂLEANU",
		functie: "Vicepreședinte organizare internă și proiecte",
		telefon: "0769 616 250",
		mail: "patricia.valeanu@osut.ro",
		poza: "p2",
	},
	{
		nume: "Andreea-Raluca ARGEȘEANU",
		functie: "Vicepreședinte reprezentare",
		telefon: "0746 036 096",
		mail: "andreea.argeseanu@osut.ro",
		poza: "andreea",
	},
	{
		nume: "Diana-Loredana IUGA",
		functie: "Secretar General",
		telefon: "0743 914 800",
		mail: "diana@osut.ro",
		poza: "diana_mare",
	},
	{
		nume: "Darius-Dragoș ȚEPERDEL",
		functie: "Coordonator Resurse Umane (HR)",
		telefon: "0726 062 020",
		mail: "darius@osut.ro",
		poza: "darius_teperdel",
	},
	{
		nume: "Marcus MAN",
		functie: "Coordonator Social-Educaţional-Cercetare (S.E.C.)",
		telefon: "",
		mail: "",
		poza: "Marcus",
	},
	{
		nume: "Emilian-Andrei BOGDAN",
		functie: "Coordonator IT și Logistică (IT&L)",
		telefon: "0752 947 703",
		mail: "emilian@osut.ro",
		poza: "Emilian",
	},
	{
		nume: "Nelea ANGHELEANU",
		functie: "Coordonator Fundraising (FR)",
		telefon: "0732 566 663",
		mail: "nelea@osut.ro",
		poza: "neli",
	},
	{
		nume: "Hari-Bogdan RAICU",
		functie: "Coordonator Imagine",
		telefon: "0748 536 317",
		mail: "hari@osut.ro",
		poza: "hari",
	},
	{
		nume: "Roxana MATEI",
		functie: "Coordonator Relații Publice (PR)",
		telefon: "0756 775 685",
		mail: "cristina@osut.ro",
		poza: "Roxana",
	},

	{
		nume: "Ionela-Luiza MARINESCU",
		functie: "Cenzor OSUT",
		telefon: "0756 775 685",
		mail: "ionela@osut.ro",
		poza: "Oana",
	},
	{
		nume: "Mădălina-Elena PENCIUC",
		functie: "Cenzor OSUT",
		telefon: "0724 441 884 ",
		mail: "madalina@osut.ro",
		poza: "Mada",
	},
];

const Echipa = () => {
	return (
		<>
			<Grid
				container
				direction="row"
				justify="flex-start"
				spacing={4}
				alignItems="stretch">
				<Grid item xs={12} md={12} style={{ position: "relative" }}>
					<div id="descEchipa">
						<Typography
							color="textPrimary"
							variant="h3"
							component="h3"
							gutterBottom>
							Echipa
						</Typography>
						<Typography
							color="textSecondary"
							variant="body1"
							component="p"
							style={{ maxWidth: "70ch", marginBottom: 40 }}>
							Aceștia suntem noi, echipa Biroului de Conducere Extins din
							mandatul actual. Ne aflăm aici doar pentru că pe parcursul
							istoriei organizației, starea de spirit s-a transmis din generație
							în generație, fiecare având un lider curajos.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} md={12}>
					<Grid container spacing={4} direction="row" justify="flex-start">
						{BCE.map((item) => (
							<>
								<MembruEchipa
									key={item.mail}
									nume_poza={item.poza}
									nume={item.nume}
									rank={item.functie}
									telefon={item.telefon}
									mail={item.mail}
								/>
							</>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
export default Echipa;
