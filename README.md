# Project Name

> Project description

## Related Projects

  - https://github.com/hrr34-fec5/house-description-service
  - https://github.com/hrr34-fec5/photo-stream2
  - https://github.com/hrr34-fec5/reviews-service
  - https://github.com/hrr34-fec5/grounded-n-grits-calendar-component

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

First time only: 
After installing dependencies, but before using, compile the component using webpack. The script `npm run dev:react` will create a bundle. 

Always:
1. Ensure that MongoDB is running actively (e.g., on a Mac, open a terminal and run `$ mongod`).
2. Start the server with `npm start`.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
### Seeding Database
For testing and development purposes, it may be beneficial to seed the database with fake data.

Included is a script to aid in this process.

After instlaling dependencies and proceeding through the usage steps, run the following script: `npm run db:setup`. 