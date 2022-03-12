# NASA Poster Backend

- [Description](#description)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
- [API Examples](#api-examples)
  - [`GET` /posters](#get-posters)
  - [`GET` /posters/:id](#get-postersid)
- [License](#license)

## Description

This service is an alternative of 프로그래머스 과제관 고양이 사진첩 애플리케이션's backend.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## API Examples

### `GET` /posters

```json
[
  {
    "id": 1,
    "name": "The Sun",
    "type": "DIRECTORY",
    "filePath": null
  },
  {
    "id": 2,
    "name": "Mercury",
    "type": "DIRECTORY",
    "filePath": null
  },
  {
    "id": 3,
    "name": "Venus",
    "type": "DIRECTORY",
    "filePath": null
  },
  {
    "id": 4,
    "name": "Earth",
    "type": "DIRECTORY",
    "filePath": null
  },
  ...
]
```

### `GET` /posters/:id

```json
[
  {
    "id": 20,
    "name": "Earth A",
    "type": "FILE",
    "filePath": "poster_earth_front_a.jpg",
    "parent": {
      "id": 4
    }
  },
  {
    "id": 21,
    "name": "Earth B",
    "type": "FILE",
    "filePath": "poster_earth_front_b.jpg",
    "parent": {
      "id": 4
    }
  },
  {
    "id": 22,
    "name": "Earth C",
    "type": "FILE",
    "filePath": "poster_earth_front_c.jpg",
    "parent": {
      "id": 4
    }
  },
  ...
  {
    "id": 26,
    "name": "Earth's Moon",
    "type": "DIRECTORY",
    "filePath": null,
    "parent": {
      "id": 4
    }
  }
]
```

## License

[MIT License](LICENSE)
