import Graph from './graph';

test('constructor', () => {
  expect.assertions(5);
  let g = new Graph(new Set([1, 2, 3]), new Array([1, 2], [2, 3]));
  expect(Object.keys(g.alist)).toEqual(['1', '2', '3']);
  expect(g.alist[1]).toEqual(new Set([2]));
  expect(g.alist[3]).toEqual(new Set());
  let h1 = new Graph();
  let h2 = new Graph();
  h1.add_vertex(1);
  expect(Object.keys(h1.alist)).toEqual(['1']);
  expect(Object.keys(h2.alist)).toEqual([]);
});

test('get_vertices', () => {
  expect.assertions(2);
  let g = new Graph(new Set([1, 2, 3]), [[1, 2], [2, 3]]);
  expect(g.get_vertices()).toEqual(new Set(['1', '2', '3']));
  let h = new Graph();
  expect(h.get_vertices()).toEqual(new Set());
});

test('get_edges', () => {
  expect.assertions(2);
  let g = new Graph(new Set([1, 2, 3]), [[1, 2], [2, 3], [3, 1]]);
  expect(g.get_edges().sort()).toEqual([[1, 2], [2, 3], [3, 1]]);
  g.add_edge([2, 1]);
  expect(g.get_edges().sort()).toEqual([[1, 2], [2, 1], [2, 3], [3, 1]]);
});

test('add_vertex', () => {
  expect.assertions(3);
  let g = new Graph();
  expect(g.get_vertices().size).toEqual(0);
  g.add_vertex(1);
  g.add_vertex('vertex');
  expect(g.get_vertices().has('vertex')).toEqual(true);
  expect(g.get_vertices().has('2')).toEqual(false);
});

test('add_edge', () => {
  expect.assertions(3);
  let g = new Graph();
  g.add_vertex(1);
  g.add_vertex(2);
  g.add_edge([1, 2]);
  expect(g.alist[1].has(2)).toEqual(true);
  expect(g.alist[2].has(1)).toEqual(false);
  g.add_edge([1, 2]);
  expect(g.alist[1]).toEqual(new Set([2]));
});

test('is_vertex', () => {
  expect.assertions(3);
  let g = new Graph(new Set([1, 2]));
  expect(g.is_vertex(1)).toEqual(true);
  expect(g.is_vertex(3)).toEqual(false);
  g.add_vertex(3);
  expect(g.is_vertex(3)).toEqual(true);
});

test('is_edge', () => {
  expect.assertions(3);
  let g = new Graph(new Set([1, 2]), [[1, 2]]);
  expect(g.is_edge([1, 2])).toEqual(true);
  expect(g.is_edge([2, 1])).toEqual(false);
  g.add_edge([2, 1]);
  expect(g.is_edge([2, 1])).toEqual(true);
});

test('neighbours', () => {
  expect.assertions(4);
  let edges = [[1, 2], [1, 4], [3, 1], [3, 4], [2, 4], [1, 2]];
  let g = new Graph(new Set([1, 2, 3, 4, 5]), edges);
  expect(g.neighbours(1)).toEqual([2, 4]);
  expect(g.neighbours(4)).toEqual([]);
  expect(g.neighbours(3)).toEqual([1, 4]);
  expect(g.neighbours(2)).toEqual([4]);
});

test('is_walk', () => {
  expect.assertions(6);
  let edges = [[1, 2], [1, 3], [2, 5], [3, 4], [4, 2], [5, 4]];
  let g = new Graph(new Set([1, 2, 3, 4, 5]), edges);
  expect(Graph.is_walk(g, [3, 4, 2, 5, 4, 2])).toEqual(true);
  expect(Graph.is_walk(g, [5, 4, 2, 1, 3])).toEqual(false);
  expect(Graph.is_walk(g, [2])).toEqual(true);
  expect(Graph.is_walk(g, [])).toEqual(false);
  expect(Graph.is_walk(g, [1, 6])).toEqual(false);
  expect(Graph.is_walk(g, [6])).toEqual(false);
});

test('is_path', () => {
  expect.assertions(2);
  let edges = [[1, 2], [1, 3], [2, 5], [3, 4], [4, 2], [5, 4]];
  let g = new Graph(new Set([1, 2, 3, 4, 5]), edges);
  expect(Graph.is_path(g, [3, 4, 2, 5, 4, 2])).toEqual(false);
  expect(Graph.is_path(g, [3, 4, 2, 5])).toEqual(true);
});
