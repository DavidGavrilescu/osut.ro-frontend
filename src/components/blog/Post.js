import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import MUILink from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';
import './post.css';
import TimeAgo from 'javascript-time-ago';

const timeAgo = new TimeAgo('ro-RO');

const truncate = (input) => {
  input += '';
  return input.length > 130 ? `${input.substring(0, 140)}...` : input;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: 'none',
    borderColor: 'rgba(29,34,46,.1)',
    transition: 'transform .3s',
    '&:last-child': {
      paddingBottom: 24,
    },
    '&:hover': {
      transform: 'translateY(7px)',
      '&>img': {
        opacity: 0,
      },
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: -30,
    fontSize: '13px',
    opacity: 1,
    textAlign: 'left',
  },
});

const Post = ({
  preview_video = '',
  video = '',
  urlfriendly,
  culoare_categorie,
  timestamp,
  view = 'grid',
  loading = false,
  test = false,
  titlu,
  descriere_scurta,
  continut,
  id_autor,
  type,
  id,
  denumire_categorie,
  poza,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [hovered, setHovered] = useState(true);
  const titluArticol = useRef(null);
  const vid = useRef(null);
  const original_date = timeAgo.format(Number(timestamp * 1000));

  function goToPost() {
    if (!test) history.push('/p/' + urlfriendly);
  }

  useEffect(() => {
    if (hovered && vid.current) vid.current.play();
  }, [titluArticol, hovered, vid]);

  if (preview_video !== '') {
    return (
      <Card
        className={classes.root + ' thepostcard video'}
        variant="outlined"
        id="cardz">
        <div className="timp">{original_date}</div>
        <video
          ref={vid}
          height="100%"
          style={{ height: '100%', position: 'absolute', left: '-50%', top: '0px' }}
          autoPlay
          muted
          loop={true}>
          <source src={preview_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="descrierea">
          <div className="text">
            <Link to={'/p/' + urlfriendly} style={{ textDecoration: 'none' }}>
              <MUILink color="textPrimary" underline="none">
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ padding: '10px 10px 5px 10px' }}
                  dangerouslySetInnerHTML={{ __html: titlu }}></Typography>
              </MUILink>
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  if (view === 'grid') {
    return (
      <Card className={classes.root + ' thepostcard'} variant="outlined" id="cardz">
        <div className="postareBlogCard">
          <div className="timp">{original_date}</div>
          <Link to={'/p/' + urlfriendly} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ paddingTop: '0px' }}>
              {poza !== '' && (
                <img
                  alt={titlu}
                  src={poza}
                  style={{
                    width: '100%',
                    borderRadius: '10px 10px 0px 0px',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                  className="pozaArticol"
                />
              )}
              <Typography
                variant="h5"
                component="h2"
                style={{ padding: '20px 10px 5px 20px' }}
                dangerouslySetInnerHTML={{ __html: titlu }}></Typography>
            </div>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div color="textPrimary" className="post_horizontal">
      <CardActionArea onClick={() => goToPost()} className={classes.root}>
        <Link to={'#'}>
          <img alt={titlu} src={poza} />
          <p>
            <b>{denumire_categorie}</b>
          </p>
        </Link>
        <div className="info">
          <Typography
            color="textPrimary"
            variant="h5"
            component="h1"
            style={{ textTransform: 'none', marginBottom: '20px' }}
            gutterBottom>
            {titlu}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: truncate(descriere_scurta) }}
          />
        </div>
        <Typography
          color="textSecondary"
          variant="body2"
          component="small"
          style={{
            textTransform: 'none',
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            opacity: 0.6,
          }}></Typography>
      </CardActionArea>
    </div>
  );
};
export default Post;
