import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/grid";
import "./despre.css";
import { makeStyles } from "@material-ui/core/styles";
import ProiecteOSUT from "./ProiecteOSUT";
import Membra from "./Membra";
import Echipa from "./Echipa";
import Valori from "./Valori";
import Slider from "react-slick";
import "./slick.min.css";
import "./slick-theme.min.css";
import Tooltip from "@material-ui/core/Tooltip";
import Helmet from "react-helmet";
import gsap, { Power2 } from "gsap";

const Slide = ({ an, text }) => {
	return (
		<>
			<div className="slide" style={{ borderRadius: 16 }}>
				<section>
					<Typography variant="h4">{an}</Typography>
					<div id="text">
						<Typography variant="h5" component="h6">
							{text}
						</Typography>
					</div>
				</section>
			</div>
		</>
	);
};
const Timeline = ({}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<>
			<Grid item xs={12} id="istoric">
				<Typography variant="h3" style={{ marginBottom: 30 }}>
					Scurt istoric
				</Typography>
				<div id="istoricSlider">
					<Slider {...settings}>
						<Slide
							an="1990"
							text="În 27 martie 1990 s-a înființat OSUT, an în care și-a câștigat personalitatea juridică."
						/>
						<Slide
							an="1991"
							text="OSUT are iniţiativa introducerii burselor sociale în Universitatea de Vest din Timişoara şi facilitează accesul studenţilor la tabere cu preţ redus."
						/>
						<Slide
							an="1992"
							text="OSUT organizează un manifest pentru libera exprimare: primul festival studenţesc din România – StudentFest - ediţia I - tema Punctul 8. OSUT coordonează distribuirea de medicamente la preţ accesibil studenţilor, iar banii obţinuţi sunt destinaţi burselor sociale."
						/>
						<Slide
							an="1993"
							text="OSUT are iniţiativa creării unei comisii studenţeşti în învăţământ, cu propunerea ca aceasta să aibă rol în stabilirea disciplinelor facultative şi să susţină necesitatea cercurilor profesionale."
						/>
						<Slide
							an="1994"
							text="OSUT organizează Laboratorul teatral Timişoara ’94 şi Crosul Oraşului Martir Timişoara. Pregăteşte un simpozion de psihologie şi acţiuni umanitare la casele de copii."
						/>
						<Slide
							an="1995"
							text="În octombrie, OSUT participă la cea mai importantă grevă naţională a studenţilor, în urma căreia se modifică Legea Învăţământului şi se întemeiază ANOSR."
						/>
						<Slide
							an="1996"
							text="OSUT, împreună cu celelalte organizaţii studenţeşti timişorene, se opune transformării Spitalului Studenţesc în clinică particulară de cardiologie."
						/>
						<Slide
							an="1997"
							text="OSUT organizează în martie prima ediţie a Underground Timișoara Festival, care promovează alternativele la cultura majoritară."
						/>
						<Slide
							an="1998"
							text="OSUT iniţiază TMBase – eveniment dedicat muzicii electronice, primul festival de acest gen din ţară şi cel mai important barometru al tendinţelor muzicale urbane din România."
						/>
						<Slide
							an="1999"
							text="OSUT, alături de alți 5.000 de studenţi din organizaţiile studenţeşti timişorene ies în stradă la final de an pentru a cere majorarea burselor, reduceri la transport şi condiţii decente de cazare în cămine."
						/>
						<Slide
							an="2000"
							text="OSUT înfiinţează CIS – Centrul de Informare şi Documentare pentru studenţii din Facultatea de Ştiinţe Economice, care stă şi azi la dispoziţia studenţilor în căminul 15, etajul IV."
						/>
						<Slide
							an="2001"
							text="OSUT se ocupă de implementarea programului Euro 26 în Timişoara. Se desfăşoară ediţia aniversară StudentFest – 10 ani, cu tema SupraFaţă."
						/>
						<Slide
							an="2002"
							text="OSUT devine membră a Alianţei Naţionale a Organizaţiilor Studenţeşti din România (ANOSR), prima şi cea mai importantă federaţie studenţească din ţară."
						/>
						<Slide
							an="2003"
							text="Zeitgeist. Anii trec, Festul rămâne. Tema celei de-a XII-a ediţii de StudentFest a adus alături ideile a cel puţin 100 de studenţi artişti din ţară şi de peste hotare."
						/>
						<Slide
							an="2004"
							text="OSUT iniţiază SportFest, un îndemn la un stil de viaţă sănătos, eveniment realizat în colaborare cu Facultatea de Educaţie Fizică şi Sport din UVT."
						/>
						<Slide
							an="2005"
							text="Viorel Preoteasa, preşedinte OSUT, devine primul membru al unei organizaţii studenţeşti din UVT ales preşedinte ANOSR şi singurul român membru în Comitetul Executiv ESIB."
						/>
						<Slide
							an="2006"
							text="În martie, OSUT creează ITFest pentru studenţii şi elevii pasionaţi de domeniul IT."
						/>
						<Slide
							an="2007"
							text="OSUT organizează în centrul Timişoarei “Înmormântarea libertăţii de exprimare”. "
						/>
						<Slide
							an="2008"
							text="Apare Xpune, prima revistă OSUT, redactată şi tipărită exclusiv prin eforturile studenţilor, distribuită lunar şi gratuit în UVT. OSUT atinge vârsta majoratului."
						/>
						<Slide
							an="2009"
							text="În al 19-lea an de existenţă, OSUT a organizat prima ediţie a proiectului Pierdut în Economie, destinat studenţilor de la Facultatea de Economie şi de Administrare a Afacerilor."
						/>
						<Slide
							an="2010"
							text="S-a lansat şi un nou proiect destinat pasionaţilor de literatură, Catharsis şi un proiect ce pune accent pe promovarea învăţământului centrat pe student, Dimensiunea social educaţională prin ochii studentului."
						/>
						<Slide
							an="2011"
							text="După încercările repetate ale organizațiilor studențești din România de a obține un statut transparent al drepturilor studenților, OSUT s-a hotărât să spună NU abuzului, așa că în data de 17 noiembrie, de Ziua Națională a Studentului, în fața UVT izbucnește protestul OSUT-iștilor."
						/>
						<Slide
							an="2012"
							text="OSUT s-a alăturat Asociației Timișoara Capitală Culturală Europeană 2021 ca organizație membră, cu drepturi depline."
						/>
						<Slide
							an="2013"
							text="În ciuda protestelor, a fost o perioadă propice dezvoltării proiectelor OSUT. West Summer University a realizat a treia ediție. Tot în 2013, OSUT demarează proiectul Democraţia în UVT, constând în organizarea alegerilor pentru studenţii reprezentanţi."
						/>
						<Slide
							an="2014"
							text="De asemenea, datorită demersurilor susținute de OSUT și ANOSR, bugetul pentru educaţie pentru anul 2014 a devenit de 3,4% din produsul intern brut."
						/>
						<Slide
							an="2015"
							text="OSUT a organizat și Forumul Organizațiilor Studențești din România 2015 (FOSR 2015), cel mai cel mai mare și important eveniment ANOSR, unde au fost aleși ca lideri reprezentanți la nivel național doi OSUT-iști."
						/>
						<Slide
							an="2016"
							text="Ediția din acest an a StudentFest, cu sloganul „Artă în timp”, avea să fie una mai spirituală în care s-a încercat sintetizarea a tot ceea ce înseamnă StudentFest pentru publicul timișorean."
						/>
						<Slide
							an="2017"
							text="De asemenea, spiritul civic a fost puternic în rândul OSUT-iștilor, participând la protestele faţă de intenţiile guvernului de modificare a Codului Penal."
						/>
						<Slide
							an="2018"
							text="A fost organizat evenimentul sportiv OSUTă de metri și campania care încuraja reducerea consumului de energie electrică, intitulată Ușide becul."
						/>
						<Slide
							an="2019"
							text="OSUT apără din nou drepturile studenților și împiedică o creștere nejustificată a taxei de reexaminare. 
							"
						/>
					</Slider>
					<section>
						<div className="wave"></div>
					</section>
				</div>
			</Grid>
		</>
	);
};
export const Submenu = () => {
	return <div></div>;
};

const Dep = ({ titlu, continut, poza = "" }) => {
	return (
		<Grid item xs={12} md={6} style={{ marginBottom: "0px" }}>
			<div className="whitebg departament">
				{poza && <img alt={titlu} src={poza} style={{ marginBottom: 10 }} />}
				<Typography
					color="textPrimary"
					variant="h5"
					component="h6"
					gutterBottom>
					{titlu}
				</Typography>
				<Typography
					color="textSecondary"
					variant="body1"
					component="p"
					gutterBottom
					dangerouslySetInnerHTML={{ __html: continut }}></Typography>
			</div>
		</Grid>
	);
};
const Departamente = () => {
	return (
		<>
			<Grid
				container
				direction="row"
				justify="flex-start"
				spacing={1}
				alignItems="stretch">
				<Grid item xs={12} md={12} style={{ position: "relative" }}>
					<div id="descEchipa">
						<Typography
							color="textPrimary"
							variant="h3"
							component="h3"
							gutterBottom>
							Departamente
						</Typography>
						<Typography
							color="textSecondary"
							variant="body1"
							component="p"
							style={{ marginBottom: 40, maxWidth: "70ch" }}
							gutterBottom>
							Pentru o eficientizare a modului de desfășurare a actului de
							voluntariat din organizație, aceasta este împărțită în șase
							departamente, fiecare pe un domeniu specific. Fiecare departament
							este coordonat de un responsabil.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 40 }}>
					<Grid container spacing={4} direction="row" justify="flex-start">
						<Dep
							titlu="Relații publice (PR)"
							poza="https://webstockreview.net/images/marketing-clipart-media-icon-9.png"
							continut="<ul>
				
					<li>Departamentul se ocupă cu promovarea a tot ce ține de organizație. Este responsabil de menținerea unei complexe activități pe conturile de social media prin content captivant și de calitate, dar în același timp cu scop educativ și informativ.</li>
					</ul>"
						/>
						<Dep
							titlu="Resurse umane (HR)"
							poza="https://image.flaticon.com/icons/png/512/1876/1876402.png"
							continut="<ul>
							<li>Departamentul organizează, împreună cu celelalte departamente, procesul de recrutare care se întâmplă în fiecare semestru și teambuildingul în care se consolidează relațiile dintre voluntari. </li>
					
					</ul>"
						/>
						<Dep
							titlu="IT și Logistică"
							poza="https://www.vippng.com/png/full/165-1654023_solution-icon-03-icono-de-paginas-web.png"
							continut="<ul>
					<li>Se ocupă de mentenanță şi dezvoltarea programelor software în vederea facilitării şi elaborării site-urilor organizației.</li>
					<li>Pe de altă parte, departamentul se ocupă de asigurarea și satisfacerea nevoilor logistice organizaționale. 
					</li>
					</ul>"
						/>
						<Dep
							titlu="Imagine"
							poza="https://image.flaticon.com/icons/png/512/2915/2915640.png"
							continut="<ul>
				
					<li>Se ocupă de crearea tuturor materialelor grafice ale organizației, atât fizice, cât și digitale. 
					Coordonatorul organizează diferite traininguri referitoare la cele mai folosite programe, precum Premiere, Photoshop și  Illustrator.
					
					</li>	
					</ul>"
						/>
						<Dep
							titlu="Social-Educațional-Cercetare (S.E.C.) "
							poza="https://i.pinimg.com/originals/ec/ff/cc/ecffccbdfb3381f5edf994d45913f737.png"
							continut="<ul>
					<li>În colaborare cu departamentele și Biroul de Conducere OSUT îndeplinește principala misiune a organizației - reprezentarea studențească. 
					</li>
					</ul>"
						/>
						<Dep
							titlu="Fundraising"
							poza="https://static.thenounproject.com/png/2321984-200.png"
							continut="<ul>
					<li>Se ocupă cu atragerea de fonduri în organizație.</li>
					<li>
					În același timp, membrii acestui departament stabilesc parteneriatele organizației și mențin legătura cu ei. 
					</li>
					</ul>"
						/>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
//<ProiecteOSUT />
const CineSuntem = () => {
	return (
		<>
			<Grid
				container
				spacing={0}
				direction="row"
				style={{ marginBottom: 0 }}
				justify="space-between"
				alignItems="flex-start">
				<Grid item xs={12} md={12}>
					<Typography
						color="textPrimary"
						variant="h2"
						component="h1"
						gutterBottom
						style={{
							maxWidth: "65ch",
							fontWeight: 800,
						}}>
						Cine suntem
					</Typography>
					<div className="whitebg" style={{ marginLeft: 0 }}>
						<Typography
							color="textSecondary"
							variant="body1"
							component="p"
							style={{
								maxWidth: "75ch",
								fontWeight: 400,
							}}>
							Organizaţia Studenţilor din Universitatea de Vest din Timişoara
							(OSUT) este singura organizaţie reprezentativă la nivelul
							Universităţii de Vest din Timişoara, cu o experienţă de peste 30
							de ani, fapt ce o face un punct de reper pentru toate asociațiile
							studenţeşti din România.
						</Typography>
					</div>
				</Grid>
			</Grid>
		</>
	);
};
const useStyles = makeStyles({
	btn: {
		marginLeft: 8,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
});
const Spacer = () => <div style={{ margin: "10vh 0px" }}></div>;

const B = ({ children }) => (
	<Typography
		color="textPrimary"
		variant="body1"
		style={{
			display: "inline",
		}}>
		{children}
	</Typography>
);

const Despre = ({ dark }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [previous, setPrevious] = useState(0);
	// useEffect(() => {
	// 	// const timelineGsap = gsap.timeline({ duration: 0.2, stagger: 0.15 });
	// 	// timelineGsap.from(".valori .whitebg", {
	// 	// 	ease: Power2.easeInOut,
	// 	// 	duration: 0.2,
	// 	// 	scale: 1.2,
	// 	// 	y: -60,
	// 	// 	opacity: 0,
	// 	// 	stagger: 0.1,
	// 	// });
	// });
	return (
		<>
			<Helmet>
				<title>{`OSUT - Despre noi`}</title>
				<meta name="description" content="Informații despre Organizația Studenților din Universitatea de Vest din Timișoara (OSUT)." />
			</Helmet>
			<div id="despre">
				<Container maxWidth="lg">
					<CineSuntem />
					<Spacer />
				</Container>
				{/* <div id="osutNumere">
				<Container maxWidth="lg">
					<Grid
						container
						spacing={0}
						direction="row"
						style={{ marginBottom: 0 }}
						justify="space-between"
						alignItems="flex-start">
						<Grid item xs={12}>
							<Typography
								color="textPrimary"
								variant="h3"
								component="h2"
								style={{ marginBottom: 30 }}
								gutterBottom>
								OSUT in numere
							</Typography>
							<section>
								<div className="wave"></div>
							</section>
						</Grid>

						<Grid item xs={12} md={3}>
							<Typography color="textPrimary" variant="h2" component="div">
								30
							</Typography>
							<Typography
								color="textSecondary"
								variant="body1"
								component="span"
								style={{ textTransform: "uppercase" }}>
								Ani de activitate
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography color="textPrimary" variant="h2" component="div">
								600+
							</Typography>
							<Typography
								color="textSecondary"
								variant="body1"
								component="span"
								style={{ textTransform: "uppercase" }}>
								Membri
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography color="textPrimary" variant="h2" component="div">
								16k+
							</Typography>
							<Typography
								color="textSecondary"
								variant="body1"
								component="span"
								style={{ textTransform: "uppercase" }}>
								Studenti reprezentați
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography color="textPrimary" variant="h2" component="div">
								6
							</Typography>
							<Typography
								color="textSecondary"
								variant="body1"
								component="span"
								style={{ textTransform: "uppercase" }}>
								Proiecte traditionale
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</div> */}
				<Container maxWidth="lg">
					<Spacer />
					<Valori />
					<Spacer />
					<Timeline />
					<Spacer />
					<ProiecteOSUT dark={dark} />
					<Spacer />
					<Echipa />
					<Spacer />
					<Departamente />
					<Grid
						container
						spacing={3}
						direction="row"
						style={{ marginTop: 30 }}
						justify="space-between"
						alignItems="flex-start">
						<Grid item xs={12} md={6}>
							<a
								href="./documente/Statut-OSUT-octombrie-2020.pdf"
								style={{ textDecoration: "none" }}>
								<div className="whitebg btn">
									<Tooltip title={"Descărcare"} placement="top">
										<Typography color="textPrimary" variant="h6" component="p">
											Statut OSUT
										</Typography>
									</Tooltip>
								</div>
							</a>
						</Grid>
						<Grid item xs={12} md={6}>
							<a
								href="./documente/Manual-de-identitate-vizuala.pdf"
								style={{ textDecoration: "none" }}>
								<div className="whitebg btn">
									<Tooltip title={"Descărcare"} placement="top">
										<Typography color="textPrimary" variant="h6" component="p">
											Manual de identitate vizuală
										</Typography>
									</Tooltip>
								</div>
							</a>
						</Grid>
					</Grid>
					<Spacer />
					<Membra darkmode={dark} />
				</Container>
			</div>
		</>
	);
};

export default Despre;
