/*

https://leetcode.com/problems/clone-graph/

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}


Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

*/

function cloneGraph(originalNode: Node | null, clonedNode?: Node | null, mapOfClones?: Map<number, boolean> | null): Node | null {

  if (!originalNode) {
      return;
  }

  if (!clonedNode) {
      clonedNode = new Node (originalNode.val)
  };

  if (!mapOfClones) {
      mapOfClones = new Map ();
      mapOfClones.set(clonedNode.val, true) // maps are Node, boolean
  }

  for (let i = 0; i < originalNode.neighbors.length; i++) {
      const curr: Node = originalNode.neighbors[i];
      if (mapOfClones.has(curr.val)) {
          continue;
      }
      mapOfClones.set(curr.val, true);
      console.log('logging mapOfClones', mapOfClones);
      let newClonedNode: Node = new Node (curr.val);
      clonedNode.neighbors.push(newClonedNode);
      cloneGraph(curr, newClonedNode, mapOfClones);
  }
  console.log('here is clonedNode', clonedNode)
return clonedNode;
};

/*
recursively call cloneGraph with the originalNode, cloneNode, and a map of the nodes that have already been cloned

rreturn the cloned node

*/