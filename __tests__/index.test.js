import { fileURLToPath } from 'url';
import path from 'node:path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';

const resultStylish = readFile('toBeExpectedStylish.ini');
const resultPlain = readFile('toBeExpectedPlain.ini');
const resultJson = readFile('toBeExpectedJson.ini');

test.each([
  {
    first: file1, second: file2, expected: resultStylish, format: 'stylish',
  },
  {
    first: file1, second: file2, expected: resultPlain, format: 'plain',
  },
  {
    first: file1, second: file2, expected: resultJson, format: 'json',
  },
])('$format output check', ({
  first, second, expected, format,
}) => {
  expect(gendiff(first, second, format)).toEqual(expected);
});

test('default output check', () => {
  expect(gendiff(file1, file2)).toEqual(resultStylish);
});
