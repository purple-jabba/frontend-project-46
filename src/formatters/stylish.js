// Use true or false for parameter haveChanges.
const indent = (depth, haveChanges) => {
  const indentCount = 4;
  const indentSymbol = ' ';
  return haveChanges ? indentSymbol.repeat(indentCount * depth - 2)
    : indentSymbol.repeat(indentCount * depth);
};

const displayStylish = (differenceTree, depth = 1) => differenceTree.flatMap((data) => {
  switch (data.type) {
    case 'nested':
      console.log(`${indent(depth, false)}${data.key}: {\n${displayStylish(data.children, depth + 1)}`);
      return `${indent(depth, false)}${data.key}: {\n${displayStylish(data.children, depth + 1)}`;
    case 'added':
      console.log(`${indent(depth, true)}+ ${data.key}: ${data.value}`);
      return `${indent(depth, true)}+ ${data.key}: ${data.value}`;
    case 'deleted':
      console.log(`${indent(depth, true)}- ${data.key}: ${data.value}`);
      return `${indent(depth, true)}- ${data.key}: ${data.value}`;
    case 'changed':
      console.log(`${indent(depth, true)}- ${data.key}: ${data.initialValue}\n${indent(depth, true)}+ ${data.key}: ${data.changedValue}`);
      return `${indent(depth, true)}- ${data.key}: ${data.initialValue}\n${indent(depth, true)}+ ${data.key}: ${data.changedValue}`;
    case 'unchanged':
      console.log(`${indent(depth, false)}${data.key}: ${data.value}`);
      return `${indent(depth, false)}${data.key}: ${data.value}`;
    default: throw new Error(`Wrong type of data ${data.type}.`);
  }
});

export default displayStylish;
