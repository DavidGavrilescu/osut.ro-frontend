import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

const LinkMedia = ({
	an,
	titlu,
	sursa,
	data,
	categorie,
	url,
	isVisible,
	setAn,
}) => {
	useEffect(() => {
		if (isVisible) setAn(an);
	}, [isVisible]);
	return (
		<div className="link_media">
			<a href={url} rel="nofollow" target="_blank">
				<Typography
					color="textPrimary"
					variant="h5"
					component="h6"
					style={{
						maxWidth: "85ch",
						opacity: 0.9,
						lineHeight: "120%",
						marginBottom: 8,
					}}>
					{titlu}
				</Typography>
				<Typography color="textSecondary" variant="body1" component="h6">
					sursa: {sursa}
					{/* , {data} */}
				</Typography>
			</a>
		</div>
	);
};

export default LinkMedia;
