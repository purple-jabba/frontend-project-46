import convertPath from './convertPath.js';
import { readFileSync } from 'node:fs';

const readFile = (path) => readFileSync(convertPath(path), "utf8");

export default readFile;