function dfs(value, node) {

  stack = [];

  stack.push(node);

  while (stack.length != 0) {
    var curNode = stack.peek()
    if (curNode.value == value) {
      return curNode;
    }
    curNode.visited = true
    stack.push(getFirstUnvistedNode(curNode));
  }

}