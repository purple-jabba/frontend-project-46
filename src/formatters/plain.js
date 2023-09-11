import path from 'path';
import _ from 'lodash';

const plainValue = (node) => {
  if (_.isObject(node)) {
    return '[complex value]';
  }
  if (typeof node === 'string') {
    return `'${node}'`;
  }
  return String(node);
};

const displayPlain = (node, keypath = '') => {
  const filterUnchangedType = node.filter((data) => data.type !== 'unchanged');
  const result = filterUnchangedType.map((data) => {
    const collectedKeys = path.join(keypath, data.key).replace('/', '.');
    switch (data.type) {
      case 'nested':
        return displayPlain(data.children, collectedKeys);
      case 'added':
        return `Property '${collectedKeys}' was added with value: ${plainValue(data.value)}`;
      case 'deleted':
        return `Property '${collectedKeys}' was removed`;
      case 'changed':
        return `Property '${collectedKeys}' was updated. From ${plainValue(data.value1)} to ${plainValue(data.value2)}`;
      default: throw new Error(`Wrong type of data ${data.type}.`);
    }
  });
  return result.join('\n');
};

export default displayPlain;
