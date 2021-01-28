import React, { useState } from "react";
import "./cookies.css";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import pozaCookie from "../../img/cookie.png";
const Cookies = () => {
	const [visible, setVisible] = useState(
		localStorage.getItem("AcceptCookies") === "true" ? false : true
	);

	if (visible) {
		return (
			<>
				<div className="cookie-message" style={{ display: "visible" }}>
					<img alt="Cookie" src={pozaCookie} />
					<span className="text">
						Folosim cookies pentru a-ți oferi o experiență cât mai plăcută.
						Navigând în continuare, vă exprimați acordul asupra folosirii
						acestora. Poți citi mai multe <a href="/cookies">aici</a>.
					</span>
					<div
						className="close"
						onClick={() => {
							setVisible(false);
							localStorage.setItem("AcceptCookies", "true");
						}}>
						<IconButton size="medium" color="primary">
							<CheckIcon fontSize="default" />
						</IconButton>
					</div>
				</div>
			</>
		);
	} else return <></>;
};
export default Cookies;
