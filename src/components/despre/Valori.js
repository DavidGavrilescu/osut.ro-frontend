import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/grid";
import "./despre.css";
import perseverenta from "../../img/perseverenta.png";
/* :> */
const Valoare = ({ titlu, continut, poza, poza2 = "" }) => {
	const [hovered, setHovered] = useState(false);
	return (
		<>
			<Grid
				item
				xs={12}
				md={6}
				lg={4}
				className="valori"
				onMouseOver={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}>
				<div className="whitebg">
					{poza2 !== "" ? (
						hovered ? (
							<img src={poza2} style={{ maxWidth: "65px", marginBottom: 10 }} />
						) : (
							<img src={poza} style={{ maxWidth: "65px", marginBottom: 10 }} />
						)
					) : (
						<img src={poza} style={{ maxWidth: "65px", marginBottom: 10 }} />
					)}
					<Typography color="textPrimary" variant="h6" component="div">
						{titlu}
					</Typography>

					<Typography
						color="textSecondary"
						variant="body2"
						component="div"
						gutterBottom>
						{continut}
					</Typography>
				</div>
			</Grid>
		</>
	);
};
const Valori = () => {
	return (
		<>
			<Grid
				container
				direction="row"
				justify="flex-start"
				spacing={4}
				alignItems="stretch">
				<Grid item xs={12} md={12}>
					<Typography
						color="textPrimary"
						variant="h3"
						component="h3"
						gutterBottom>
						Valori
					</Typography>
					<Typography
						color="textSecondary"
						variant="body1"
						component="p"
						gutterBottom
						style={{ marginBottom: "20px", maxWidth: "75ch" }}>
						Valorile noastre reprezintă unele dintre cele mai importante
						direcții după care ne ghidăm atunci când ne desfășurăm activitatea.
						{/* Le puteți descoperi în secțiunea de mai jos: */}
					</Typography>
				</Grid>

				<Valoare
					titlu="Responsabilitate"
					poza="https://static.thenounproject.com/png/3031204-200.png"
					continut={
						<>
							<p>
								OSUT nu este doar despre noi, ci despre cât îi ajutăm pe
								ceilalți și avem responsabilitatea să oferim tot ce e mai bun
								din noi pentru studenți.
							</p>
						</>
					}
				/>
				<Valoare
					titlu="Muncă în echipă"
					poza="https://static.thenounproject.com/png/1347720-200.png"
					continut={
						<>
							<p>
								Suntem o familie, muncim cot la cot pentru a ne atinge
								obiectivele propuse și ne asigurăm că nimeni nu este lăsat în
								urmă.
							</p>
						</>
					}
				/>

				<Valoare
					titlu="Toleranţă"
					poza="https://cdn4.iconfinder.com/data/icons/miscellaneous-52-solid/128/inclusion_tolerance_supportive_gathering_corporate_collaboration-512.png"
					continut={
						<>
							<p>
								Nu discriminăm pe criterii de vârstă, de avere, de convingeri
								politice, de naționalitate, de rasă, de sex, de religie sau de
								orientare sexuală.
							</p>
						</>
					}
				/>
				<Valoare
					titlu="Perseverenţă"
					poza="https://static.thenounproject.com/png/2518882-200.png"
					poza2={perseverenta}
					continut={
						<>
							<p>
								Nu renunțăm niciodată, fiindcă iubim ceea ce facem și știm să
								învățăm din greșelile noastre.
							</p>
						</>
					}
				/>
				<Valoare
					titlu="Implicare"
					poza="https://cdn4.iconfinder.com/data/icons/thin-games-fun/24/thin-1393_puzzle_game_thinking-512.png"
					continut={
						<>
							<p>
								Fiecare moment din viața noastră este o experiență nouă și
								suntem dispuși să luptăm pentru nevoile colegilor noștri.
							</p>
						</>
					}
				/>
				<Valoare
					titlu="Solidaritate"
					poza="https://cdn3.iconfinder.com/data/icons/peace-3/64/Solidarity-help-hands-gestures-512.png"
					continut={
						<>
							<p>
								Altruismul ne definește și ne unește în acțiunile pe care le
								desfășurăm, întrucât credem în valorile voluntariatului.
							</p>
						</>
					}
				/>
			</Grid>
		</>
	);
};
export default Valori;
