// Use true or false for parameter haveChanges.
const indent = (depth, haveChanges) => {
  const indentCount = 4;
  const indentSymbol = ' ';
  return haveChanges ? indentSymbol.repeat(indentCount * depth - 2)
    : indentSymbol.repeat(indentCount * depth);
};

const displayStylish = (node, depth = 1) => {
  const buildStylish = node.flatMap((data) => {
    switch (data.type) {
      case 'nested':
        return `${indent(depth, false)}${data.key}: {\n${displayStylish(data.children, depth + 1)}`;
      case 'added':
        return `${indent(depth, true)}+ ${data.key}: ${data.value}`;
      case 'deleted':
        return `${indent(depth, true)}- ${data.key}: ${data.value}`;
      case 'changed':
        return `${indent(depth, true)}- ${data.key}: ${data.initialValue}\n${indent(depth, true)}+ ${data.key}: ${data.changedValue}`;
      case 'unchanged':
        return `${indent(depth, false)}${data.key}: ${data.value}`;
      default: throw new Error(`Wrong type of data ${data.type}.`);
    }
  });
  return `{\n${buildStylish.join('\n')}\n}`;
};

export default displayStylish;
