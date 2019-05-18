import Maze from './maze';

test('constructor', () => {
  expect.assertions(1);
  let maze = new Maze(3);
  expect(maze.getMazeVertices()).toEqual(
    new Set([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2]
    ])
  );
});
