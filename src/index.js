import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import getDifference from './getDifference.js';
import parse from './parsers.js';
import selectFormat from './formatters/index.js';

const buildFullPath = (filepath) => resolve(cwd(), filepath);

const readFile = (path) => readFileSync(buildFullPath(path), 'utf8');

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const path1ToParse = parse(readFile(filepath1), extname(filepath1).split('.')[1]);
  const path2ToParse = parse(readFile(filepath2), extname(filepath2).split('.')[1]);

  const compare = getDifference(path1ToParse, path2ToParse);
  const displayDifference = selectFormat(compare, format);
  return displayDifference;
};

export default gendiff;
