'use strict';

class Edges {
  constructor(node1, node2, weight = 1) {
    this.origin = node1;
    this.destination = node2;
    this.weight = weight;
  }
}

class Vertex {
  constructor(val) {
    this.val = val;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
    this.numberOfEdges = 0;
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.vertices.push(vertex);
    this.edges[vertex] = [];
    return vertex;
  }

  addEdge(origin, destination, weight = 1) {
    if (!this.edges[origin] || !this.edges[destination]) {
      return null;
    }
    let edge = new Edges(origin, destination, weight);
    this.edges[origin].push(edge);
    this.numberOfEdges++;
  }

  getNeighbors(vertex) {
    return Object.values(this.edges)
      .flat()
      .filter((edge) => edge.origin === vertex || edge.destination === vertex);
  }

  getVertex() {
    return this.vertices;
  }

  size() {
    return this.vertices.length;
  }

  //added new methods to the Graph class , I use it in the getEdge function
  getNeighborsByValue(vertexVal) {
    let vert = this.vertices.filter((v) => v.val === vertexVal);
    if (vert.length > 0) {
      return this.getNeighbors(vert[0]);
    } else {
      return null;
    }
  }

  getVertexByValue(vertexVal) {
    let vert = this.vertices.filter((v) => v.val === vertexVal);
    return vert ? vert[0] : null;
  }
}

function getEdges(arr, graph) {
  let price = 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    let neigbors = graph.getNeighborsByValue(arr[i]);
    //
    let nextCity = graph.getVertexByValue(arr[j]);

    if (!neigbors || !nextCity) {
      return 0;
    } else {
      let possibleEdge = neigbors.filter(
        (edge) => edge.destination.val === arr[j]
      );

      if (possibleEdge.length > 0) {
        price += possibleEdge[0].weight;
      } else {
        return 0;
      }
    }
    i++;
    j++;
  }
  return price;
}

/* TEST for graph-get-edge.test.js below
------------------------------------------------------------------------------------------------ */
let graph = new Graph();

let AAA = graph.addVertex('AAA');
let BBB = graph.addVertex('BBB');
let CCC = graph.addVertex('CCC');
let DDD = graph.addVertex('DDD');
let EEE = graph.addVertex('EEE');
let FFF = graph.addVertex('FFF');

graph.addEdge(AAA, DDD, 100);
graph.addEdge(BBB, CCC, 75);
graph.addEdge(DDD, AAA, 50);
graph.addEdge(AAA, EEE, 20);
graph.addEdge(AAA, FFF, 15);
graph.addEdge(DDD, EEE, 7);

it('return price total for direct connections', () => {
  expect(getEdges(['AAA', 'DDD', 'EEE'], graph)).toEqual(107);
  expect(getEdges(['DDD', 'AAA', 'EEE'], graph)).toEqual(70);
  expect(getEdges(['BBB', 'CCC'], graph)).toEqual(75);
});

it('return price OF 0 for lack of direct connections', () => {
  expect(getEdges(['AAA', 'BBB', 'CCC'], graph)).toEqual(0);
  expect(getEdges(['CCC', 'DDD', 'BBB'], graph)).toEqual(0);
  expect(getEdges(['BBB', 'FFF'], graph)).toEqual(0);
});
