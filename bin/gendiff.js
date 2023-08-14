#!/usr/bin/env node

import { Command } from 'commander';
import getDiffJson from '../src/getDiffJson.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    getDiffJson(filepath1, filepath2);
  });

program.parse();
