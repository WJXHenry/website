import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import {
  TypographyFade,
  TypographyTyped
} from '../components/TypographyTransitions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      height: window.innerHeight
    });
  }

  render() {
    return (
      <Grid
        container
        // alignItems="center"
        justify="center"
        direction="column"
        style={{
          padding: '5vw',
          justifyContent: 'flex-end',
          height: window.innerHeight,
          width: window.innerWidth
        }}
      >
        <Grid item>
          <TypographyFade align="left" variant="h1" timeout={500}>
            {'Henry Wee'}
          </TypographyFade>
          <TypographyTyped align="left" delay={500} variant="h3">
            {'> Software Engineering Student'}
          </TypographyTyped>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  height: PropTypes.number
};

export default HomePage;
