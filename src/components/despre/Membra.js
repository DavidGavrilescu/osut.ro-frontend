import React from "react";
import Grid from "@material-ui/core/grid";
import mtsLight from "../../img/despre/mtsLight.png";
import mtsDark from "../../img/despre/mtsDark.png";
import anosrLight from "../../img/despre/anosrLight.png";
import anosrDark from "../../img/despre/anosrDark.png";
import fittDark from "../../img/despre/fittDark.png";
import fittLight from "../../img/despre/fittLight.png";
import tmDark from "../../img/despre/tmDark.png";
import tmLight from "../../img/despre/tmLight.png";
import Typography from "@material-ui/core/Typography";
const DynamicImage = ({ darkmode, light, dark, style = {} }) => (
	<>
		<Grid item xs={6} md={3} style={{ textAlign: "center" }}>
			{darkmode ? (
				<img src={dark} className="membra" style={style} />
			) : (
				<img src={light} className="membra" style={style} />
			)}
		</Grid>
	</>
);
const Membra = ({ darkmode }) => {
	return (
		<Grid item xs={12} md={12}>
			<Typography
				color="textSecondary"
				style={{
					textAlign: "center",
					fontWeight: 200,
					opacity: 1,
					textTransform: "uppercase",
				}}
				variant="body1"
				component="p"
				gutterBottom>
				Facem parte din:
			</Typography>
			<Grid container>
				<DynamicImage darkmode={darkmode} light={anosrLight} dark={anosrDark} />
				<DynamicImage darkmode={darkmode} light={fittLight} dark={fittDark} />
				<DynamicImage darkmode={darkmode} light={mtsLight} dark={mtsDark} />
				<DynamicImage darkmode={darkmode} light={tmLight} dark={tmDark} />
			</Grid>
		</Grid>
	);
};
export default Membra;
