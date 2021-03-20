import React from "react";
import { Grid } from "@material-ui/core";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

const presedinti = [
	{
		nr: 1,
		nume: "Zsolt Ferencz",
		inceput: "Martie 1990",
		final: "Septembrie 1990",
	},
	{
		nr: 2,
		nume: "Claudiu Meissner",
		inceput: "Septembrie 1990",
		final: "Mai 1991",
	},
	{
		nr: 3,
		nume: "Marius Lobază",
		inceput: "Mai 1991",
		final: "Mai 1992",
	},
	{
		nr: 4,
		nume: "Alin Andrei Gorșcovoz",
		inceput: "Mai 1992",
		final: "Mai 1993",
	},
	{
		nr: 5,
		nume: "Doru Creț",
		inceput: "Mai 1993",
		final: "Mai 1995",
	},
	{
		nr: 6,
		nume: "Tiberiu Giucă",
		inceput: "Mai 1995",
		final: "Mai 1996",
	},
	{
		nr: 7,
		nume: "Ovidiu Ciocan",
		inceput: "Mai 1996",
		final: "Mai 1997",
	},
	{
		nr: 8,
		nume: "Dan Lazea",
		inceput: "Mai 1997",
		final: "Mai 1998",
	},
	{
		nr: 9,
		nume: "Florin Godean",
		inceput: "Mai 1998",
		final: "Mai 1999",
	},
	{
		nr: 10,
		nume: "Cornel Huzău",
		inceput: "Mai 1999",
		final: "Mai 2001",
	},
	{
		nr: 11,
		nume: "Felix Toma",
		inceput: "Mai 2001",
		final: "Mai 2001",
	},
	{
		nr: 12,
		nume: "Ciprian Ionuț Baciu",
		inceput: "Mai 2002",
		final: "Iunie 2003",
	},
	{
		nr: 13,
		nume: "Matei Stoica",
		inceput: "Iunie 2003",
		final: "Februarie 2004",
	},
	{
		nr: 14,
		nume: "Laurențiu Nicolae Georgescu",
		inceput: "Februarie 2004",
		final: "Mai 2005",
	},
	{
		nr: 15,
		nume: "Viorel Proteasa",
		inceput: "Mai 2005",
		final: "Mai 2006",
	},
	{
		nr: 16,
		nume: "Vlad Petcu",
		inceput: "Mai 2006",
		final: "Mai 2008",
	},
	{
		nr: 17,
		nume: "Robert Santa",
		inceput: "Mai 2008",
		final: "Mai 2009",
	},
	{
		nr: 18,
		nume: "Ioan Pleș",
		inceput: "Mai 2009",
		final: "Mai 2010",
	},
	{
		nr: 19,
		nume: "Cristian Andrei Panțir",
		inceput: "Mai 2010",
		final: "Mai 2011",
	},
	{
		nr: 20,
		nume: "Anca Maria Babeț",
		inceput: "Mai 2011",
		final: "Mai 2013",
	},
	{
		nr: 21,
		nume: "Vlad-Dan Cherecheș",
		inceput: "Mai 2013",
		final: "Iunie 2015",
	},
	{
		nr: 22,
		nume: "Bogdan-Petru Crișan",
		inceput: "Iunie 2015",
		final: "Iunie 2017",
	},
	{
		nr: 23,
		nume: "Ovidiu-Marian Boldor",
		inceput: "Iunie 2017",
		final: "Mai 2019",
	},
	{
		nr: 24,
		nume: "Bianca-Denisa Cernușcă",
		inceput: "Mai 2019",
		final: "Iunie 2020",
	},
	{
		nr: 25,
		nume: "Adrian-Alexandru Breha",
		inceput: "Iunie 2020",
		final: "Prezent",
	},
];
const Presedinte = ({ perioada, prenume, nume }) => (
	<Grid item xs={6} md={3} lg={2}>
		<Typography color="textPrimary" variant="h6" component="h6">
			{prenume}&nbsp;
			<span
				style={{
					textTransform: "uppercase",
				}}>
				<Typography color="textPrimary" variant="h6" component="span">
					{nume}
				</Typography>
			</span>
		</Typography>
		<Typography
			color="textSecondary"
			variant="body2"
			component="h6"
			className="perioada">
			{perioada}
		</Typography>
	</Grid>
);
const Presedinti = () => {
	return (
		<div id="presedinti">
			<Grid
				container
				direction="row"
				justify="flex-start"
				spacing={4}
				alignItems="stretch">
				<Grid item xs={12} md={12}>
					<Typography
						color="textPrimary"
						variant="h2"
						component="h3"
						gutterBottom>
						Istoric presedinti???
					</Typography>
				</Grid>

				{presedinti.map((presed) => (
					<Presedinte perioada="martie-septembrie 1990" nume={presed.nume} />
				))}
			</Grid>
		</div>
	);
};

export default Presedinti;
