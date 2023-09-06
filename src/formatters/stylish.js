import _ from 'lodash';

// Use true or false for parameter haveChanges.
const indent = (depth, haveChanges) => {
  const indentCount = 4;
  const leftShift = 2;
  const indentSymbol = ' ';
  return haveChanges ? indentSymbol.repeat(indentCount * depth - leftShift)
    : indentSymbol.repeat(indentCount * depth);
};

const stylishValue = (node, depth) => {
  if (!_.isObject(node)) {
    return String(node);
  }
  const displayValue = Object.entries(node).flatMap(([key, value]) => `${indent(depth + 1, false)}${key}: ${stylishValue(value, depth + 1)}`);
  return `{\n${displayValue.join('\n')}\n${indent(depth, false)}}`;
};

const buildStylish = (node, depth = 1) => {
  const result = node.flatMap((data) => {
    switch (data.type) {
      case 'nested':
        return `${indent(depth, false)}${data.key}: {\n${buildStylish(data.children, depth + 1)}\n${indent(depth, false)}}`;
      case 'added':
        return `${indent(depth, true)}+ ${data.key}: ${stylishValue(data.value, depth)}`;
      case 'deleted':
        return `${indent(depth, true)}- ${data.key}: ${stylishValue(data.value, depth)}`;
      case 'changed':
        return `${indent(depth, true)}- ${data.key}: ${stylishValue(data.initialValue, depth)}\n${indent(depth, true)}+ ${data.key}: ${stylishValue(data.changedValue, depth)}`;
      case 'unchanged':
        return `${indent(depth, false)}${data.key}: ${stylishValue(data.value, depth)}`;
      default: throw new Error(`Wrong type of data ${data.type}.`);
    }
  });
  return `${result.join('\n')}`;
};

const displayStylish = (node) => `{\n${buildStylish(node)}\n}`;

export default displayStylish;
