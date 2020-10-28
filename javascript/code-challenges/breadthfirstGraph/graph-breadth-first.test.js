'use strict';


function depthFirst(node, visited) {
  visited.add(node);

  const neighbors = this.getNeighbors(node);
  for (let edge of neighbors) {
    if (!visited.has(edge.vertex)) {
      depthFirst(edge.vertex, visited);
    }
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Vertex {
  //Node

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
    if (
      !this.connections.has(startVertex) ||
      !this.connections.has(endVertex)
    ) {
      throw new Error('Error: Nodes');
    }

    const adjacencies = this.connections.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.connections.has(vertex)) {
      throw new Error('Error: Vertex', vertex);
    }

    return [...this.connections.get(vertex)];
  }

  bfs(startNode) {
    const queue = [];
    const visitedNodes = new Set();

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
        if (visitedNodes.has(neighborNode)) {
          // been visited????
          continue;
        } else {
          visitedNodes.add(neighborNode); // mark as visited now
        }
        queue.push(neighborNode);
      }
    }

    return visitedNodes;
  }

  dfs(startNode) {
    const visited = new Set();

    depthFirst(startNode, visited);

    return depthFirst;
  }
}


/* TEST for linked-list-insert.test.js below
------------------------------------------------------------------------------------------------ */

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);
