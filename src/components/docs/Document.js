import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import React from "react";
import Grid from "@material-ui/core/grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./docs.css";
const useStyles = makeStyles({
	root: {
		borderRadius: "0px",
		margin: 0,
	},
});

export default function Document({
	fullWidth = false,
	nume,
	link,
	categorie,
	culoare_link,
	dimensiune,
	tip = "pdf",
}) {
	const classes = useStyles();

	return (
		<>
			<Grid item xs={12} sm={12} md={fullWidth ? 12 : 6}>
				<div className="Doc">
					<a href={"https://api.osut.ro/media/docs/" + link}>
						<div className="Document unselectable">
							{/* <PictureAsPdfIcon color="default" className="iconpdf" /> */}
							<Typography
								color="textPrimary"
								variant="body1"
								component="div"
								style={{
									textTransform: "none",
									fontWeight: 400,
								}}>
								{nume}
								<div className="smaller">
									<span className="categorie">{tip}</span> &middot;&nbsp;
									<span>{dimensiune}</span>
								</div>
							</Typography>
						</div>
					</a>
				</div>
			</Grid>
		</>
	);
}
