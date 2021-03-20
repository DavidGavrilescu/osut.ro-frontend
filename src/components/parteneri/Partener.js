import React from "react";
import Image from "material-ui-image";
import { Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const Partener = ({ img, imgdark, url, denumire, darkmode }) => {
	console.log(denumire);
	return (
		<>
			<Grid item xs={6} sm={4} md={2}>
				<a href={url} target="_blank" follow="nofollow">
					{darkmode ? (
						<Tooltip title={denumire} placement="top">
							<Image
								src={imgdark}
								style={{ borderRadius: "3px" }}
								color="rgba(255,255,255,.0)"
							/>
						</Tooltip>
					) : (
						<Tooltip title={denumire} placement="top">
							<Image
								src={img}
								style={{ borderRadius: "3px" }}
								color="rgba(255,255,255,.0)"
							/>
						</Tooltip>
					)}
				</a>
			</Grid>
		</>
	);
};

export default Partener;
