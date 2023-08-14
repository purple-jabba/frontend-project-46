import _ from 'lodash';
import readFile from './utils/readFile.js';

const getDifference = (path1, path2) => {
  const result = [];
  _.forEach(Object.entries(path1), (entry) => {
    const [key, value] = entry;
    if (Object.hasOwn(path2, key)) {
      if (value === path2[key]) {
        result.push([key, value]);
      }
      if (value !== path2[key]) {
        result.push([key, value, '-', key, path2[key], '+']);
      }
    }
    if (!Object.hasOwn(path2, key)) {
      result.push([key, value, '-']);
    }
  });
  _.forEach(Object.entries(path2), (entry) => {
    const [key, value] = entry;
    if (!Object.hasOwn(path1, key)) {
      result.push([key, value, '+']);
    }
  });
  console.log(result);
  return result;
};

const displayDifference = (info) => {
  console.log('{');
  _.forEach(info, (arr) => {
    if (arr.length === 3) {
      console.log(`  ${arr[2]} ${arr[0]}: ${arr[1]}`);
    }
    if (arr.length === 2) {
      console.log(`    ${arr[0]}: ${arr[1]}`);
    }
    if (arr.length === 6) {
      console.log(`  ${arr[2]} ${arr[0]}: ${arr[1]}\n  ${arr[5]} ${arr[3]}: ${arr[4]}`);
    }
  });
  console.log('}');
};

const getDiffJson = (filepath1, filepath2) => {
  const path1ToParse = JSON.parse(readFile(filepath1));
  const path2ToParse = JSON.parse(readFile(filepath2));

  const copyOfPath1 = path1ToParse;
  const copyOfPath2 = path2ToParse;

  const compare = getDifference(copyOfPath1, copyOfPath2);
  const sortedResult = _.sortBy(compare);

  const display = displayDifference(sortedResult);
  return display;
};

getDiffJson('../__fixtures__/file1.json', '../__fixtures__/file2.json');

export default getDiffJson;
