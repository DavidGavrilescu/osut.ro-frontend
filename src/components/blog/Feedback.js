import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import './feedback.css';
import { feedbackArticol } from '../reuse/API';
export default function Feedback({ postid }) {
  const [givenFeedback, setGivenFeedback] = useState(null);
  const [mesaj, setMesaj] = useState('');
  const [visible, setVisible] = useState(
    localStorage.hasOwnProperty('gfeedb' + postid) ? false : true
  );

  function feedbackHandler(like) {
    setGivenFeedback(like);
    if (like === true) {
      feedbackArticol(1, mesaj, postid, (r) => {
        console.log(r);
      });
      setVisible(false);
      localStorage.setItem('gfeedb' + postid, 'yes');
    } else if (like === false) {
      feedbackArticol(0, mesaj, postid, (r) => {
        console.log(r);
      });
      setVisible(false);
      localStorage.setItem('gfeedb' + postid, 'no');
    }
  }
  if (visible) {
    if (givenFeedback === true || givenFeedback === false) {
      return (
        <>
          <div className="unselectable feedback">
            <Typography
              color="textPrimary"
              variant="subtitle1"
              component="p"
              gutterBottom>
              <b>Vă mulțumim pentru feedback.</b>
            </Typography>
          </div>
        </>
      );
    } else if (givenFeedback === 'no') {
      return (
        <>
          <div className="unselectable feedback">
            <Typography
              color="textPrimary"
              variant="subtitle1"
              component="p"
              gutterBottom>
              {/* <span style={{ fontWeight: 600 }}>Ne pare rău</span>
							<br /> */}
              Cum putem să îmbunătățim această pagină?
              <TextField
                type="text"
                fullWidth={false}
                rows={4}
                variant={'filled'}
                margin={'dense'}
                style={{ width: '100%', maxWidth: '900px' }}
                multiline={true}
                autoFocus={true}
                value={mesaj}
                onChange={(e) => {
                  setMesaj(e.target.value);
                }}
              />
              <span id="buttonsFeedback">
                <Button
                  onClick={() => {
                    feedbackHandler('inapoi');
                  }}
                  variant="outlined"
                  color="default"
                  size="medium"
                  style={{ marginTop: '10px' }}>
                  Inapoi
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  style={{ marginTop: '10px' }}
                  onClick={() => {
                    feedbackHandler(false);
                  }}
                  size="medium"
                  variant="contained"
                  color="primary">
                  Trimite
                </Button>
              </span>
            </Typography>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="unselectable feedback">
            <Typography
              color="textPrimary"
              variant="subtitle1"
              component="p"
              gutterBottom>
              Ce părere ai despre această postare? &nbsp; &nbsp;
              <span id="buttonsFeedback">
                <Button
                  onClick={() => {
                    feedbackHandler('no');
                  }}
                  size="small"
                  variant="contained"
                  color="default">
                  <ThumbDownAltIcon />
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => {
                    feedbackHandler(true);
                  }}
                  size="small"
                  variant="contained"
                  style={{ background: '#4EB822', color: 'white' }}
                  color="primary">
                  <ThumbUpAltIcon />
                </Button>
              </span>
            </Typography>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <div className="unselectable feedback">
          <Typography
            color="textPrimary"
            variant="subtitle1"
            component="p"
            gutterBottom>
            Mulțumim pentru feedback. &nbsp;&nbsp;&nbsp;
            {localStorage.getItem('gfeedb' + postid) === 'no' && (
              <Button
                disabled
                size="small"
                style={{ background: '#ff4444', color: 'white' }}
                variant="contained"
                color="primary">
                <ThumbDownAltIcon />
              </Button>
            )}
            {localStorage.getItem('gfeedb' + postid) === 'yes' && (
              <Button
                disabled
                size="small"
                style={{ background: '#4EB822', color: 'white' }}
                variant="contained"
                color="primary">
                <ThumbUpAltIcon />
              </Button>
            )}
          </Typography>
        </div>
      </>
    );
  }
}
