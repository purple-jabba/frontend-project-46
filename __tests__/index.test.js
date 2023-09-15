import { fileURLToPath } from 'url';
import path from 'node:path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  {
    first: 'file1.json', second: 'file2.json', expected: 'toBeExpectedStylish.ini', format: 'stylish', title: 'stylish', extension: '.json',
  },
  {
    first: 'file1.json', second: 'file2.json', expected: 'toBeExpectedPlain.ini', format: 'plain', title: 'plain', extension: '.json',
  },
  {
    first: 'file1.json', second: 'file2.json', expected: 'toBeExpectedJson.ini', format: 'json', title: 'json', extension: '.json',
  },
  {
    first: 'file1.json', second: 'file2.json', expected: 'toBeExpectedStylish.ini', format: undefined, title: 'default', extension: '.json',
  },
  {
    first: 'file3.yml', second: 'file4.yml', expected: 'toBeExpectedStylish.ini', format: 'stylish', title: 'stylish', extension: '.yml',
  },
  {
    first: 'file3.yml', second: 'file4.yml', expected: 'toBeExpectedPlain.ini', format: 'plain', title: 'plain', extension: '.yml',
  },
  {
    first: 'file3.yml', second: 'file4.yml', expected: 'toBeExpectedJson.ini', format: 'json', title: 'json', extension: '.yml',
  },
  {
    first: 'file3.yml', second: 'file4.yml', expected: 'toBeExpectedStylish.ini', format: undefined, title: 'default', extension: '.yml',
  },
])('$title format with the extension $extension output check', ({
  first, second, expected, format,
}) => {
  expect(gendiff(getFixturePath(first), getFixturePath(second), format))
    .toEqual(readFile(expected));
});
