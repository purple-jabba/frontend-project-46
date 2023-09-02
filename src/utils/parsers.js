import { extname } from 'node:path';
import yaml from 'js-yaml';
import readFile from './readFile.js';

const parse = (filepath) => {
  switch (extname(filepath)) {
    case '.json':
      return JSON.parse(readFile(filepath));
    case '.yml':
      return yaml.load(readFile(filepath));
    case '.yaml':
      return yaml.load(readFile(filepath));
    default:
      throw new Error(`Unknown extension ${extname(filepath)}`);
  }
};

export default parse;
