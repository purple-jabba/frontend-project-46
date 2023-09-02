import _ from 'lodash';
import { getDifference, displayDifference } from './getTree.js';
import parse from './utils/parsers.js';

const gendiff = (filepath1, filepath2) => {
  const path1ToParse = parse(filepath1);
  const path2ToParse = parse(filepath2);

  const copyOfPath1 = path1ToParse;
  const copyOfPath2 = path2ToParse;

  const compare = getDifference(copyOfPath1, copyOfPath2);
  const sortedResult = _.sortBy(compare);

  displayDifference(sortedResult);
};

export default gendiff;
