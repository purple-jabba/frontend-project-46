import { fileURLToPath } from 'url';
import path from 'node:path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = './__fixtures__/file1.yml';
const file2 = './__fixtures__/file2.json';

const resultStylish = readFile('toBeExpectedStylish.ini');
const resultPlain = readFile('toBeExpectedPlain.ini');
const resultJson = readFile('toBeExpectedJson.ini');

test.each([
  { output: gendiff(file1, file2, 'stylish'), expected: resultStylish, title: 'stylish' },
  { output: gendiff(file1, file2, 'plain'), expected: resultPlain, title: 'plain' },
  { output: gendiff(file1, file2, 'json'), expected: resultJson, title: 'json' },
])('$title output check', ({ output, expected }) => {
  expect(output).toEqual(expected);
});
