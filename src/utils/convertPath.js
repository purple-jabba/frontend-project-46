import { cwd } from 'node:process';
import { resolve } from 'node:path';

const convertPath = (path) => {
  if (path.includes('/')) {
    return resolve(path);
  }
  return `${cwd()}/${path}`;
};

export default convertPath;
