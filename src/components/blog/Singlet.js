import React, { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Feedback from './Feedback';
import Eticheta from './Eticheta';
import Atasamente from './Atasamente';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { incarcaArticol } from '../reuse/API';
import Loader from '../Loader/Loader';
import gsap, { Power2 } from 'gsap';

const Scroll = ({ percent }) => (
  <div
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      background: '#eee',
      width: percent * 100 + '%',
      height: 4,
      zIndex: 21312321321,
      opacity: 0.6,
    }}
  />
);

const Meta = ({ categorie, desc, data, titlu, tags = null }) => (
  <>
    <Typography
      color="primary"
      style={{
        marginBottom: '10px',
        textAlign: 'left',
        textTransform: 'uppercase',
        display: 'block',
      }}
      title="Categorie articol"
      variant="body2"
      component="strong">
      {categorie}
    </Typography>
    <Typography
      color="textPrimary"
      variant="h4"
      component="h1"
      gutterBottom
      dangerouslySetInnerHTML={{ __html: titlu }}></Typography>

    {desc.length > 0 && (
      <Typography
        color="textSecondary"
        style={{ marginBottom: '10px', textAlign: 'left' }}
        variant="body1"
        component="h2">
        {desc}
      </Typography>
    )}
    <div className="desc">
      <Typography
        color="textPrimary"
        variant="body2"
        component="div"
        gutterBottom
        style={{ textAlign: 'left', opacity: 0.8 }}>
        <div style={{ marginLeft: '0px', marginTop: '0px' }}>
          <Typography
            color="textSecondary"
            variant="body2"
            component="span"
            style={{ marginRight: '6px' }}>
            Postat {data}
            <span className="etichete">
              {tags !== '' && <>&nbsp;&middot;&nbsp; Etichete:</>}
            </span>
          </Typography>
          <span className="etichete">
            {String(tags) !== '' &&
              String(tags)
                .split(',')
                .map((tag) => (
                  <Eticheta key={tag} denumire={tag.replace('#', '')} />
                ))}
          </span>
        </div>
      </Typography>
    </div>
  </>
);

const RelatedArticle = ({ titlu, urlfriendly }) => (
  <Link to={'/p/' + urlfriendly} className="related_article">
    <Typography
      color="textPrimary"
      variant="body1"
      component="p"
      gutterBottom
      dangerouslySetInnerHTML={{ __html: titlu }}></Typography>
  </Link>
);

export default function Singlet({ post_id }) {
  const [timeAgo, setTimeAgo] = useState('');
  const [articol, setArticol] = useState('');
  const [relatedArticles, setRelated] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [left, setLeft] = useState(0);

  const artic = useRef(null);

  const handleScroll = () => {
    if (artic.current !== null) {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        artic.current.clientHeight - document.documentElement.clientHeight;
      let scrolled = winScroll / (height + 150);
      if (scrolled >= 0.999) scrolled = 0.999;
      setLeft(scrolled);
    }
  };

  useEffect(() => {
    incarcaArticol(
      post_id,
      setTimeAgo,
      setArticol,
      setRelated,
      setAttachments,
      () => {
        const timelineGsap = gsap.timeline({ duration: 0.1, stagger: 0.15 });
        timelineGsap.from('.whitebg', {
          ease: Power2.easeInOut,
          duration: 0.4,
          y: -40,
          opacity: 0,
          stagger: 0.2,
        });
      }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post_id]);

  return (
    <>
      <Helmet>
        <title>{`${articol.titlu} - OSUT`}</title>
        <meta name="description" content={articol.descriere_scurta} />
      </Helmet>
      <Scroll percent={left} />
      <div id="thumbPostDiv">
        {articol.video === '' && (
          <picture>
            {articol.poza_webp !== '' && (
              <source
                srcSet={'https://api.osut.ro/' + articol.poza_webp}
                type="image/webp"
              />
            )}
            <img src={articol.poza} alt={articol.titlu} />
          </picture>
        )}
      </div>

      <Container maxWidth="lg" className="post_mare" style={{ marginTop: '50px' }}>
        {articol ? (
          <Grid
            container
            spacing={4}
            direction="row"
            justify="flex-start"
            style={{ position: 'relative' }}>
            <Grid item xs={12} md={8}>
              <div className="whitebg nopadding" ref={artic}>
                {articol.video !== '' ? (
                  <video
                    width="100%"
                    autoPlay
                    controls
                    muted
                    style={{ borderRadius: '0px', marginBottom: 20, width: '100%' }}
                    loop={true}>
                    <source src={articol.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <picture>
                    {articol.poza_webp !== '' && (
                      <source
                        srcSet={'https://api.osut.ro/' + articol.poza_webp}
                        type="image/webp"
                      />
                    )}
                    <img src={articol.poza} alt={articol.titlu} />
                  </picture>
                )}
                <div
                  style={{ maxWidth: '75ch', margin: '0px auto', padding: '0px 3px' }}
                  id="continutArticolDiv">
                  <Meta
                    titlu={articol.titlu}
                    desc={articol.descriere_scurta}
                    data={timeAgo}
                    tags={articol.tags}
                    categorie={articol.denumire_categorie}
                  />
                  <section id="continut_articol">
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      gutterBottom
                      dangerouslySetInnerHTML={{ __html: articol.continut }}
                    />
                  </section>
                  <Feedback postid={articol.id} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div id="sidebarArticol">
                {attachments.length > 0 && (
                  <div className="whitebg" style={{ padding: 0, marginBottom: '30px' }}>
                    <Typography
                      color="textPrimary"
                      variant="h5"
                      component="h6"
                      style={{
                        borderBottom: '1px solid rgba(180,180,190,.2)',
                        padding: '20px',
                      }}>
                      Atașamente
                    </Typography>
                    <Atasamente array={attachments} />
                  </div>
                )}
                <div className="whitebg" style={{ padding: 0 }}>
                  {Array.isArray(relatedArticles) && relatedArticles.length > 0 && (
                    <Typography
                      color="textPrimary"
                      variant="h5"
                      component="h6"
                      style={{
                        borderBottom: '1px solid rgba(180,180,190,.2)',
                        padding: '20px',
                      }}>
                      Din aceeași categorie
                    </Typography>
                  )}
                  {Array.isArray(relatedArticles) &&
                    relatedArticles.map((item) => (
                      <RelatedArticle
                        key={item.id}
                        titlu={item.titlu}
                        urlfriendly={item.urlfriendly}
                        id={item.id}
                        tags={item.tags}
                      />
                    ))}
                </div>
              </div>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Loader />
            Se încarcă...
          </Grid>
        )}
      </Container>
    </>
  );
}
