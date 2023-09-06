import displayStylish from './stylish.js';

const selectFormat = (node, format) => {
  switch (format) {
    case 'stylish':
      return displayStylish(node);
    default: throw new Error(`Unexpected format ${format}. Use supported formats only`);
  }
};

export default selectFormat;
