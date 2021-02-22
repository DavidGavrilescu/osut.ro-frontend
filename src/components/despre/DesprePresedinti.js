import React from "react";
import Grid from "@material-ui/core/grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Submenu } from "./Despre";
import Helmet from 'react-helmet';


const Presedinte = ({ perioada, prenume, nume }) => (
	<Grid item xs={12} md={6} lg={4}>
		<div className="card_presedinte">
			<Typography color="textPrimary" variant="h6" component="h6">
				{prenume}&nbsp;
				<span
					style={{
						textTransform: "uppercase",
					}}>
					<Typography
						color="textPrimary"
						variant="h6"
						component="span"
						className="numeFamilie">
						{nume}
					</Typography>
				</span>
			</Typography>
			<Typography color="textSecondary" variant="body2" component="h6">
				{perioada}
			</Typography>
		</div>
	</Grid>
);
const presedinti = [
	{
		nr: 1,
		nume: "Zsolt ",
		nume2: "Ferencz",
		inceput: "Martie 1990",
		final: "Septembrie 1990",
	},
	{
		nr: 2,
		nume: "Claudiu ",
		nume2: "Meissner",
		inceput: "Septembrie 1990",
		final: "Mai 1991",
	},
	{
		nr: 3,
		nume: "Marius ",
		nume2: "Lobază",
		inceput: "Mai 1991",
		final: "Mai 1992",
	},
	{
		nr: 4,
		nume: "Alin Andrei ",
		nume2: "Gorșcovoz",
		inceput: "Mai 1992",
		final: "Mai 1993",
	},
	{
		nr: 5,
		nume: "Doru ",
		nume2: "Creț",
		inceput: "Mai 1993",
		final: "Mai 1995",
	},
	{
		nr: 6,
		nume: "Tiberiu ",
		nume2: "Giucă",
		inceput: "Mai 1995",
		final: "Mai 1996",
	},
	{
		nr: 7,
		nume: "Ovidiu ",
		nume2: "Ciocan",
		inceput: "Mai 1996",
		final: "Mai 1997",
	},
	{
		nr: 8,
		nume: "Dan ",
		nume2: "Lazea",
		inceput: "Mai 1997",
		final: "Mai 1998",
	},
	{
		nr: 9,
		nume: "Florin ",
		nume2: "Godean",
		inceput: "Mai 1998",
		final: "Mai 1999",
	},
	{
		nr: 10,
		nume: "Cornel ",
		nume2: "Huzău",
		inceput: "Mai 1999",
		final: "Mai 2001",
	},
	{
		nr: 11,
		nume: "Felix ",
		nume2: "Toma",
		inceput: "Mai 2001",
		final: "Mai 2001",
	},
	{
		nr: 12,
		nume: "Ciprian Ionuț ",
		nume2: "Baciu",
		inceput: "Mai 2002",
		final: "Iunie 2003",
	},
	{
		nr: 13,
		nume: "Matei ",
		nume2: "Stoica",
		inceput: "Iunie 2003",
		final: "Februarie 2004",
	},
	{
		nr: 14,
		nume: "Laurențiu Nicolae ",
		nume2: "Georgescu",
		inceput: "Februarie 2004",
		final: "Mai 2005",
	},
	{
		nr: 15,
		nume: "Viorel ",
		nume2: "Proteasa",
		inceput: "Mai 2005",
		final: "Mai 2006",
	},
	{
		nr: 16,
		nume: "Vlad ",
		nume2: "Petcu",
		inceput: "Mai 2006",
		final: "Mai 2008",
	},
	{
		nr: 17,
		nume: "Robert ",
		nume2: "Santa",
		inceput: "Mai 2008",
		final: "Mai 2009",
	},
	{
		nr: 18,
		nume: "Ioan ",
		nume2: "Pleș",
		inceput: "Mai 2009",
		final: "Mai 2010",
	},
	{
		nr: 19,
		nume: "Cristian Andrei ",
		nume2: "Panțir",
		inceput: "Mai 2010",
		final: "Mai 2011",
	},
	{
		nr: 20,
		nume: "Anca Maria ",
		nume2: "Babeț",
		inceput: "Mai 2011",
		final: "Mai 2013",
	},
	{
		nr: 21,
		nume: "Vlad-Dan ",
		nume2: "Cherecheș",
		inceput: "Mai 2013",
		final: "Iunie 2015",
	},
	{
		nr: 22,
		nume: "Bogdan-Petru ",
		nume2: "Crișan",
		inceput: "Iunie 2015",
		final: "Iunie 2017",
	},
	{
		nr: 23,
		nume: "Ovidiu-Marian ",
		nume2: "Boldor",
		inceput: "Iunie 2017",
		final: "Mai 2019",
	},
	{
		nr: 24,
		nume: "Bianca-Denisa ",
		nume2: "Cernușcă",
		inceput: "Mai 2019",
		final: "Iunie 2020",
	},
	{
		nr: 25,
		nume: "Adrian-Alexandru",
		nume2: "Breha",
		inceput: "Iunie 2020",
		final: "Ianuarie 2021",
	},
].reverse();

export default function DesprePresedinti() {
	return (

		<>
		
		<Helmet>
				<title>{`Istoric președinți - OSUT`}</title>
				<meta name="description" content="Detalii despre președinții Organizației Studenților din Universitatea de Vest din Timișoara." />
			</Helmet>
		<div id="scurt-istoric">
			<Submenu page={3} />
			<Container maxWidth="lg">
				<div className="whitebg">
					<Grid
						container
						spacing={3}
						direction="row"
						justify="flex-start"
						alignItems="flex-start"
						style={{ marginBottom: "20px" }}>
						<Grid item xs={12} md={12}>
							<Typography
								color="textPrimary"
								variant="h4"
								component="blockquote"
								gutterBottom>
								Președinți OSUT
							</Typography>
							<Typography
								color="textSecondary"
								variant="body1"
								component="blockquote"
								style={{ maxWidth: "65ch" }}
								gutterBottom>
								{/* Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s */}
							</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						spacing={3}
						direction="row"
						justify="space-between"
						alignItems="flex-start">
						{presedinti.map((presed) => (
							<Presedinte
								perioada={`${presed.inceput}-${presed.final}`}
								prenume={presed.nume}
								nume={presed.nume2}
							/>
						))}
					</Grid>
				</div>
			</Container>
		</div>
		</>
	);
}
