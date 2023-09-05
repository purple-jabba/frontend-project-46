import { expect } from '@jest/globals';
import gendiff from '../src/index.js';
import readFile from '../src/utils/readFile.js';

const resultJson = readFile('./__fixtures__/toBeExpectedJson');
const resultYml = readFile('./__fixtures__/toBeExpectedYml');

test('json output check', () => {
  const filepath1 = '__fixtures__/file1.json';
  const filepath2 = '__fixtures__/file2.json';

  const output = gendiff(filepath1, filepath2);

  expect(output).toEqual(resultJson);
});

test('yaml output check', () => {
  const filepath1 = '__fixtures__/file1.yml';
  const filepath2 = '__fixtures__/file2.yml';

  const output = gendiff(filepath1, filepath2);

  expect(output).toEqual(resultYml);
});
