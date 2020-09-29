'use strict';

// class Node { //Vertex

//     constructor(value) {
//       this.value = value;
//       this.neighbor = new Set();
//     }
// }

// class Edge {

//     constructor(vertex, weight) {
//       this.vertex = vertex;
//       this.weight = weight;
//     }
// }

// class Graph {

//   constructor() {
//     this.connections = new Set();
//   }

//   addVertex(vertex) {
//     this.connections.set(vertex, []);
//   }

//   addDirectedEdge(startVertex, endVertex, weight = 0) {
//     if (!this.connections.has(startVertex) || !this.connections.has(endVertex)) {
//       throw new Error('__ERROR__ Invalid Nodes');
//     }

//     const adjacencies = this.connections.get(startVertex);
//     adjacencies.push(new Edge(endVertex, weight));
//   }

//   getNeighbors(vertex) {
//     if (!this.connections.has(vertex)) {
//       throw new Error('__ERROR__ Invalid Vertex', vertex);
//     }

//     return [...this.connections.get(vertex)];
//   }

//   bfs(startNode) {

//     const queue = [];
//     const visitedNodes = new Set(); // why array NOT ideal?

//     queue.push(startNode);
//     visitedNodes.add(startNode);  
//     // Big O time add to array? O(1)
//     // Big O time add to set? O(1)


//     while (queue.length) {

//       const currentNode = queue.shift();

//       const neighbors = this.getNeighbors(currentNode);

//       for (let neighbor of neighbors) {

//         const neighborNode = neighbor.vertex;

//         // Big O time of checking an array for existing item? O(n)
//         // Big O time of checking Set/Object (aka HashTable) ? O(1)
//         if (visitedNodes.has(neighborNode)) { // been visited????
//           continue;
//         } else {
//           visitedNodes.add(neighborNode); // mark as visited now
//         }
//         queue.push(neighborNode);
//       }
//     }

//     return visitedNodes;
// }


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


