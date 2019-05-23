import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core/';
import { TypographyFade } from '../components/TypographyTransitions'

class HomePage extends Component {
  render() {
    return (
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TypographyFade align="left" variant="h1" timeout={1000}>Henry Wee</TypographyFade>
          <TypographyFade align="left" delay={500} variant="h3" timeout={1000}>Software Engineering Student</TypographyFade>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
