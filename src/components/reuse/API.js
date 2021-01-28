import axios from "axios";
import gsap, { Power2 } from "gsap";
// import IntlRelativeFormat from "intl-relativeformat";

const urlAPI = `https://api.osut.ro/`;

export const getParteneri = (callback) => {
	const url = `${urlAPI}?getParteneri`;
	axios.get(url).then((res) => {
		callback(res.data);
	});
};
//itntrebari frecvente
export const getFAQ = (setFAQ) => {
	const url = `${urlAPI}?faq`;
	axios.get(url).then((res) => {
		setFAQ(res.data[0]);
	});
};

// folosit de ultima sub-pagina a informatii studenti
export const incarcaRaspunsIntrebareIS = (
	informatie,
	setDocs,
	setInfo,
	callback
) => {
	const url = `${urlAPI}?informatie=${informatie}`;
	axios.get(url).then((res) => {
		setInfo(res.data.informatie);
		setDocs(res.data.atasamente);
		callback(res.data.denInfo);
	});
};
// folosit de informatii studenti
export const incarcaIntrebariInformatiiStudenti = (categorie, setInfo, cb) => {
	const url = `${urlAPI}?informatii=${categorie}`;
	axios.get(url).then((res) => {
		setInfo(res.data.r);
		cb(res.data.den);
	});
};

// folosit de Informatii.js / IntrebariInformatii.js
export const incarcaInformatiiStudenti = (setInfo) => {
	const url = `${urlAPI}?informatii_studenti`;
	axios
		.get(url)
		.then((res) => {
			setInfo(res.data[0]);
		})
		.then(() => {
			// const timelineGsap = gsap.timeline({ duration: 0.1, stagger: 0.15 });
			// timelineGsap.from(".sectiune", {
			// 	ease: Power2.easeInOut,
			// 	duration: 0.04,
			// 	scale: 1.05,
			// 	x: -60,
			// 	opacity: 0,
			// 	stagger: 0.09,
			// });
		});
};

export const feedbackArticol = (feedbackArticol, mesaj, id, callback) => {
	const url = `${urlAPI}?feedbackArticol=${feedbackArticol}&mesaj=${mesaj}&articol=${id}`;
	axios.get(url).then((res) => {
		callback(res.data);
	});
};

// folosit de Singlet.js
export const incarcaArticol = (
	postID,
	setTime,
	setArticol,
	setRelated,
	setAttachments,
	cb
) => {
	const url = `${urlAPI}?posts&id=${postID}`;
	// let rf = new IntlRelativeFormat("ro-RO");

	axios
		.get(url)
		.then((res) => {
			const articol = res.data;
			setArticol(articol.postari[0]);
			setAttachments(articol.attachments);
			// let ago = rf.format(new Date(articol.postari[0].timestamp * 1000));
			var timestamp2 = new Date(articol.postari[0].timestamp * 1000).getTime();
			var todate = new Date(timestamp2).getDate();
			var tomonth = new Date(timestamp2).getMonth() + 1;
			var toyear = new Date(timestamp2).getFullYear();
			var ago = todate + "/" + tomonth + "/" + toyear;
			setTime(ago);
			setRelated(articol.related);
		})
		.then(() => {
			cb();
		});
};

// folosit de pagina /blog
export const incarcaArticoleBlog = async (
	setPagini,
	setPostari,
	setCategorii,
	page = 1,
	categorieSelectata = "toate"
) => {
	let url = `${urlAPI}?posts&page=${page}&categorie=${categorieSelectata}&per_page=9`;
	await axios
		.get(url)
		.then((res) => {
			const postari = res.data;
			setPagini(postari.numarPagini);
			setPostari(postari.postari);
			setCategorii(postari.categorii);

			console.log(postari);
		})
		.then(() => {
			const timelineGsap = gsap.timeline({ duration: 0.1, stagger: 0.1 });
			timelineGsap.from(".thepostcard", {
				ease: Power2.easeInOut,
				duration: 0.04,
				scale: 1.05,
				y: -60,
				opacity: 0,
				stagger: 0.09,
			});
		});
};

// folosit de homepage
export const getPosts = (update, per_page = 6, category = "toate", cb) => {
	let url = `${urlAPI}?posts&per_page=${per_page}&categorie=${category}`;
	if (category == "toate") url = `${urlAPI}?posts&per_page=${per_page}`;
	axios
		.get(url)
		.then((res) => {
			const postari = res.data.postari;
			update(postari);
		})
		.then(() => {
			cb();
		});
};

const API = () => {};

export default API;
