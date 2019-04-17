/**
 * Directed Graph Class
 *
 * This graph class is a container that holds a set
 * of vertices and a list of directed edges.
 * Edges are modelled as tuples (u,v) of vertices.
 *
 * Uses an adjacency list representation. Loops
 * and parallel copies of edges can be stored.
 */

export default class Graph {
  constructor(vertices = new Set(), edges = new Array()) {
    this.alist = {};

    vertices.forEach(v => {
      this.add_vertex(v);
    });
    edges.forEach(e => {
      this.add_edge(e);
    });
  }

  get_vertices() {
    return new Set(Object.keys(this.alist));
  }

  get_edges() {
    // TODO
    let edges = [];
    console.log(Object.entries(this.alist));
    console.log(Object.values(this.alist));
    // TODO: fix
    return edges;
  }

  add_vertex(v) {
    if (!(v in this.alist)) {
      this.alist[v] = new Set();
    }
  }

  add_edge(e) {
    if (!this.is_vertex(e[0]) || !this.is_vertex(e[1])) {
      throw new Error('An endpoint is not in graph');
    }
    this.alist[e[0]].add(e[1]);
  }

  is_vertex(v) {
    return v in this.alist;
  }

  is_edge(e) {
    if (!(e[0] in this.alist)) {
      return false;
    }
    return this.alist[e[0]].has(e[1]);
  }

  neighbours(v) {
    // TODO
  }

  is_walk(walk) {
    // TODO
  }

  is_path(path) {
    // TODO
  }
}
