import React, { Component } from 'react';
import Game from 'phaser-maze-game';
import { Grid } from '@material-ui/core/';

class MazeGamePage extends Component {
  render() {
    return (
      <Grid style={{ padding: 25 }}>
        {/* <Typography variant="h2" gutterBottom>
          Maze Game
        </Typography> */}
        <Game />
      </Grid>
    );
  }
}

export default MazeGamePage;
