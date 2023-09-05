import _ from 'lodash';

const getDifference = (file1, file2) => {
  const sortedKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));

  const result = sortedKeys.map((key) => {
    if (typeof file1[key] === 'object' && typeof file2[key] === 'object') {
      return { type: 'nested', key, children: getDifference(file1[key], file2[key]) };
    }
    if (!Object.hasOwn(file1, key)) {
      return { type: 'added', key, value: file2[key] };
    }
    if (!Object.hasOwn(file2, key)) {
      return { type: 'deleted', key, value: file1[key] };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        type: 'changed', key, initialValue: file1[key], changedValue: file2[key],
      };
    }
    return { type: 'unchanged', key, value: file1[key] };
  });
  return result;
};

export default getDifference;
