import React, { useState, useEffect } from "react";
import Post from "./Post";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { incarcaArticoleBlog } from "../reuse/API";
import Loader from "../Loader/Loader";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 12,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
}));
const Blog = ({ items, categorii }) => {
	const classes = useStyles();
	const [categorie, setCategorie] = useState("toate");
	const [articole, setArticole] = useState(items);
	const [per_page, setPer_page] = useState(6);
	const [items2, setItems] = useState([]);
	const [categorii2, setCategorii] = useState([]);

	const [view, setView] = useState("grid");
	const [numarPagini, setNumarPagini] = useState(null);

	const [page, setPage] = useState(1);
	const [filtru, setFiltru] = useState(false);
	const [categorieSelectata, setCategorieSelectata] = useState("toate");
	const handleChange = (event) => {
		setCategorie(event.target.value);
	};
	const handleChangeCategorie = (event, value) => {
		setCategorieSelectata(event.target.value);
	};
	useEffect(() => {
		incarcaArticoleBlog(
			setNumarPagini,
			setItems,
			setCategorii,
			page,
			categorieSelectata
		);
	}, [categorieSelectata]);

	return (
		<>
			<div className={classes.root}>
				<Grid container spacing={0} direction="row" justify="space-evenly">
					<Grid item md={6} xs={6}>
						<Typography
							color="textPrimary"
							variant="h4"
							component="h2"
							style={{ textTransform: "none" }}
							gutterBottom>
							Postări recente
						</Typography>
					</Grid>
					<Grid item md={6} xs={6} style={{ textAlign: "right" }}>
						{/*<Tooltip title={"Filtreaza dupa categorie"} placement="left">*/}
						<FormControl style={{ textAlign: "right" }}>
							<Select
								value={categorieSelectata}
								onChange={handleChangeCategorie}
								disableUnderline={true}>
								<MenuItem value={"toate"}>Toate categoriile</MenuItem>
								{categorii !== [] &&
									categorii.map((categorie) => (
										<MenuItem
											key={categorie.id_categorie}
											value={categorie.id_categorie}>
											{categorie.denumire_categorie}
										</MenuItem>
									))}
							</Select>
						</FormControl>
						{/*</Tooltip>*/}
					</Grid>
				</Grid>

				<Grid
					container
					spacing={4}
					direction="row"
					alignItems="stretch"
					alignContent="stretch">
					{items2.length == [] && (
						<Grid item xs={12} style={{ textAlign: "center" }}>
							<Loader />
							Se încarcă...
						</Grid>
					)}
					{items2.length !== [] &&
						items2.map((item) => (
							<Grid
								key={item.id}
								item
								xs={12}
								sm={6}
								lg={4}
								className={classes.card}
								style={{ marginTop: "10px" }}>
								<Post
									preview_video={item.preview_video}
									video={item.video}
									key={item.id}
									type="short"
									titlu={item.titlu}
									descriere_scurta={item.descriere_scurta}
									id_autor={item.autor}
									continut={item.continut}
									id={item.id}
									denumire_categorie={item.denumire_categorie}
									poza={item.poza}
									timestamp={item.timestamp}
									text={false}
									culoare_categorie={item.culoare_categorie}
									urlfriendly={item.urlfriendly}
								/>
							</Grid>
						))}

					<Grid item md={12} style={{ textAlign: "right" }}>
						<Link to="/blog/2/toate" style={{ textDecoration: "none" }}>
							<Button
								color="default"
								className={classes.button}
								endIcon={<TrendingFlatIcon />}>
								Mai multe postări
							</Button>
						</Link>
					</Grid>
				</Grid>
			</div>
		</>
	);
};
export default Blog;
