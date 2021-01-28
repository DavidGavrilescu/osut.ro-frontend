import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import Grid from "@material-ui/core/grid";
import "./arhiva.css";
import Separator from "../separator/Separator";
import LinkMedia from "./LinkMedia";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Helmet from "react-helmet";


let arhiva = [
	{
		an: 2019,
		proiect: "ShoeBox",
		link:
			"https://www.tion.ro/stirile-judetului-timis/shoebox-cadoul-din-cutia-de-pantofi-pentru-copii-din-centrele-de-plasament-din-timis-855325/",
		titlu:
			"ShoeBox: cadoul din cutia de pantofi, pentru copii din centrele de plasament din Timiș",
	},
	{
		an: 2019,
		proiect: "ShoeBox",
		link:
			"https://www.opiniatimisoarei.ro/timisorenii-cu-inima-buna-pot-ajuta-copiii-orfani-ori-sarmani-cu-daruri-in-cutii-de-pantofi-cum-poti-fi-parte-din-campania-shoebox/12/12/2019",
		titlu:
			"Timisorenii cu inima buna pot ajuta copiii orfani ori sarmani cu daruri in cutii de pantofi. Cum poti fi parte din campania ShoeBox",
	},
	{
		an: 2019,
		proiect: "ITFest",
		link: "https://pfc.uvt.ro/workshop-despre-web-hosting-in-cadrul-itfest/",
		titlu: "Workshop despre Web Hosting în cadrul ITFest",
	},
	{
		an: 2019,
		proiect: "Balul Bobocilor",
		link: "http://www.ziare.com/timisoara/articole/balul+bobocilor+timisoara",
		titlu: "balul bobocilor timisoara",
	},
	{
		an: 2019,
		proiect: "Balul Bobocilor",
		link: "https://tv.uvt.ro/show-de-neuitat-la-balul-bobocilor-uvt/",
		titlu: "Show de neuitat la Balul Bobocilor UVT",
	},
	{
		an: 2019,
		proiect: "Balul Bobocilor",
		link:
			"http://www.ziuadevest.ro/cel-mai-exotic-eveniment-al-studentilor-balul-bobocilor-2019-de-la-uvt-la-heaven/",
		titlu:
			"Cel mai exotic eveniment al studenților, Balul bobocilor 2019 de la UVT – la Heaven",
	},
	{
		an: 2019,
		proiect: "Balul Bobocilor",
		link:
			"https://timisoara.fest.ro/evenimente/party-uri/balul-bobocilor-uvt-2019",
		titlu: "Balul Bobocilor UVT 2019",
	},
	{
		an: 2019,
		proiect: "StudentFest",
		link:
			"https://ziare.com/suceava/stiri-actualitate/participant-artist-sau-voluntar-la-studentfest-7600403",
		titlu: "Participant, artist sau voluntar la StudentFest?",
	},
	{
		an: 2019,
		proiect: "StudentFest",
		link:
			"http://www.bitnews.ro/participant-artist-sau-voluntar-la-studentfest.html?fbclid=IwAR1sS64xwXEETEllU4asCczyVH%E2%80%940imcns9z5g5Fxyc8jYQMI6A9qLb0QM",
		titlu: "Participant, artist sau voluntar la StudentFest?",
	},
	{
		an: 2019,
		proiect: "StudentFest",
		link:
			"https://osut.ro/wp-content/uploads/2019/05/%C3%8Encepe-o-nou%C4%83-edi%C8%9Bie-StudentFest.pdf?fbclid=IwAR1lDMxAJYRTFvPztk-iAy4ABoR7fdEXodi9_ND7sc1Mbu0MR_z_Sq5sHXY",
		titlu: "Începe o nouă ediție StudentFest!",
	},
	{
		an: 2019,
		proiect: "West Summer University",
		link:
			"https://www.westcityradio.ro/stiri/osut-organizeaza-west-summer-university-2019/",
		titlu: "OSUT organizează West Summer University 2019",
	},
	{
		an: 2019,
		proiect: "West Summer University",
		link:
			"https://youth.md/fii-student-pentru-doua-saptamani-cu-west-summer-university-2019/",
		titlu: "FII STUDENT PENTRU DOUĂ SĂPTĂMÂNI CU WEST SUMMER UNIVERSITY 2019",
	},
	{
		an: 2019,
		proiect: "West Summer University",
		link:
			"https://www.tion.ro/stirile-judetului-timis/west-summer-university-continua-si-in-acest-an-la-timisoara-32555/",
		titlu: "West Summer University continuă și în acest an la Timișoara",
	},
	{
		an: 2018,
		proiect: "StudentFest",
		link:
			"http://www.romaniapozitiva.ro/romania-internationala/traieste-experienta-abstract-la-timisoara-studentfest-este-cel-mai-mare-festival-international-studentesc-de-arta-si-cultura-din-sud-estul-europei/",
		titlu:
			"Trăiește experiența ABSTRACT la Timișoara! StudentFest este cel mai mare festival internațional studențesc de artă și cultură din sud-estul Europei",
	},
	{
		an: 2018,
		proiect: "StudentFest",
		link:
			"https://www.ziare-pe-net.ro/stiri/abstract-timisoara-studentfest-a-ajuns-sa-fie-o-senzatie-de-libertate-5864489.html",
		titlu: "Upps ... Eroare 404",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"https://comunicatdepresa.com/cultura/scrisoare-comuna-a-reprezentantilor-studentilor-din-consortiul-universitaria-privind-repartizarea-preliminara-a-locurilor-bugetate/",
		titlu:
			"Scrisoare comună a reprezentanților studenților din Consorțiul Universitaria privind repartizarea preliminară a locurilor bugetate",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"https://stiritimisoara.com/societate/studentii-universitatii-de-vest-din-timisoara-intra-in-greva-japoneza/",
		titlu:
			"Studenții Universității de Vest din Timișoara intră în grevă japoneză",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"https://timpolis.ro/studentii-universitatii-de-vest-din-timisoara-in-greva-japoneza/",
		titlu:
			"Studenți de la Universitatea de Vest din Timișoara, în grevă japoneză",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"http://www.tion.ro/studentii-universitatii-de-vest-timisoara-sunt-in-greva/2024124",
		titlu: "Studentii Universitatii de Vest Timisoara sunt in greva",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"http://www.opiniatimisoarei.ro/greva-la-universitatea-de-vest-din-timisoara-revolta-studentilor/18/04/2018",
		titlu: "Greva la Universitatea de Vest din Timisoara. Revolta studentilor",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"https://www.agerpres.ro/comunicate/2018/04/18/comunicat-de-presa-universitatea-de-vest-din-timisoara--92887",
		titlu: "COMUNICAT DE PRESĂ",
	},
	{
		an: 2018,
		proiect: "Grevă",
		link:
			"https://www.hotnews.ro/stiri-educatie-22400515-studentii-universitatii-vest-din-timisoara-greva-japoneza-fata-reducerea-locurilor-bugetate.htm",
		titlu:
			"Studenţii Universităţii de Vest din Timişoara, în grevă japoneză faţă de reducerea locurilor bugetate",
	},
	{
		an: 2018,
		proiect: "Gala aniversară",
		link: "https://timisoara.biz/gala-aniversara-osut-28/",
		titlu: "Gala aniversară OSUT 28",
	},
	{
		an: 2018,
		proiect: "Gala aniversară",
		link:
			"https://stiritimisoara.com/cultura/organizatia-studentilor-din-timisoara-28-de-ani-de-proiecte/",
		titlu: "Organizația Studenților din Timișoara, 28 de ani de proiecte",
	},
	{
		an: 2018,
		proiect: "Gala aniversară",
		link:
			"https://www.presaonline.info/cultura/organizatia-studentilor-din-universitatea-de-vest-timisoara-implineste-28-de-ani/",
		titlu:
			"Organizația studenților din Universitatea de Vest Timișoara împlinește 28 de ani",
	},
	{
		an: 2018,
		proiect: "Gala aniversară",
		link:
			"https://comunicatdepresa.com/cultura/28-de-ani-de-reprezentare-si-proiecte-osut/",
		titlu: "28 de ani de reprezentare și proiecte OSUT",
	},
	{
		an: 2018,
		proiect: "Gala aniversară",
		link:
			"https://www1.agerpres.ro/comunicate/2018/03/23/comunicat-de-presa-organizatia-studentilor-din-universitatea-de-vest-din-timisoara-12-02-19",
		titlu:
			"Comunicat de presă - Organizația Studenților din Universitatea de Vest din Timișoara",
	},
	{
		an: 2018,
		proiect: "Abecedarul Carierei",
		link:
			"https://www.westcityradio.ro/stiri/o-noua-editie-proiectului-abecedarul-carierei/",
		titlu: "O nouă ediție a proiectului “Abecedarul Carierei”!",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"https://www.jurnalistii.ro/studentii-au-protestat-la-timisoara-impotriva-modificarilor-aduse-de-psd-legilor-justitiei-visul-meu-din-studentie-o-tara-fara-hotie/",
		titlu:
			"Studenții au protestat la Timișoara împotriva modificărilor aduse de PSD legilor justiției. „Visul meu din studenție, o țară fără hoție”",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"http://stiri.tvr.ro/studentii-din-toata---ara-au-protestat-la-timi--oara_826624_video.html#view",
		titlu: "Studenţii din toată țara au protestat la Timișoara",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"https://debanat.ro/2018/01/visul-lor-din-studentie-o-tara-fara-hotie-la-timisoara-au-protestat-cu-un-sicriu-tineri-din-toata-tara-foto_212655.html",
		titlu:
			"Visul lor din studentie: O tara fara hotie! La Timisoara au protestat, cu un sicriu, tineri din toata tara / FOTO",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"http://www.stirilekanald.ro/studentii-timisoreni-au-protestat-intr-un-mod-inedit-impotriva-modificarilor-aduse-legilor-justitiei-17563918",
		titlu:
			"Studentii timisoreni au protestat intr-un mod inedit impotriva modificarilor aduse Legilor Justitiei",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"https://www.digi24.ro/stiri/actualitate/protest-amploare-bucuresti-manifestanti-tara-20-ianuarie-863583",
		titlu:
			"Proteste ample în Bucureşti și în țară. Participarea a fost peste așteptările organizatorilor",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"http://www.ziare.com/stiri/proteste/revolutia-generatiei-noastre-80-000-de-oameni-au-manifestat-in-toata-tara-in-ciuda-frigului-si-ninsorii-galerie-foto-video-1498370",
		titlu:
			"Revolutia generatiei noastre: 80.000 de oameni au indurat frigul si ninsoarea ca sa spuna Va vedem! (Galerie foto & Video)",
	},
	{
		an: 2018,
		proiect: "Proteste",
		link:
			"https://www.libertatea.ro/stiri/stiri-interne/protest-bucuresti-20-ianuarie-mii-de-oameni-vor-sa-iasa-strada-2113763",
		titlu:
			"FOTO&VIDEO/ Protest în Bucureşti. Peste 30.000 de oameni au ieșit în stradă, sâmbătă seară Citeşte întreaga ştire: FOTO&VIDEO/ Protest în Bucureşti. Peste 30.000 de oameni au ieșit în stradă, sâmbătă seară",
	},
	{
		an: 2017,
		proiect: "Retrospectiva anului",
		link:
			"https://www.agerpres.ro/comunicate/2017/12/29/comunicat-de-presa-organizatia-studentilor-din-universitatea-de-vest-din-timisoara-osut--29122",
		titlu: "Anul 2017 prin ochii OSUT-iştilor",
	},
	{
		an: 2017,
		proiect: "Retrospectiva anului",
		link: "http://www.amosnews.ro/anul-2017-prin-ochii-osut-istilor-2017-12-29",
		titlu: "Anul 2017 prin ochii OSUT-iştilor",
	},
	{
		an: 2017,
		proiect: "Proteste",
		link: "http://www.tion.ro/protest-la-timisoara-revolutia-continua/1955511",
		titlu: "Protest la Timisoara: Revolutia continua!",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"http://www.romaniaturistica.ro/west-summer-university-2017-timisoara",
		titlu: "West Summer University 2017",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"http://radiotimisoara.ro/2017/07/27/cum-e-viata-de-student-west-summer-university-de-la-timisoara-le-demonstreaza-elevilor/",
		titlu:
			"Cum e viața de student? West Summer University de la Timișoara le demonstrează elevilor",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"http://radiotimisoara.ro/2018/01/08/finantare-record-pentru-un-proiect-de-succes-al-universitatii-de-vest-din-timisoara/",
		titlu:
			"Finanţare record pentru un proiect de succes al Universităţii de Vest din Timişoara",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"http://radiotimisoara.ro/2016/07/25/sute-de-tineri-testeaza-la-timisoara-viata-de-student-la-west-summer-university/",
		titlu:
			"Sute de tineri testează la Timişoara viaţa de student, la West Summer University",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"http://www.evenimenteoradea.ro/info/west-summer-university-2017-isi-deschide-portile-pentru-250-de-elevi-de-liceu/",
		titlu:
			"West Summer University 2017 își deschide porțile pentru 250 de elevi de liceu",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link: "http://www.galavoluntarilor.ro/detalii_finalist/153",
		titlu: "Gala voluntarilor",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"https://www.newsbucovina.ro/comunicate-de-presa/191172/doua-saptamani-de-studentie-la-universitatea-de-vest-timisoara-perioada-26-iulie-9-august",
		titlu:
			"Două săptămâni de studenție la Universitatea de Vest Timișoara în perioada 26 iulie-9 august",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link:
			"http://diez.md/2017/05/16/pregateste-te-de-viata-studenteasca-si-urmeaza-cursuri-de-vara-la-west-summer-university-timisoara/",
		titlu:
			"Pregătește-te de viața studențească și urmează cursuri de vară la West Summer University în Timișoara",
	},
	{
		an: 2017,
		proiect: "West Summer University",
		link: "http://www.romania24.net/west-summer-university-2017/",
		titlu: "-",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/studentfest-se-intoarce-2017-este-anul-viziunii/1802935",
		titlu: "StudentFest se intoarce! 2017 este anul… viziunii",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/poezii-pe-ritmuri-jazz-un-pod-de-pe-bega-prinde-viata-prin-culoare-si-multe-alte-surprize-la-studentfest/1832219",
		titlu:
			"Poezii pe ritmuri jazz, un pod de pe Bega prinde viata prin culoare si multe alte surprize, la StudentFest",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link: "http://www.banatulazi.ro/creatie-si-imaginatie-la-studentfest-2017/",
		titlu: "Creaţie şi imaginaţie la StudentFest 2017",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"http://incomod-media.ro/ziar/festival-viziunea-despre-arta-se-exprima-frumos-si-divers-la-studentfest/",
		titlu:
			"FESTIVAL: Viziunea despre artă se exprimă frumos și divers la StudentFest!",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"https://www.ziuadevest.ro/studentfest-2017-concert-si-lansare-de-carte-in-piata-unirii-timisoara/",
		titlu:
			"StudentFest 2017: Concert și lansare de carte în Piața Unirii Timișoara",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"https://www.svnews.ro/luna-amara-aualeu-docuart-si-altii-la-studentfest-viziune/92348/",
		titlu: "Luna Amară, Auăleu, Docuart și alții la StudentFest Viziune",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"http://opiniatransilvana.ro/studentfestcel-mai-mare-festival-studentesc-de-arta-si-cultura-din-romania-da-startul-unui-manifest-cultural/",
		titlu:
			"StudentFest,cel mai mare festival studențesc de artă și cultură din România dă startul unui manifest cultural",
	},
	{
		an: 2017,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2017/05/incepe-cel-mai-mare-festival-studentesc-de-arta-si-cultura-din-romania-la-timisoara-ce-si-propun-tinerii-sa-faca/",
		titlu:
			"Începe cel mai mare festival studențesc de artă și cultură din România, la Timișoara. Ce-și propun tinerii să facă",
	},
	{
		an: 2017,
		proiect: "ShoeBox",
		link:
			"http://www.banatulazi.ro/cutia-de-pantofi-care-aduce-zambete-pe-chipul-copiilor-sarmani-studentii-din-timisoara-demareaza-proiectul-shoebox/",
		titlu:
			"Cutia de pantofi care aduce zâmbete pe chipul copiilor sărmani. Studenții din Timișoara demarează proiectul ShoeBox",
	},
	{
		an: 2017,
		proiect: "ShoeBox",
		link:
			"http://radiotimisoara.ro/2017/12/05/shoebox-studentii-va-cheama-in-ajutor-sa-aduceti-zambetul-pe-fetele-copiilor/",
		titlu:
			"Shoebox: Studenții vă cheamă în ajutor să aduceți zâmbetul pe fețele copiilor",
	},
	{
		an: 2017,
		proiect: "ShoeBox",
		link: "https://www.evensi.com/shoebox-2017-timi%C8%99oara-osut/236375383",
		titlu: "Sorry, something bad happened!",
	},
	{
		an: 2017,
		proiect: "ShoeBox",
		link:
			"http://www.tion.ro/fapte-bune-la-cutie-pentru-copiii-nevoiasi-la-timisoara/1942079",
		titlu: "Fapte bune la cutie, pentru copiii nevoiasi, la Timisoara",
	},
	{
		an: 2017,
		proiect: "Univibes",
		link:
			"http://www.tion.ro/studentii-timisoreni-se-pregatesc-pentru-univibes-02-occupy-the-university-again/1900757",
		titlu:
			"Studentii timisoreni se pregatesc pentru Univibes 02/ Occupy the University again",
	},
	{
		an: 2017,
		proiect: "Univibes",
		link:
			"http://www.observatordetimis.ro/2017/09/28/univibes-2017-primul-mare-party-al-inceputului-de-an-universitar-cine-canta/",
		titlu:
			"Univibes 2017, primul mare party al începutului de an universitar. Cine cântă",
	},
	{
		an: 2017,
		proiect: "Univibes",
		link:
			"https://www.pressalert.ro/2017/09/patru-scene-la-festivalul-univibes-vezi-ce-artisti-vor-fi-prezenti-video/",
		titlu:
			"Patru scene la festivalul Univibes. Vezi ce artişti vor fi prezenţi VIDEO Citeste mai mult pe: https://www.pressalert.ro/2017/09/patru-scene-la-festivalul-univibes-vezi-ce-artisti-vor-fi-prezenti-video/",
	},
	{
		an: 2017,
		proiect: "Univibes",
		link:
			"http://evz.ro/super-dj-ul-care-a-remixat-coloana-sonora-de-la-games-of-thrones.html",
		titlu:
			"Super DJ-ul care a remixat coloana sonoră de la Games of Thrones vine la Univibes",
	},
	{
		an: 2017,
		proiect: "Univibes",
		link:
			"https://www.vice.com/ro/article/d3yjpq/festivalul-de-studenti-din-romania-care-pare-rupt-din-untold-si-electric-castle",
		titlu:
			"Cum arată festivalul de studenți din România care pare rupt din Untold și Electric Castle",
	},
	{
		an: 2017,
		proiect: "ITFest",
		link: "http://www.tion.ro/itfest-se-reintoarce-la-timisoara/1800750",
		titlu: "ITFest se reintoarce la Timisoara!",
	},
	{
		an: 2017,
		proiect: "ITFest",
		link:
			"http://www.ziarultimisoara.ro/actualitate/3282-o-noua-editie-itfest-la-timisoara",
		titlu: "O nouă ediție ITFest la Timișoara",
	},
	{
		an: 2017,
		proiect: "ITFest",
		link:
			"http://www.info-tim.com/2017/03/itfest-la-timisoara-29-martie-12-aprilie-2017.html",
		titlu: "-",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link: "https://issuu.com/studentfest1",
		titlu: "StudentFest",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/studentfest-are-program-muzical-super-concerte-cu-suie-paparude-si-multi-altii/1644347",
		titlu:
			"StudentFest are program muzical! Super concerte cu Suie Paparude si multi altii",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/arta-de-toate-felurile-pentru-tineri-au-inceput-inscrierile-la-atelierele-studentfest-2016/1634359",
		titlu:
			"Arta de toate felurile pentru tineri. Au inceput inscrierile la atelierele StudentFest 2016",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://radiotimisoara.ro/2016/05/17/student-fest-25-de-ani-de-arta-si-cultura/",
		titlu: "STUDENT FEST – 25 de ani de artă și cultură / PROGRAM",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://timisoara.tvr.ro/studentfest-25-arta-si-cultura-de-25-de-ani_16705.html",
		titlu: "StudentFest 25 –Artă şi cultură de 25 de ani!",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://debanat.ro/2016/01/25-de-ani-de-arta-muzica-si-studentie-hai-la-studentfest-2016_151742.html",
		titlu: "25 de ani de arta, muzica si… studentie! Hai la StudentFest 2016",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://www.timisoaraexpress.ro/stiri-locale-timisoara/10-zile-de-festival-pentru-25-ani-de-studentfest-la-timisoara_17669",
		titlu: "Error 404",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link: "https://www.europafm.ro/studentfest-in-mai-la-timisoara/",
		titlu: "StudentFest, în mai la Timișoara",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"http://www.ziarultimisoara.ro/cultura/2170-evenimentul-artistic-si-cultural-studentfest-a-ajuns-la-cea-de-a-xxv-a-editie",
		titlu:
			"Evenimentul artistic și cultural StudentFest a ajuns la cea de-a XXV-a ediție",
	},
	{
		an: 2016,
		proiect: "StudentFest",
		link:
			"https://www.infomuntenia.ro/sfert-de-arta-si-cultura-la-timisoara/2016/05",
		titlu: "SFert de artă și cultură, la Timișoara",
	},
	{
		an: 2016,
		proiect: "ITFest",
		link:
			"http://www.ziarultimisoara.ro/actualitate/2220-conferinta-despre-startul-in-cariera-it-la-universitatea-de-vest-din-timisoara",
		titlu:
			"Conferință despre startul în cariera IT, la Universitatea de Vest din Timișoara",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link: "http://timisplus.ro/?p=1492",
		titlu:
			"Organizația Studenților din Universitatea de Vest din Timișoara împlinește 25 de ani de la înființare",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link:
			"http://www.timisoaraexpress.ro/stiri-locale-timisoara/organizatia-studentilor-din-universitatea-de-vest-din-timisoara-ce-a-fost-si-cea-ajuns_15485",
		titlu: "Error 404",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/osut-la-25-de-ani-sambata-de-la-ora-16-va-avea-loc-gala-organizatiei-studentesti-timisorene-597534",
		titlu:
			"OSUT, la 25 de ani. Sâmbătă, de la ora 16, va avea loc gala organizației studențești timișorene",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link: "http://main.radioromaniacultural.ro/osut_implineste_25_de_ani-29726",
		titlu: "This site can’t be reached",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link: "https://oglindadevest.ro/doi-osutisti-sunt-acum-lideri-anosr/",
		titlu: 404,
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link:
			"http://debanat.ro/2015/03/uvt-are-club-select-pentru-studentii-cu-rezultate-academice-exceptionale_99347.html#ixzz40L31kVVq",
		titlu:
			"UVT are club select pentru studentii cu rezultate academice exceptionale",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/timisoara-campus-universitar-cu-aspect-de-centru-comercial-349143",
		titlu: "Timișoara: campus universitar cu aspect de centru comercial",
	},
	{
		an: 2015,
		proiect: "Arhivă",
		link:
			"https://renasterea.ro/studentii-din-timisoara-spun-nu-cazarii-refugiatilor-in-camine/",
		titlu: "Studenţii din Timişoara spun nu cazării refugiaţilor în cămine",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2015/03/conflict-in-noua-editie-a-studentfest-cand-are-loc-ce-evenimente-sunt-programate-si-cum-poti-participa/",
		titlu:
			"„Conflict” în noua ediție a StudentFest. Când are loc, ce evenimente sunt programate și cum poți participa",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"https://www.ziuadevest.ro/studentfest-2015-sau-10-zile-de-conflict-la-timisoara/",
		titlu: "StudentFest 2015 sau 10 zile de “Conflict”, la Timişoara",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"http://www.viptim.ro/8-events/628-studentfest-2015-conflict-te-invita-in-data-de-12-mai-sa-traiesti-hip-hop-alaturi-de-noi",
		titlu: "Oops! Pagina nu poate fi găsită.",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"http://www.opiniatimisoarei.ro/studentfest-2015-ce-artisti-vor-concerta-la-cel-mai-tare-festival-studentesc-la-timisoara-iata-tot-programul/05/05/2015",
		titlu:
			"StudentFest 2015. Ce artisti vor concerta la cel mai tare festival studentesc, la Timisoara? Iata tot programul!",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link: "http://radiotimisoara.ro/2015/04/29/conflict-la-student-fest-2015/",
		titlu: "CONFLICT la Student Fest 2015",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"http://www.timisoaraexpress.ro/stiri-locale-timisoara/studentfest-2015-10-zile-de-conflict-si-aproape-100-de-evenimente_15710",
		titlu: "Error 404",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"http://www.timisoarastiri.ro/caravana-docuart-cu-filme-documentare-made-in-ro-ajunge-la-timisoara-in-cadrul-studentfest/",
		titlu:
			"Caravana DocuArt cu filme documentare Made In RO ajunge la Timișoara în cadrul StudentFest",
	},
	{
		an: 2015,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2015/05/la-timisoara-inceput-studentfest-cel-mai-mare-festival-de-arta-si-cultura-din-romania-care-este-tema-din-acest-si-de-ce-au-construit-voluntarii-cuiburi-din-crengi-foto/",
		titlu:
			"La Timișoara a început StudentFest, cel mai mare festival de artă și cultură din România. Care este tema din acest an și de ce au construit voluntarii cuiburi din crengi FOTO",
	},
	{
		an: 2015,
		proiect: "Abecedarul Carierei",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/abecedarul-carierei-2015-proiectul-osut-se-va-desfasura-in-perioada-1-8-aprilie-371691",
		titlu:
			"Abecedarul Carierei 2015. Proiectul OSUT se va desfășura în perioada 1-8 aprilie",
	},
	{
		an: 2015,
		proiect: "Abecedarul Carierei",
		link:
			"https://www.pressalert.ro/2015/03/cum-poti-reusi-cariera-mergi-la-acest-eveniment-si-vei-afla-de-la-specialisti/",
		titlu:
			"Cum poţi reuși în carieră? Mergi la acest eveniment şi vei afla de la specialişti",
	},
	{
		an: 2015,
		proiect: "Abecedarul Carierei",
		link:
			"http://www.wherevent.com/detail/Abecedarul-Carierei-Abecedarul-Carierei-2015",
		titlu: "Event in Timișoara",
	},
	{
		an: 2015,
		proiect: "Abecedarul Carierei",
		link:
			"http://www.timisoaraonline.ro/vrei-sa-ti-deschizi-o-afacere-afla-cum-poti-face-asta-la-abecedarul-carierei-la-timisoara/",
		titlu:
			"Vrei să-ți deschizi o afacere? Află cum poți face asta, la „Abecedarul Carierei”, la Timișoara",
	},
	{
		an: 2015,
		proiect: "Abecedarul Carierei",
		link:
			"https://www.pressalert.ro/2015/01/esti-tanar-si-nu-reusesti-sa-ti-gasesti-un-loc-de-munca-cum-poti-invata-sa-te-vinzi-eficient-cadrul-unui-eveniment-inedit-organizat-la-timisoara/",
		titlu:
			"Ești tânăr și nu reușești să-ți găsești un loc de muncă? Cum poți învăța să te vinzi eficient în cadrul unui eveniment inedit organizat la Timișoara",
	},
	{
		an: 2015,
		proiect: "Abecedarul Carierei",
		link:
			"http://www.ziuadevest.ro/abcdarul-carierei-sau-economia-de-la-a-la-noi-cu-osu-timisoara/",
		titlu: "ABCdarul Carierei, sau Economia de la A la Noi, cu OSU Timişoara",
	},
	{
		an: 2015,
		proiect: "Proteste",
		link:
			"http://www.banatulmeu.ro/protest-studentii-timisoreni-au-ocupat-un-amfiteatru-si-isi-cer-drepturile-la-prefectura/",
		titlu:
			"Protest. Studenții timișoreni au ocupat un amfiteatru și își cer drepturile la Prefectură",
	},
	{
		an: 2015,
		proiect: "Proteste",
		link:
			"http://radiotimisoara.ro/2015/05/06/foto-zeci-de-studenti-au-ocupat-peste-noapte-un-amfiteatru-al-uvt/",
		titlu:
			"FOTO / Zeci de studenţi au ocupat peste noapte un amfiteatru al UVT",
	},
	{
		an: 2015,
		proiect: "Proteste",
		link:
			"http://www.tion.ro/studentii-de-la-osut-continua-protestul-in-autobuz/1531799",
		titlu:
			"Studentii de la OSUT continua protestul, in autobuz, dupa inca o noapte petrecuta in amfiteatru",
	},
	{
		an: 2015,
		proiect: "ShoeBox",
		link:
			"http://www.banatulazi.ro/shoebox-2015-cadoul-din-cutia-de-pantofi-la-timisoara/",
		titlu: "Shoebox 2015 – Cadoul din cutia de pantofi, la Timişoara",
	},
	{
		an: 2015,
		proiect: "ShoeBox",
		link:
			"https://www.pressalert.ro/2015/12/timisorenii-incurajati-sa-faca-un-cadou-de-craciun-unor-copii-sarmani-intr-o-cutie-de-pantofi-ce-poti-pune-ea/",
		titlu:
			"Timişorenii, încurajaţi să facă un cadou de Crăciun unor copii sărmani, într-o cutie de pantofi. Ce poţi pune în ea",
	},
	{
		an: 2015,
		proiect: "WSU",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/studenti-pentru-doua-saptamani-190-de-elevi-la-west-summer-university-din-timisoara-421068",
		titlu:
			"Studenți pentru două săptămâni. 190 de elevi, la West Summer University din Timișoara",
	},
	{
		an: 2015,
		proiect: "WSU",
		link:
			"https://www.timpul.md/articol/ai-terminat-clasa-xi-a-vino-la-timioara-75178.html",
		titlu: "Ai terminat clasa XI-a? Vino la Timișoara!",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/vacante-gratuite-pentru-studentii-silitori-263055",
		titlu: "Vacanțe gratuite pentru studenții silitori",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/a-inceput-inscrierea-pentru-un-loc-in-taberele-studentesti-de-vara-243128",
		titlu: "A început înscrierea pentru un loc în taberele studenţeşti de vară",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://noinu.ro/2014/08/timisoara-a-spus-si-ea-stop-migrationismului-politic/",
		titlu: "This site can’t be reached",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://radiotimisoara.ro/2014/07/22/o-parte-din-problemele-din-caminele-uvt-ar-putea-fi-rezolvate/",
		titlu: "O parte din problemele din căminele UVT ar putea fi rezolvate",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://www.tion.ro/verde-pentru-biciclete-a-sarbatorit-sase-ani-de-existenta/1466362",
		titlu: "Verde pentru Biciclete a sarbatorit sase ani de existenta",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://adevarul.ro/locale/timisoara/foto-aproximativ-1500-biciclisti-iesit-strazile-timisoara-pedalarea-toamna-1_543a80df0d133766a8e0b4b2/index.html",
		titlu:
			'FOTO Aproximativ 1.500 de biciclişti au ieşit pe străzile din Timişoara, la "Pedalarea de toamnă" Citeste mai mult: adev.ro/pbifyi',
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"https://www.pressalert.ro/2014/12/studentii-timisoreni-invitati-sa-se-alature-marsului-pentru-comemorarea-eroilor-revolutiei-pentru-demonstra-ca-le-pasa-cand-loc-actiunea/",
		titlu:
			"Studenții timișoreni, invitați să se alăture Marșului pentru comemorarea Eroilor Revoluției „pentru a demonstra că le pasă”. Când are loc acțiunea",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://www.tion.ro/fantani-parcari-si-curatenie-in-complexul-studentesc-asta-ii-cer-studentii-lui-robu/1402001",
		titlu:
			"Fantani, parcari si curatenie in Complexul Studentesc. Asta ii cer studentii lui Robu!",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://www.pentrutimisoara.ro/stiri_timisoara/vanzarea-alcoolului-in-complexul-studentesc-in-continuare-interzisa.html",
		titlu: "Site în construcție",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/alcoolul-in-complexul-studentesc-din-timisoara-in-continuare-interzis-261635",
		titlu:
			"Alcoolul în Complexul Studenţesc din Timișoara, în continuare interzis",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/refuzati-pentru-ca-n-au-experienta-multi-absolventi-nu-lucreaza-in-domeniul-pentru-care-s-au-pregatit-305901",
		titlu:
			"Refuzați pentru că n-au experiență. Mulți absolvenţi nu lucrează în domeniul pentru care s-au pregătit",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"http://www.tion.ro/timisul-pe-locul-3-la-consumul-de-droguri-etnobotanicele-si-cannabisul-preferatele-tinerilor/1429728",
		titlu:
			"Timisul, pe locul 3 la consumul de droguri. Etnobotanicele si cannabisul, preferatele tinerilor",
	},
	{
		an: 2014,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/detinutii-mai-scumpi-decat-studentii-238623",
		titlu: "Deţinuţii, mai scumpi decât studenţii",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"http://www.diacaf.com/stiri/local/timis/osut-protesteaza-cu-bannere-si-din-nou-cere-alocarea_18010561.html",
		titlu:
			"OSUT protesteaza cu bannere si din nou cere alocarea a sase procente din PIB pentru Educatie",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"http://www.timisoaraonline.ro/taxe-de-scolarizare-mai-mari-cu-20-pentru-bobocii-de-la-universitatea-de-vest-din-timisoara-de-ce-se-plang-studentii/",
		titlu:
			"Taxe de școlarizare mai mari cu 20 % pentru „bobocii” de la Universitatea de Vest din Timișoara. De ce se plâng studenții",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"http://www.pentrutimisoara.ro/stiri_timisoara/studentii-din-timisoara-someaza-statul-roman-sa-si-faca-treaba-cum-trebuie-la-alegerile-prezidentiale-din-16-noiembrie.html",
		titlu: "Site în construcție",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"http://www.tion.ro/studentii-timisoreni-reclama-proasta-organizare-a-alegerilor/1475006",
		titlu: "Niciun Rezultat",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"https://timpolis.ro/debut-de-an-universitar-cu-taxe-de-studiu-cu-20-mai-mari-si-multe-probleme-cronicizate/",
		titlu:
			"Debut de an universitar cu taxe de studiu cu 20% mai mari şi multe probleme cronicizate",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"http://voceatimisului.ro/inceput-de-universitar-sub-semnul-subfinantarii-educatiei-si-lipsei-locurilor-de-cazare-la-timisoara-ce-spun-studentii/",
		titlu:
			"Început de an universitar, sub semnul subfinanţării educaţiei şi a lipsei locurilor de cazare, la Timișoara. Ce spun studenții",
	},
	{
		an: 2014,
		proiect: "Revolte",
		link:
			"https://www.vice.com/ro/article/xyz9xk/intrebarea-zilei-ce-facem-cu-marirea-taxelor-universitare-619",
		titlu: "Întrebarea zilei: Ce facem cu mărirea taxelor universitare?",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"https://www.activenews.ro/prima-pagina/A-demarat-StudentFEST-2014-cel-mai-mare-festival-studentesc-din-Europa-de-Est.-Programul-evenimentelor-37075",
		titlu:
			"A demarat StudentFEST 2014, cel mai mare festival studenţesc din Europa de Est. Programul evenimentelor",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.ziarultimisoara.ro/cultura/440-studentfest-creeaza-impact",
		titlu: "StudentFest creează IMPACT",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2014/03/studentfest-impact-major-la-editia-din-acest-ce-evenimente-speciale-au-pregatit-studentii/",
		titlu:
			"StudentFest, IMPACT major la ediţia din acest an. Ce evenimente speciale au pregătit studenţii Citeste mai mult pe: https://www.pressalert.ro/2014/03/studentfest-impact-major-la-editia-din-acest-ce-evenimente-speciale-au-pregatit-studentii/",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.timisoaraexpress.ro/stiri-locale-timisoara/studentfest-sub-impact-la-timisoara_13450",
		titlu: "Error 404",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/biblioteca-vie-teatru-si-concerte-la-studentfest-2014-timisoara/1414388",
		titlu: "Biblioteca vie, teatru si concerte la StudentFest 2014 Timisoara",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"https://www.digi24.ro/emisiuni-regionale/timisoara/recrutat-in-timisoara/studentfest-arta-si-cultura-studenteasca-in-prim-plan-240293",
		titlu: "Această emisiune este live și o puteți urmări aici",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.ziarelive.ro/stiri/doua-saptamani-de-student-fest-la-timisoara-vezi-programul-complet-al-evenimentelor.html",
		titlu:
			"Două săptămâni de Student Fest la Timișoara. Vezi programul complet al evenimentelor",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.banatulmeu.ro/studentfest-la-electric-theatre-timisoara-cu-emil-kindlein/",
		titlu: "StudentFest – la Electric Theatre Timişoara cu Emil Kindlein",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.enciclopediamuzicala.ro/stiri/lansare-de-album-atelierul-de-trupe-studentfest",
		titlu: "This site can’t be reached",
	},
	{
		an: 2014,
		proiect: "StudentFest",
		link:
			"http://www.timisoaraonline.ro/stop-studentfest-impact-cel-mai-mare-festival-de-arta-si-cultura-studenteasca-s-a-incheiat/",
		titlu:
			"Stop StudentFest Impact! Cel mai mare festival de artă și cultură studențească s-a încheiat",
	},
	{
		an: 2014,
		proiect: "ShoeBox",
		link:
			"http://www.pentrutimisoara.ro/stiri_timisoara/alatura-te-campaniei-shoebox-cadoul-din-cutia-de-pantofi.html",
		titlu: "Site în construcție",
	},
	{
		an: 2014,
		proiect: "ShoeBox",
		link:
			"http://www.timisoaraonline.ro/cadoul-din-cutia-de-pantofi-campania-caritabila-organizata-la-timisoara-pentru-copiii-sarmani-da-si-tu-o-mana-de-ajutor/",
		titlu:
			"„Cadoul din cutia de pantofi”, campania caritabilă organizată la Timișoara pentru copiii sărmani. Dă și tu o mână de ajutor",
	},
	{
		an: 2014,
		proiect: "Democrația în UVT",
		link:
			"https://oglindadevest.ro/democratia-in-uvt-alegeri-pentru-studen%C8%9Bi-reprezentantii-in-forumurile-universitare/",
		titlu: 404,
	},
	{
		an: 2014,
		proiect: "Democrația în UVT",
		link:
			"http://voceatimisului.ro/osut-anunta-alegeri-democratice-pentru-studentii-reprezentanti-forumurile-universitare-ale-uvt",
		titlu:
			"OSUT anunță alegeri democratice pentru studenții reprezentanți în forumurile universitare ale UVT",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"http://www.tion.ro/uvt-pregateste-o-seara-de-basm-la-balul-bobocilor-2014/1469444",
		titlu: "UVT pregateste o seara de basm la Balul Bobocilor 2014",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"http://www.timisoaraexpress.ro/stiri-locale-timisoara/fat-frumos-si-ileana-cosanzeana-vin-la-balul-bobocilor-uvt_14793",
		titlu: "Error 404",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"https://debanat.ro/2014/10/feti-frumosi-si-zane-la-balul-bobocilor-uvt-2014_88334.html",
		titlu: "Feti Frumosi si Zane, la Balul Bobocilor UVT 2014",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"http://www.pentrutimisoara.ro/stiri_timisoara/toamna-se-numara-bobocii-la-balul-bobocilor-uvt.html",
		titlu: "Site în construcție",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"http://www.pentrutimisoara.ro/stiri_timisoara/balul-bobocilor-uvt-cu-personaje-din-basme.html",
		titlu: "Site în construcție",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"http://www.banatulmeu.ro/balul-bobocilor-2014-la-universitatea-de-vest-timisoara-in-heaven-the-club/",
		titlu:
			"Balul Bobocilor 2014, la Universitatea de Vest Timişoara, în Heaven the Club",
	},
	{
		an: 2014,
		proiect: "Balul Bobocilor",
		link:
			"https://www.realitatea.net/uvt-pregateste-o-seara-de-basm-la-balul-bobocilor-2014_1551643.html",
		titlu: "UVT pregateste o seara de basm la Balul Bobocilor 2014",
	},
	{
		an: 2013,
		proiect: "StudentFest",
		link:
			"http://www.opiniatimisoarei.ro/revine-studentfest-acum-e-paradox/24/01/2013",
		titlu: "Revine StudentFest. Acum e Paradox!",
	},
	{
		an: 2013,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2013/04/weekend-cu-concerte-studentfest-parazitii-miki-love-si-suie-paparude/",
		titlu:
			"Weekend cu concerte Studentfest, Paraziţii, Miki Love şi Şuie Paparude",
	},
	{
		an: 2013,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2013/02/studentfest-aduce-crema-tinerilor-creatori-la-timisoara/",
		titlu: "StudentFest aduce crema tinerilor creatori la Timișoara",
	},
	{
		an: 2013,
		proiect: "StudentFest",
		link:
			"http://www.comunicatedepresa.ro/simus-trading/photosetup-sustine-sectiunea-foto-a-festivalului-studentfest-timisoara/",
		titlu:
			"Photosetup sustine sectiunea foto a festivalului Studentfest Timisoara",
	},
	{
		an: 2013,
		proiect: "StudentFest",
		link:
			"https://www.poetic.ro/16-04-2013-atelierul-de-poezie-relationala-cum-s-a-intamplat-atelierul-de-poezie-de-la-timisoara-din-studentfest/",
		titlu:
			"ATELIERUL DE POEZIE RELAŢIONALĂ> CUM S-A ÎNTÂMPLAT ATELIERUL DE POEZIE DE LA TIMIŞOARA DIN STUDENTFEST",
	},
	{
		an: 2013,
		proiect: "StudentFest",
		link:
			"https://www.pressalert.ro/2013/04/studentfest-aduce-paradoxul-la-timisoara-ce-sectiune-inedita-va-avea-festivalul/",
		titlu:
			"Studentfest aduce „Paradoxul” la Timişoara. Ce secţiune inedită va avea festivalul",
	},
	{
		an: 2013,
		proiect: "Arhivă",
		link:
			"https://stirileprotv.ro/stiri/timis/shoebox-proiectul-inedit-adoptat-din-strainatate-si-care-aduce-zambete-pe-chipul-copiilor-saraci.html",
		titlu:
			"“ShoeBox”, proiectul inedit adoptat din strainatate si care aduce zambete pe chipul copiilor saraci",
	},
	{
		an: 2013,
		proiect: "Arhivă",
		link:
			"https://www.digi24.ro/regional/digi24-timisoara/vlad-chereches-osut-dupa-afirmatia-lui-chitoiu-la-timisoara-vor-fi-proteste-vom-scoate-mii-de-studenti-in-strada-139889",
		titlu:
			"Vlad Cherecheș, OSUT, după afirmația lui Chițoiu, la Timișoara: vor fi proteste, vom scoate mii de studenți în stradă!",
	},
	{
		an: 2013,
		proiect: "Arhivă",
		link:
			"https://www.pressalert.ro/2013/03/tinerii-cu-care-ne-mandrim-sah-cu-animale-din-jungla-cel-mai-bun-joc-prezentat-la-it-fest/",
		titlu: "Ce șah au inventat tinerii programatori, premiați la IT Fest 2013",
	},
	{
		an: 2012,
		proiect: "StudentFest",
		link:
			"http://www.opiniatimisoarei.ro/studentfest-2012-festivalul-cultural-studentesc-incepe-in-3-mai/02/05/2012",
		titlu:
			"StudentFest 2012: festivalul cultural studentesc incepe in 3 mai la Timisoara",
	},
	{
		an: 2012,
		proiect: "StudentFest",
		link:
			"https://stirileprotv.ro/stiri/timis/distractie-arta-si-cultura-la-studentfest-2012-vezi-aici-programul-manifestarilor.html",
		titlu:
			"Distractie, arta si cultura la StudentFest 2012. Vezi aici programul manifestarilor",
	},
	{
		an: 2012,
		proiect: "StudentFest",
		link:
			"http://revistaechinox.ro/2012/03/studentfest-2012-timisoara-workshop-uri-si-cursuri-de-fotografie/",
		titlu: "StudentFEST 2012 Timişoara – Workshop-uri şi cursuri de fotografie",
	},
	{
		an: 2012,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/primul-pas-pentru-a-iesi-din-inertie-inscrieri-studentfest-2012/1081312",
		titlu: "Primul pas pentru a iesi din inertie - Inscrieri StudentFest 2012",
	},
	{
		an: 2012,
		proiect: "Arhivă",
		link:
			"https://www.wherevent.com/detail/Osut-Timisoara-Democratia-in-UVT-Alegeri-studenti-reprezentanti",
		titlu: "Democraţia în UVT - Alegeri studenţi reprezentanţi",
	},
	{
		an: 2012,
		proiect: "Arhivă",
		link:
			"http://www.tion.ro/osut-spune-nu-actiunilor-de-protest-violente-cu-caracter-politic/1042782",
		titlu: "OSUT spune nu actiunilor de protest violente cu caracter politic",
	},
	{
		an: 2011,
		proiect: "StudentFest",
		link:
			"http://www.opiniatimisoarei.ro/compromisul-arta-20-a-editie-studentfest-festivalul-de-arta-si-cultura-studenteasca-isi-deschide-portile-la-timisoara/28/04/2011",
		titlu:
			"„Compromisul in Arta”! A 20-a editie a Studentfest, Festivalul de Arta si Cultura Studenteasca, isi deschide portile la Timisoara",
	},
	{
		an: 2011,
		proiect: "StudentFest",
		link:
			"http://www.paginidecultura.ro/2011/04/compromis-muzical-la-studentfest/",
		titlu: "Compromis muzical la Studentfest",
	},
	{
		an: 2011,
		proiect: "StudentFest",
		link:
			"http://www.opiniatimisoarei.ro/cel-mai-mare-festival-studentesc-de-arta-din-europa-studentfest-isi-deschide-portile-timisoara-prima-saptamana-lunii-mai/14/04/2011",
		titlu:
			"Cel mai mare festival studentesc de arta din Europa, StudentFest, isi deschide portile in Timisoara in prima saptamana a lunii mai",
	},
	{
		an: 2011,
		proiect: "StudentFest",
		link:
			"http://adevarul.ro/locale/timisoara/compromis-by-studentfest-2011-timisoara---tinerii-actori-compromisurile-fac-cariera-1_50ad79bc7c42d5a66395dca8/index.html",
		titlu:
			"„Compromis” by StudentFest 2011 Timişoara – Tinerii actori și compromisurile pe care le fac pentru a avea o carieră",
	},
	{
		an: 2011,
		proiect: "StudentFest",
		link:
			"http://www.tion.ro/arta-gratis-la-studentfest-o-saptamana-de-muzica-teatru-si-distractie/909944",
		titlu:
			"Arta gratis la StudentFest: o saptamana de muzica, teatru si distractie",
	},
	{
		an: 2011,
		proiect: "ITFest",
		link:
			"http://www.autenticpromotion.ro/2011/itfest-timisoara-28-aprilie-2011-1-mai-2011-universitatea-de-vest-timisoara/",
		titlu: "This site can’t be reached",
	},
	{
		an: 2011,
		proiect: "Proteste",
		link:
			"http://www.tion.ro/osut-serbeaza-ziua-internationala-a-studentului-prin-actiuni-de-protest/1013265",
		titlu:
			"OSUT serbeaza Ziua Internationala a Studentului prin actiuni de protest",
	},
	{
		an: 2011,
		proiect: "Proteste",
		link:
			"https://www.dcnews.ro/studentii-timisoreni-au-protestat-impotriva-ministerului-educatiei-pentru-neaprobarea-statutului_125137.html",
		titlu:
			"Studenţii timişoreni au protestat împotriva Ministerului Educaţiei pentru neaprobarea statutului",
	},
	{
		an: 2011,
		proiect: "Proteste",
		link:
			"http://www.opiniatimisoarei.ro/studentilor-de-vest-si-de-la-politehnica-nu-prea-le-pasa-de-drepturile-pe-care-le-au-protestul-pentru-adoptarea-statutului-studentului-adevarat-fiasco-la-timisoara/17/11/2011",
		titlu:
			"Studentilor de la Vest si de la Politehnica nu prea le pasa de drepturile pe care le au! Protestul pentru adoptarea statutului studentului, un adevarat fiasco la Timisoara!",
	},
	{
		an: 2010,
		proiect: "Democrația în UVT",
		link:
			"http://www.vinsieu.ro/eveniment/timis/timisoara/alte-evenimente/alegerile-studentilor-consilieri-uvt/38817/e.html",
		titlu: "Alegerea studentilor consilieri UVT",
	},
	{
		an: 2010,
		proiect: "StudentFest",
		link: "http://www.ziuadevest.ro/studentfest-2010-gata-de-start/",
		titlu: "StudentFest 2010 – gata de start",
	},
	{
		an: 2010,
		proiect: "StudentFest",
		link:
			"https://a1.ro/timp-liber/evenimente/astazi-10-mai-s-a-dat-startul-studentfest-2010-timisoara-id94700.html",
		titlu: "Astazi, 10 mai, s-a dat startul StudentFest 2010 Timisoara!",
	},
	{
		an: 2009,
		proiect: "Proteste",
		link:
			"http://www.campusnews.ro/stiri-stiri-5538109-studentii-timisoara-iasi-ies-strada-pentru-drepturile-lor.htm",
		titlu:
			"Studentii de la Timisoara si Iasi ies in strada pentru drepturile lor",
	},
	{
		an: 2009,
		proiect: "Proteste",
		link: "http://www.ziuadevest.ro/osut-de-motive-impotriva-abramburici/",
		titlu: "OSUT-ă de motive împotriva “Abramburicăi”",
	},
	{
		an: 2008,
		proiect: "StudentFest",
		link: "https://letsrock.ro/news/Bio+la+StudentFest+Timisoara-69.html",
		titlu: "BIO LA STUDENTFEST TIMISOARA!",
	},
	{
		an: 2007,
		proiect: "StudentFest",
		link: "http://www.onlinestudent.ro/articole/un-festival-care-instiga",
		titlu: "UN FESTIVAL CARE INSTIGA",
	},
];


function url_domain(data) {
	var a = document.createElement("a");
	a.href = data;
	return a.hostname;
}
const ArhivaMedia = () => {
	const [an, setAn] = useState(2019);
	const handleChangeAn = (event, value) => {
		setAn(event.target.value);
	};
	return (<>
		<Helmet>
				<title>{`OSUT - Arhiva media`}</title>
				<meta name="description" content="Articolele și aparițiile în presă ale evenimentelor OSUT." />
		</Helmet>
		<div id="arhiva_media">
			<AppBar
				position="sticky"
				style={{
					boxShadow: "none",
					padding: "10px",
					borderRadius: 3,
					top: "60px",
					background: "transparent",
				}}
				className="whitebg">
				<Container maxWidth="lg">
					<Paper
						style={{
							boxShadow: "none",
							padding: "0px 10px",
							borderRadius: 3,
						}}>
						<Toolbar disableGutters={true}>
							<Typography
								color="textPrimary"
								variant="h4"
								component="h1"
								style={{
									flexGrow: 1,
									paddingLeft: 0,
								}}
								gutterBottom>
								Arhivă media
							</Typography>

							<FormControl
								style={{
									display: "inline",
								}}>
								<Select
									variant="standard"
									value={an}
									onChange={handleChangeAn}
									disableUnderline={true}
									autoWidth={true}>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
								</Select>
							</FormControl>
						</Toolbar>
					</Paper>
				</Container>
			</AppBar>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={3}
					direction="row"
					justify="space-between"
					alignItems="flex-start"
					className="whitebg">
					<Grid
						item
						xs={12}
						md={8}
						lg={8}
						style={{
							marginTop: 15,
						}}>
						{arhiva.map((med) => {
							if (med.titlu === "-" || med.titlu === "404") return;
							if (med.an !== an) return;
							return (
								<LinkMedia
									titlu={med.titlu}
									sursa={url_domain(med.link)}
									data="12 decembrie 2019"
									url={med.link}
									an={med.an}
								/>
							);
						})}
					</Grid>
				</Grid>
			</Container>
		</div>
		</>
	);
};

export default ArhivaMedia;
