'use strict';

class Nodes {
  //Vertex

  constructor(value) {
    this.value = value;
    this.connects = new Set(); //vertex
  }
}

class Edge {
  constructor(origin, destination, weight = null) {
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.vertex = new Set();
  }

  addNode(node) {
    // const newNode = new Nodes(node.value);
    
    return this.vertex.add(new Nodes(node.value));

    // return newNode;
  }

  addEdge(origin, destination) {
    let nodeOO, nodeDD;

    this.vertex.forEach((node) => {
      if (node.value === origin.value) {
        nodeOO = node;
      }
      if (node.value === destination.value) {
        nodeDD = node;
      }
    });

    if (nodeOO === undefined || nodeDD === undefined) {
      throw new Error('Node(s) Not in Graph');
    }

    let myEdges = new Edge(nodeOO, nodeDD);
    this.vertex.forEach((node) => {
      if (node.value === origin.value) {
        node.connects.add(myEdges);
      }
      if (node.value === destination.value) {
        node.connects.add(myEdges);
      }
    });
  }

  getNodes() {
    return this.vertex;
  }

  getNeighbors(node) {
    let listOfNeighbors = {};
    let currNode;

    this.vertex.forEach((V) => {
      if (V.value === node.value) {
        currNode = V;
      }
    });

    currNode.connects.forEach((C) => {
      if (C.origin.value === currNode.value) {
        listOfNeighbors[C.destination.value] = C.weight; //if no weight it's null
      } else {
        listOfNeighbors[C.origin.value] = C.weight; //if no weight it's null
      }
    });
  }

  size() {
    return this.vertex.size;
  }
}

/* TEST for graph.test.js below
------------------------------------------------------------------------------------------------ */
const graph = new Graph();
let nodeAAA = new Nodes('AAA');
let nodeBBB = new Nodes('BBB');
let nodeCCC = new Nodes('CCC');
let nodeDDD = new Nodes('DDD');
let nodeEEE = new Nodes('EEE');
let nodeFFF = new Nodes('FFF');
let nodeGGG = new Nodes('GGG');
// it('testing getNeighbors ', () => {
//   graph.addNode(nodeGGG);
//   graph.addEdge(nodeGGG, nodeBBB);
//   expect(graph.getNeighbors(nodeGGG)).toEqual(1);
// });

it('graph working', () => {
  expect(graph.size()).toStrictEqual(0);
});

it('add one node to graph', () => {
  graph.addNode(nodeAAA);
  graph.addNode(nodeBBB);
  graph.addNode(nodeCCC);

  expect(graph.size()).toStrictEqual(3);
});

it('proof of added edge', () => {
  graph.addEdge(nodeAAA, nodeCCC);

  expect(graph.getNeighbors(nodeAAA)).toStrictEqual(['CCC', null]);
});
