import { jest } from '@jest/globals';
import getDiffJson from '../src/getDiffJson.js';

const expectedLine1 = '{';
const expectedLine2 = '  - follow: false';
const expectedLine3 = '    host: hexlet.io';
const expectedLine4 = '  - proxy: 123.234.53.22';
const expectedLine5 = '  - timeout: 50\n  + timeout: 20';
const expectedLine6 = '  + verbose: true';
const expectedLine7 = '}';

test('console check', () => {
  const filepath1 = '__fixtures__/file1.json';
  const filepath2 = '__fixtures__/file2.json';
  const logSpy = jest.spyOn(global.console, 'log');

  getDiffJson(filepath1, filepath2);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(7);
  expect(logSpy).toHaveBeenCalledWith(expectedLine1);
  expect(logSpy).toHaveBeenCalledWith(expectedLine2);
  expect(logSpy).toHaveBeenCalledWith(expectedLine3);
  expect(logSpy).toHaveBeenCalledWith(expectedLine4);
  expect(logSpy).toHaveBeenCalledWith(expectedLine5);
  expect(logSpy).toHaveBeenCalledWith(expectedLine6);
  expect(logSpy).toHaveBeenCalledWith(expectedLine7);

  logSpy.mockRestore();
});
