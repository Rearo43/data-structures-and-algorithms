'use strict';

class Nodes { //Vertex

  constructor(value) {
    this.value = value;
    this.connects = [];
  }
}

class Edge {

  constructor(source, destination, weight=null) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {

  constructor() {
    this.relation = [];
    this.edges = [];
  }

  addNode(node) {
    const newNode = new Nodes();

    this.relation.push(node);

    return newNode;
  }

  addEdge(left, right, weight = null) { //Relationship Both Ways
    left.connects.push(right);
    right.connects.push(left);

    const edge = new Edge(left, right, weight);

    this.edges.push(edge);
  }

  getNodes() {
    return this.relation;
  }

  getNeighbors(node) {
    const edges = [];

    this.edges.forEach(edge => {

      if (edge.source === node.value) {
        edges.push(edge);
      }
    });

    return edges;
  }

  size() {
    return this.relation.length;
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
it('testing getNeighbors ', () => {
  graph.addNode(nodeGGG);
  graph.addEdge(nodeGGG, nodeBBB);
  expect(graph.getNeighbors(nodeGGG)).toEqual(1);
});


