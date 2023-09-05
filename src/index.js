import getDifference from './getDifference.js';
import displayStylish from './formatters/stylish.js';
import parse from './utils/parsers.js';

const gendiff = (filepath1, filepath2) => {
  const path1ToParse = parse(filepath1);
  const path2ToParse = parse(filepath2);

  const copyOfPath1 = path1ToParse;
  const copyOfPath2 = path2ToParse;

  const compare = getDifference(copyOfPath1, copyOfPath2);
  const displayDifference = displayStylish(compare);
  return displayDifference;
};

export default gendiff;
