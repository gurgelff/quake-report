# Quake Report - Log Analyzer for Quake Arena Games

Quake Report is a log analyzer designed for Quake Arena games. It processes game logs and provides insightful reports about the matches.

![quake-report](https://github.com/gurgelff/quake-report/assets/8779528/55bd81ff-24a1-4232-9682-f3f55a477dc1)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Docker](#docker)
  - [Running Locally](#running-locally)
- [Troubleshooting](#troubleshooting)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Getting Started
### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

### Installation

* Clone the repository:

```bash
  git clone https://github.com/gurgelff/quake-report.git
```
* Install the dependencies with one of these options:

1. Using Docker:

```bash
  docker-compose up
```
2. Using pnpm:

```bash
  npm install -g pnpm
  pnpm install
```
3. Using npm:

```bash
  npm install
```

## Usage
The application is designed to be run preferably in a containerized environment.

### Docker
The application can be run using Docker:

```bash
  docker-compose up
```

### Running Locally
To run the application locally, use the following command:

```bash
  pnpm start
```

## Troubleshooting
If you have any problems with the Docker container, try the following:
```bash
  rm -rf node_modules
  pnpm install
  docker-compose down -v 
  docker-compose up --no-deps --build
```
In the case of running the application locally, try the following:
```bash
  rm -rf node_modules
  pnpm install
  pnpm start
```
If the problem persists, please open an issue.

## Configuration
The application can be configured using the following environment variables:

- `SERVER_PORT`: The port the server will listen to. Default: 8080
- `SERVER_BASE_URL`: The base URL of the server. Default: localhost

You may configure those variables in the `.env` file.

## Contributing
Feel free to contribute to this project and enrich it with new features or improviments. To do so, follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/amazing-feature-name`)
3. Commit your Changes (`git commit -m 'Useful message here'`)
4. Push to the Branch (`git push origin feat/amazing-feature-name`)
5. Open a Pull Request

## License
Distributed under the ISC License. See `LICENSE` for more information.
```
ISC License

Copyright 2024 Fernando Gurgel

Permission to use, copy, modify, and/or distribute this software for
any purpose with or without fee is hereby granted, provided that the
above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
PROFITS,WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
