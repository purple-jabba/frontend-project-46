import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';
import readFile from '../src/utils/readFile.js';

const resultStylish = readFile('./__fixtures__/toBeExpectedStylish.ini');
const resultPlain = readFile('./__fixtures__/toBeExpectedPlain.ini');

test('stylish output check', () => {
  const filepath1 = '__fixtures__/file1.yml';
  const filepath2 = '__fixtures__/file2.json';

  const output = gendiff(filepath1, filepath2, 'stylish');

  expect(output).toEqual(resultStylish);
});

test('plain output check', () => {
  const filepath1 = '__fixtures__/file1.yml';
  const filepath2 = '__fixtures__/file2.json';

  const output = gendiff(filepath1, filepath2, 'plain');

  expect(output).toEqual(resultPlain);
});
