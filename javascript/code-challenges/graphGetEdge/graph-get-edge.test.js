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

  //////// added new methods to the Graph class , I use it in the getEdge function
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

  //////////////////////////////////////////////////
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
      //  console.log(possibleEdge[0].weight)
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

let graph = new Graph();

let austin = graph.addVertex("Austin");
let dallas = graph.addVertex("Dallas");
let huston = graph.addVertex("Huston");
let sverdlovs = graph.addVertex("Sverdlovsk");
let chernovci = graph.addVertex("Chernovci");
let hawaii = graph.addVertex("Hawaii");

graph.addEdge(austin, sverdlovs, 100);

graph.addEdge(austin, chernovci, 20);
graph.addEdge(austin, hawaii, 15);
graph.addEdge(sverdlovs, chernovci, 7);

getEdges(["Austin", "Sverdlovsk", "Chernovci"], graph);
// getEdges([Austin,Sverdlovsk,Chernovci])

// graph.getNeigbors(nodeKate)

// graph.getNeigborsByValue('Austin')
// graph.getVertexByValue('Austin')

// console.log(nodeKate)
// graph.breadthFirstGraph(nodeKate).length

// console.log(graph.getNeigbors(nodeKate))
