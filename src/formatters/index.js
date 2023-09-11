import displayStylish from './stylish.js';
import displayPlain from './plain.js';

const format = (node, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return displayStylish(node);
    case 'plain':
      return displayPlain(node);
    case 'json':
      return JSON.stringify(node);
    default: throw new Error(`Unexpected format ${outputFormat}. Use supported formats only`);
  }
};

export default format;
