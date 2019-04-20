import Graph from './Graph'

test('constructor', () => {
  expect.assertions(5)
  let g = new Graph(new Set([1, 2, 3]), new Array([1, 2], [2, 3]))
  expect(Object.keys(g.alist)).toEqual(['1', '2', '3'])
  expect(g.alist[1]).toEqual(new Set([2]))
  expect(g.alist[3]).toEqual(new Set())
  let h1 = new Graph()
  let h2 = new Graph()
  h1.add_vertex(1)
  expect(Object.keys(h1.alist)).toEqual(['1'])
  expect(Object.keys(h2.alist)).toEqual([])
})

test('get_vertices', () => {
  expect.assertions(2)
  let g = new Graph(new Set([1, 2, 3]), [[1, 2], [2, 3]])
  expect(g.get_vertices()).toEqual(new Set(['1', '2', '3']))
  let h = new Graph()
  expect(h.get_vertices()).toEqual(new Set())
})
