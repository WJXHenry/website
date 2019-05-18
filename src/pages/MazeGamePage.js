import React, { Component } from 'react';
import Game from '../Phaser/Game';
import { Grid, Typography } from '@material-ui/core/';

class MazeGamePage extends Component {
  render() {
    return (
        <Grid>
            <Typography variant="h2">Maze Game</Typography>
            <Game />
        </Grid>
    );
  }
}

export default MazeGamePage;
