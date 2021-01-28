import React from "react";
import Document from "../docs/Document";

const Atasamente = ({ array }) => {
	return (
		<div
			id="atasamente"
			style={{
				margin: "0px",
				marginTop: 0,
				padding: "5px 10px",
				paddingBottom: 20,
			}}>
			{array.map((document) => (
				<>
					<Document
						key={document.url}
						style={{ marginBottom: "10px" }}
						fullWidth={true}
						nume={document.denumire}
						categorie=""
						dimensiune={document.filesize}
						tip={document.tip_fisier}
						link={document.url}
					/>
				</>
			))}
		</div>
	);
};

export default Atasamente;
