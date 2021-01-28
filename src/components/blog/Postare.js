import Singlet from "./Singlet";
import React from "react";
import { useParams } from "react-router-dom";

const Postare = (props) => {
	let { id } = useParams();
	return <Singlet key={id} post_id={id} />;
};
export default Postare;
