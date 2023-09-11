import _ from 'lodash';

const indent = (depth) => {
  const indentCount = 4;
  const leftShift = 2;
  const indentSymbol = ' ';
  return indentSymbol.repeat(indentCount * depth - leftShift);
};

const stylishValue = (node, depth) => {
  if (!_.isObject(node)) {
    return String(node);
  }
  const displayValue = Object.entries(node).flatMap(([key, value]) => `  ${indent(depth + 1)}${key}: ${stylishValue(value, depth + 1)}`);
  return `{\n${displayValue.join('\n')}\n  ${indent(depth)}}`;
};

const buildStylish = (node, depth = 1) => {
  const result = node.flatMap((data) => {
    switch (data.type) {
      case 'nested':
        return `  ${indent(depth)}${data.key}: {\n${buildStylish(data.children, depth + 1)}\n  ${indent(depth)}}`;
      case 'added':
        return `${indent(depth)}+ ${data.key}: ${stylishValue(data.value, depth)}`;
      case 'deleted':
        return `${indent(depth)}- ${data.key}: ${stylishValue(data.value, depth)}`;
      case 'changed':
        return [
          `${indent(depth)}- ${data.key}: ${stylishValue(data.value1, depth)}`,
          `${indent(depth)}+ ${data.key}: ${stylishValue(data.value2, depth)}`,
        ]
          .join('\n');
      case 'unchanged':
        return `  ${indent(depth)}${data.key}: ${stylishValue(data.value, depth)}`;
      default: throw new Error(`Wrong type of data ${data.type}.`);
    }
  });
  return `${result.join('\n')}`;
};

const displayStylish = (node) => `{\n${buildStylish(node)}\n}`;

export default displayStylish;
