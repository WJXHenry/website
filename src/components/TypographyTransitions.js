import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Fade, Typography } from '@material-ui/core';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

// Define the styling for all the Typography components with transitions here
const typographyStyles = makeStyles({
  root: {
    // color: '#2088FF',
    color: '#555555'
  }
});

TypographyFade.propTypes = {
  delay: PropTypes.number,
  timeout: PropTypes.number
};

export function TypographyFade(props) {
  const { delay, timeout, ...other } = props;
  const classes = typographyStyles();
  return (
    <Fade in style={{ transitionDelay: delay }} timeout={timeout}>
      <Typography className={classes.root} {...other} />
    </Fade>
  );
}

TypographyTyped.propTypes = {
  delay: PropTypes.number
};

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 8000
};

export function TypographyTyped(props) {
  const { delay, ...other } = props;
  const classes = typographyStyles();
  return (
    <Typography className={classes.root} {...other}>
      <Typist
        avgTypingDelay={35}
        cursor={cursor}
        startDelay={delay}
        {...other}
      />
    </Typography>
  );
}
