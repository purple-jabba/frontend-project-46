## Tests

#### Code Climate Maintainability:
[![Maintainability](https://api.codeclimate.com/v1/badges/780b2a2c318a662f2f53/maintainability)](https://codeclimate.com/github/purple-jabba/frontend-project-46/maintainability)
#### Code Climate Test Coverage:
[![Test Coverage](https://api.codeclimate.com/v1/badges/780b2a2c318a662f2f53/test_coverage)](https://codeclimate.com/github/purple-jabba/frontend-project-46/test_coverage)
#### Tests and linter status
[![test-and-lint](https://github.com/purple-jabba/frontend-project-46/actions/workflows/frontend-project-46.yml/badge.svg)](https://github.com/purple-jabba/frontend-project-46/actions/workflows/frontend-project-46.yml)
#### Hexlet tests and linter status:
[![Actions Status](https://github.com/purple-jabba/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/purple-jabba/frontend-project-46/actions)

# gendiff
Difference generator or "gendiff" is a program that determines the difference between two data structures. Such a mechanism is used for test output or automatic tracking of changes in configuration files.

## Supported formats
- JSON
- Stylish
- Plain

## Installation and usage

Clone repository and install gendiff with npm:

```bash
  git clone git@github.com:purple-jabba/frontend-project-46.git
  make install
  make publish
  npm link
```

Enter the command **gendiff -h** to see the options
```bash
 Usage: gendiff [options] <filepath1> <filepath2>

 Compares two configuration files and shows a difference.

 Options:
   -V, --version        output the version number
   -f, --format <type>  output format (default: "stylish")
   -h, --help           display help for command
```

## Output examples

### gendiff-json
[![asciicast](https://asciinema.org/a/IheL7jHUQOM5YL2HXe452x2o6.svg)](https://asciinema.org/a/IheL7jHUQOM5YL2HXe452x2o6)
### gendiff-stylish
[![asciicast](https://asciinema.org/a/P9qCTkZLkuVd2yNptzNOcP2yf.svg)](https://asciinema.org/a/P9qCTkZLkuVd2yNptzNOcP2yf)
### gendiff-plain
[![asciicast](https://asciinema.org/a/f5ntDhs9yvRJ2J9shaEjS8MeL.svg)](https://asciinema.org/a/f5ntDhs9yvRJ2J9shaEjS8MeL)
