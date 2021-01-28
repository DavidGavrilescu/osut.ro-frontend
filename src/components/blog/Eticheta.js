import React from "react";
import Typography from "@material-ui/core/Typography";

import "./etichete.css";
const Eticheta = ({ denumire, small = false }) => {
	if (small) {
		return (
			<>
				<Typography
					className="tag_mic"
					color="textSecondary"
					variant="body2"
					component="span">
					{denumire}
				</Typography>
			</>
		);
	} else {
		return (
			<>
				<Typography
					className="tag"
					color="textSecondary"
					variant="body2"
					component="span">
					{denumire}
				</Typography>
			</>
		);
	}
};

export default Eticheta;
