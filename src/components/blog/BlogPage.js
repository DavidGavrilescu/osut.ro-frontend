import React, { useState, useEffect } from "react";
import Post from "./Post";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import { Toolbar } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loader from "../Loader/Loader";
import Helmet from "react-helmet";
import { incarcaArticoleBlog } from "../reuse/API";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 12,
		boxShadow: "none",
		paddingTop: "10px",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
}));

const BlogPage = () => {
	const { id, categ } = useParams();

	const classes = useStyles();
	const [items, setItems] = useState([]);
	const [categorie, setCategorie] = useState("toate");
	const [categorii, setCategorii] = useState([]);

	const [view, setView] = useState("grid");
	const [numarPagini, setNumarPagini] = useState(null);

	const [page, setPage] = useState(id ? id : 1);
	const [filtru, setFiltru] = useState(false);
	const [categorieSelectata, setCategorieSelectata] = useState(
		categ !== undefined ? categ : "toate"
	);

	const history = useHistory();

	const handleChange = (event, value) => {
		setPage(value);
		history.push("/blog/" + value + "/" + categorie);
	};
	const handleChangeCategorie = (event, value) => {
		setCategorieSelectata(event.target.value);
		history.push("/blog/" + page + "/" + event.target.value);
	};

	useEffect(() => {
		incarcaArticoleBlog(
			setNumarPagini,
			setItems,
			setCategorii,
			page,
			categorieSelectata
		);
	}, [page, categorieSelectata]);

	return (
		<>
			<Helmet>
				<title>{`Articole - OSUT`}</title>
				<meta
					name="description"
					content="Ultimele noutăți și oportunități pentru studenții UVT și nu numai."
				/>
			</Helmet>
			<div className={classes.root + " transition-item list-page"}>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={4}
						direction="row"
						alignItems="stretch"
						alignContent="stretch">
						<Grid item md={4} xs={6}>
							<Typography
								color="textPrimary"
								variant="h4"
								component="h2"
								style={{ textTransform: "none", marginTop: "10px" }}>
								Blog
							</Typography>
						</Grid>
						<Grid item md={8} xs={6}>
							<Toolbar
								disableGutters={true}
								variant="regular"
								style={{ float: "right" }}>
								<Grid item xs={12} style={{ marginTop: "-15px" }}>
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
								</Grid>
							</Toolbar>
						</Grid>
						{items.length == [] && (
							<Grid item xs={12} style={{ textAlign: "center" }}>
								<Loader />
								Se încarcă...
							</Grid>
						)}
						{items.length !== [] &&
							items.map((item) => (
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
					</Grid>
					<Grid xs={12} direction="column" justify="center">
						{/* <Typography>Page: {page}</Typography> */}
						<Pagination
							siblingCount={2}
							boundaryCount={4}
							defaultPage={1}
							count={numarPagini}
							page={id !== undefined ? parseInt(id) : parseInt(page)}
							onChange={handleChange}
							style={{
								margin: "60px auto",
								textAlign: "center",
								display: "flex",
								justifyContent: "center",
							}}
						/>
					</Grid>
				</Container>
			</div>
		</>
	);
};

export default BlogPage;
