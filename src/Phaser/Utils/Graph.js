/**
 * Directed Graph Class
 *
 * This graph class is a container that holds a set
 * of vertices and a list of directed edges.
 * Edges are modelled as tuples (u,v) of vertices.
 *
 * Uses an adjacency list representation. Loops
 * and parallel copies of edges can be stored.
 *
 * TODO: write some tests
 */

export default class Graph {
  constructor(vertices = new Set(), edges = new Array()) {
    this.alist = {}

    vertices.forEach(v => {
      this.add_vertex(v)
    })
    edges.forEach(e => {
      this.add_edge(e)
    })
  }

  get_vertices() {
    return new Set(Object.keys(this.alist))
  }

  get_edges() {
    let edges = []
    Object.keys(this.alist).forEach(key => {
      this.alist[key].forEach(vertex => {
        edges.push([Number(key), vertex])
      })
    })
    return edges
  }

  add_vertex(v) {
    if (!(v in this.alist)) {
      this.alist[v] = new Set()
    }
  }

  add_edge(e) {
    if (!this.is_vertex(e[0]) || !this.is_vertex(e[1])) {
      throw new Error('An endpoint is not in graph')
    }
    this.alist[e[0]].add(e[1])
  }

  is_vertex(v) {
    return v in this.alist
  }

  is_edge(e) {
    if (!(e[0] in this.alist)) {
      return false
    }
    return this.alist[e[0]].has(e[1])
  }

  neighbours(v) {
    if (!this.is_vertex(v)) {
      throw new Error('Vertex not in graph')
    }
    return Array.from(this.alist[v])
  }

  static is_walk(g, walk) {
    if (walk.length === 0)
      // Should have at least one vertex
      return false

    if (walk.length === 1) return g.is_vertex(walk[0])

    for (let i = 0; i < walk.length - 1; i++) {
      if (!g.is_edge([walk[i], walk[i + 1]])) {
        return false
      }
    }
    return true
  }

  static is_path(g, path) {
    if (new Set(path).size < path.length) return false

    return this.is_walk(g, path)
  }
}
