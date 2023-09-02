import _ from 'lodash';

export const getDifference = (path1, path2) => {
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
  return result;
};

export const displayDifference = (info) => {
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
