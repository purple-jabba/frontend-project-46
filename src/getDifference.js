import _ from 'lodash';

const getDifference = (filename1, filename2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(filename1), Object.keys(filename2)));

  const result = sortedKeys.map((key) => {
    if (_.isPlainObject(filename1[key]) && _.isPlainObject(filename2[key])) {
      return { type: 'nested', key, children: getDifference(filename1[key], filename2[key]) };
    }
    if (!Object.hasOwn(filename1, key)) {
      return { type: 'added', key, value: filename2[key] };
    }
    if (!Object.hasOwn(filename2, key)) {
      return { type: 'deleted', key, value: filename1[key] };
    }
    if (!_.isEqual(filename1[key], filename2[key])) {
      return {
        type: 'changed', key, value1: filename1[key], value2: filename2[key],
      };
    }
    return { type: 'unchanged', key, value: filename1[key] };
  });
  return result;
};

export default getDifference;
