import axios from 'axios';
import gsap, { Power2 } from 'gsap';
import TimeAgo from 'javascript-time-ago';
import ro from 'javascript-time-ago/locale/ro';

TimeAgo.addDefaultLocale(ro);

const urlAPI = `https://api.osut.ro/`;
const timeAgo = new TimeAgo('ro-RO');

export const getParteneri = (callback) => {
  axios.get(`${urlAPI}?getParteneri`).then((res) => {
    callback(res.data);
  });
};

export const getFAQ = (setFAQ) => {
  axios.get(`${urlAPI}?faq`).then((res) => {
    setFAQ(res.data[0]);
  });
};

export const incarcaRaspunsIntrebareIS = (informatie, setDocs, setInfo, callback) => {
  axios.get(`${urlAPI}?informatie=${informatie}`).then((res) => {
    setInfo(res.data.informatie);
    setDocs(res.data.atasamente);
    callback(res.data.denInfo);
  });
};

export const incarcaIntrebariInformatiiStudenti = (categorie, setInfo, cb) => {
  axios.get(`${urlAPI}?informatii=${categorie}`).then((res) => {
    setInfo(res.data.r);
    cb(res.data.den);
  });
};

export const incarcaInformatiiStudenti = (setInfo) => {
  axios.get(`${urlAPI}?informatii_studenti`).then((res) => {
    setInfo(res.data[0]);
  });
};

export const feedbackArticol = (feedback, mesaj, id, callback) => {
  axios.get(`${urlAPI}?feedbackArticol=${feedback}&mesaj=${mesaj}&articol=${id}`).then((res) => {
    callback(res.data);
  });
};

export const incarcaArticol = (postID, setTime, setArticol, setRelated, setAttachments, cb) => {
  axios.get(`${urlAPI}?posts&id=${postID}`).then((res) => {
    const articol = res.data;
    setArticol(articol.postari[0]);
    setAttachments(articol.attachments);
    setTime(timeAgo.format(Number(articol.postari[0].timestamp * 1000)));
    setRelated(articol.related);
    cb();
  });
};

export const incarcaArticoleBlog = (
  setPagini,
  setPostari,
  setCategorii,
  page = 1,
  categorieSelectata = 'toate'
) => {
  const url = `${urlAPI}?posts&page=${page}&categorie=${categorieSelectata}&per_page=9`;
  axios.get(url).then((res) => {
    const postari = res.data;
    setPagini(postari.numarPagini);
    setPostari(postari.postari);
    setCategorii(postari.categorii);
    const timelineGsap = gsap.timeline({ duration: 0.1, stagger: 0.1 });
    timelineGsap.from('.thepostcard', {
      ease: Power2.easeInOut,
      duration: 0.04,
      scale: 1.05,
      y: -60,
      opacity: 0,
      stagger: 0.09,
    });
  });
};

export const getPosts = (update, per_page = 6, category = 'toate', cb) => {
  const url = category === 'toate'
    ? `${urlAPI}?posts&per_page=${per_page}`
    : `${urlAPI}?posts&per_page=${per_page}&categorie=${category}`;
  axios.get(url).then((res) => {
    update(res.data.postari);
    cb();
  });
};

const API = () => {};

export default API;
