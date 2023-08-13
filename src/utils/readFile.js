import { readFileSync } from 'node:fs';
import convertPath from './convertPath.js';

const readFile = (path) => readFileSync(convertPath(path), 'utf8');

export default readFile;
