'use strict';

class Edge {

    constructor(vertex, weight) {
      this.vertex = vertex;
      this.weight = weight;
    }
}

class Vertex { //Node

  constructor(value) {
    this.value = value;
  }
}

class Graph {

  constructor() {
    this.connections = new Map();
  }

  addVertex(vertex) {
    this.connections.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this.connections.has(startVertex) || !this.connections.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    const adjacencies = this.connections.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.connections.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }

    return [...this.connections.get(vertex)];
  }

  bfs(startNode) {

    const queue = [];
    const visitedNodes = new Set(); // why array NOT ideal?

    queue.push(startNode);
    visitedNodes.add(startNode);  
    // Big O time add to array? O(1)
    // Big O time add to set? O(1)


    while (queue.length) {

      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        // Big O time of checking an array for existing item? O(n)
        // Big O time of checking Set/Object (aka HashTable) ? O(1)
        if (visitedNodes.has(neighborNode)) { // been visited????
          continue;
        } else {
          visitedNodes.add(neighborNode); // mark as visited now
        }
        queue.push(neighborNode);
      }
    }

    return visitedNodes;
  }


/* TEST for linked-list-insert.test.js below
------------------------------------------------------------------------------------------------ */