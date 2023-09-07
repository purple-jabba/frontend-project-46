import displayStylish from './stylish.js';
import displayPlain from './plain.js';

const selectFormat = (node, format) => {
  switch (format) {
    case 'stylish':
      return displayStylish(node);
    case 'plain':
      return displayPlain(node);
    case 'json':
      return JSON.stringify(node);
    default: throw new Error(`Unexpected format ${format}. Use supported formats only`);
  }
};

export default selectFormat;
