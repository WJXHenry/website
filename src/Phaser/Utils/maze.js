import Graph from './graph';

export default class Maze extends Graph {
  constructor(size = 0) {
    super();
    this.createMaze(size);
  }

  createMaze(size) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.addVertex([i, j]);
      }
    }
  }

  getMazeVertices() {
    let vertices = Array.from(this.getVertices());
    for (let i = 0; i < vertices.length; i++) {
      let current = vertices[i];
      vertices[i] = current.split(',').map(element => {
        return parseInt(element);
      });
    }
    return new Set(vertices);
  }
}
