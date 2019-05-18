import Graph from './graph';
import { shuffle } from '../../common/shuffle';

export default class Maze {
  constructor(size = 0) {
    this.maze = this._createGrid(size);
    this._createMaze([Math.floor(size/2), Math.floor(size/2)]);
    console.log(this.maze)
  }

  getVertices() {
    let vertices = Array.from(this.maze.getVertices());
    for (let i = 0; i < vertices.length; i++) {
      let current = vertices[i];
      vertices[i] = current.split(',').map(element => {
        return parseInt(element);
      });
    }
    return new Set(vertices);
  }

  _createGrid(size) {
    let grid = new Graph();
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        grid.addVertex([i, j]);
      }
    }
    return grid;
  }

  _createMaze(vertex, completed = null, vertices = null) {
    if (vertices == null) {
      vertices = this.getVertices();
    }
    if (completed == null) {
      completed = new Set(vertex);
    }

    let paths = shuffle(['up', 'down', 'left', 'right']);
    
    let up = [vertex[0], vertex[1]-1];
    let down = [vertex[0], vertex[1]+1];
    let left = [vertex[0]-1, vertex[1]];
    let right = [vertex[0]+1, vertex[1]];

    paths.forEach(direction => {
      if (direction == 'up') {
        if (vertices.has(up) && !completed.has(up)) {
          this.maze.addEdge([vertex, up]);
          this.maze.addEdge([up, vertex]);
          completed.add(up);
          _createMaze(up, completed, vertices);
        }
      } else if (direction == 'down') {
        if (vertices.has(down) && !completed.has(down)) {
          this.maze.addEdge([vertex, down]);
          this.maze.addEdge([down, vertex]);
          completed.add(down);
          _createMaze(down, completed, vertices);
        }
      } else if (direction == 'left') {
        if (vertices.has(left) && !completed.has(left)) {
          this.maze.addEdge([vertex, left]);
          this.maze.addEdge([left, vertex]);
          completed.add(left);
          _createMaze(left, completed, vertices);
        }
      } else if (direction == 'right') {
        if (vertices.has(right) && !completed.has(right)) {
          this.maze.addEdge([vertex, right]);
          this.maze.addEdge([right, vertex]);
          completed.add(right);
          _createMaze(right, completed, vertices);
        }
      }
    })
  }
}
