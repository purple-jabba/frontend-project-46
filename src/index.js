import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import getDifference from './getDifference.js';
import parse from './parsers.js';
import format from './formatters/index.js';

const buildFullPath = (filepath) => resolve(cwd(), filepath);

const readFile = (path) => readFileSync(buildFullPath(path), 'utf8');

const getExtension = (filepath) => extname(filepath).split('.')[1];

const gendiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const parseFilepath1 = parse(readFile(filepath1), getExtension(filepath1));
  const parseFilepath2 = parse(readFile(filepath2), getExtension(filepath2));

  const compare = getDifference(parseFilepath1, parseFilepath2);
  const displayDifference = format(compare, outputFormat);
  return displayDifference;
};

export default gendiff;
