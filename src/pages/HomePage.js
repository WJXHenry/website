import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import { TypographyFade } from '../components/TypographyTransitions';

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
        alignItems="center"
        justify="center"
        direction="column"
        style={{ marginTop: window.innerHeight * 0.6 }}
      >
        <Grid item>
          <TypographyFade align="left" variant="h1" timeout={1000}>
            Henry Wee
          </TypographyFade>
          <TypographyFade align="left" delay={500} variant="h3" timeout={1000}>
            Software Engineering Student
          </TypographyFade>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  height: PropTypes.number
};

export default HomePage;
