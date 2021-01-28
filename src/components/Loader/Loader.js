import React from "react";
import "./Loader.css";
const Loader = ({ type }) => {
	if (type === "dots") {
		return (
			<div class="loading">
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	} else if (type === "spin") {
		return <div class="donut"></div>;
	} else if (type == "ripple") {
		return (
			<div class="multi-ripple">
				<div></div>
				<div></div>
			</div>
		);
	} else if (type == "fancy") {
		return (
			<div class="fancy-spinner">
				<div class="ring"></div>
				<div class="ring"></div>
				<div class="dot"></div>
			</div>
		);
	} else {
		return (
			<div class="loading">
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
};
export default Loader;
