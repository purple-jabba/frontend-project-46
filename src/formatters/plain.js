import path from 'path';
import _ from 'lodash';

const stringify = (node) => {
  if (_.isObject(node)) {
    return '[complex value]';
  }
  if (typeof node === 'string') {
    return `'${node}'`;
  }
  return String(node);
};

const displayPlain = (node, keypath = '') => {
  const result = node
    .map((data) => {
      const collectedKeys = path.join(keypath, data.key).replace('/', '.');
      switch (data.type) {
        case 'nested':
          return displayPlain(data.children, collectedKeys);
        case 'added':
          return `Property '${collectedKeys}' was added with value: ${stringify(data.value)}`;
        case 'deleted':
          return `Property '${collectedKeys}' was removed`;
        case 'changed':
          return `Property '${collectedKeys}' was updated. From ${stringify(data.value1)} to ${stringify(data.value2)}`;
        case 'unchanged':
          return null;
        default: throw new Error(`Wrong type of data ${data.type}.`);
      }
    })
    .filter(Boolean);
  return result.join('\n');
};

export default displayPlain;
