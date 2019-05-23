import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Fade, Typography } from '@material-ui/core';

// Define the styling for all the Typography components with transitions here
const typographyStyles = makeStyles({
    root: {
        color: '#2088FF',
    },
});

export function TypographyFade(props) {
    const { delay, timeout, ...other } = props;
    const classes = typographyStyles();
    return (
        <Fade in style={{ transitionDelay: delay }} timeout={timeout}>
            <Typography className={classes.root} {...other} />
        </Fade>
    );
}