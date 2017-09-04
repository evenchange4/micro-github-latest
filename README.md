# Micro-github-latest
> Microservice for downloading the latest asset of GitHub release.
>
> Further reading: [\[中文\] Microservice 產品交付 - Dockerize 與 Zeit JavaScript 跨平台解決方案](https://medium.com/@evenchange4/microservice-%E7%94%A2%E5%93%81%E4%BA%A4%E4%BB%98-9f2954c7167d)

[![Travis][travis-badge]][travis]
[![Codecov Status][codecov-badge]][codecov]
[![Github Tag][githubTag-badge]][githubTag]
[![node][node]]()

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devDependency-badge]][devDependency]
[![peerDependency Status][peerDependency-badge]][peerDependency]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Feature

- [x] Internal 304 cache handler for GitHub Api. [PR#5](https://github.com/evenchange4/micro-github-latest/pull/5)

## How To Use

### a. Deploy to Now.sh

> One click deploys to △ now

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/evenchange4/micro-github-latest&env=ORIGIN&env=ACCESS_TOKEN)

### b. Binary executable

Download from GitHub [latest release](https://github.com/evenchange4/micro-github-latest/releases/latest).

```
$ ORIGIN=$YOUR_DOMAIN \
  ACCESS_TOKEN=$GITHUB_ACCESS_TOKEN \
  ./micro-github-latest-macos --port $PORT
```

> Note: You can run it without Node.js installed.

### c. Docker image

Pull from [dockerhub][dockerhub].

[![Docker Automated build][dockerhub-auto-badge]][dockerhub]
[![Docker Pulls][dockerPulls-badge]][dockerhub]
[![Docker Size][dockerSize-badge]][dockerSize]

```
$ docker pull evenchange4/micro-github-latest:latest
$ docker run --rm -it \
  -p $PORT:3000 \
  -e "ORIGIN=YOUR_DOMAIN" \
  -e "ACCESS_TOKEN=GITHUB_ACCESS_TOKEN" \
  evenchange4/micro-github-latest:latest
```

### d. NPM CLI

Install from [npm][npm].

[![npm downloads][npm-downloads]][npm]
[![npm][npm-badge]][npm]

```
$ npm i micro-github-latest -g

$ ORIGIN=$YOUR_DOMAIN \
  ACCESS_TOKEN=$GITHUB_ACCESS_TOKEN \
  micro-github-latest --port $PORT
```

> Note: You should use Node.js >= 8 .

## API

### Environment variables

| **ENV**   | **Required**  | **Default**  | **Description** |
| --------- | --------- | --------- | --------- |
| `ORIGIN`  |  | `*` | Setup `access-control-allow-origin` for CORS. |
| `ACCESS_TOKEN`  |  |  | Setup [GitHub access token](https://github.com/settings/tokens/new) with the `repo` scope. |

> Note: You should use ACCESS_TOKEN to increase the rate limit.

### CLI arguments

```
$ micro-github-latest --help
Usage: micro-github-latest <command> [options]

Options:
  -p, --port     HTTP server PORT                                [default: 3000]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```

### URL pathname

| **Method** | **Pathname** | **Description** |
| --------- | --------- | --------- |
| GET | `/:owner/:repo/latest`       | 302 redirect to the first asset of latest release. |
| GET | `/:owner/:repo/:name/latest` | 302 redirect to the first matched one by asset name of latest release. |
| GET | `/rate_limit` | Get your current rate limit status. |

## Demo

- https://micro-github-latest.now.sh/evenchange4/micro-medium-api/macos/latest
- https://micro-github-latest.now.sh/mcs-lite/mcs-lite-app/win64/latest
- https://micro-github-latest.now.sh/atom/atom/latest
- https://micro-github-latest.now.sh/rate_limit

> Note: You should deploy your own service for production usage.

## Technology Stacks

- [Micro](https://github.com/zeit/micro): Asynchronous HTTP microservices.
- [Micro-router](https://github.com/pedronauck/micro-router): A tiny and functional router for Zeit's Micro.
- [Dockerhub][dockerhub]: Automatically deploy docker image.
- [Now.sh](https://zeit.co/now): Realtime global deployments
- [Pkg](https://github.com/zeit/pkg): Package your Node.js project into an executable
- Travis: CI

## Developer Guide

### Requirements

-   node >= 8.4.0
-   npm >= 5.3.0
-   yarn >= 0.27.5

```
$ git clone https://github.com/evenchange4/micro-github-latest.git
$ yarn install --pure-lockfile

$ yarn run dev # dev server
$ yarn start   # prod server
$ yarn run pkg # output binary files
```

### Test

```
$ yarn run format
$ yarn run eslint
$ yarn run test:watch
```

### Docker

```
$ docker build -t micro-github-latest .

# Push to dockerhub
$ git push
```

> Note: Multi-stage builds are a new feature in Docker 17.05.

### Github release / NPM release

```
$ npm version patch
$ git push
```

## CONTRIBUTING

*   ⇄ Pull requests and ★ Stars are always welcome.
*   For bugs and feature requests, please create an issue.
*   Pull requests must be accompanied by passing automated tests (`$ yarn run test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[travis-badge]: https://img.shields.io/travis/evenchange4/micro-github-latest/master.svg?style=flat-square
[travis]: https://travis-ci.org/evenchange4/micro-github-latest
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/micro-github-latest.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/micro-github-latest?branch=master
[node]: https://img.shields.io/node/v/micro-github-latest.svg?style=flat-square
[npm-badge]: https://img.shields.io/npm/v/micro-github-latest.svg?style=flat-square
[npm]: https://www.npmjs.com/package/micro-github-latest
[npm-downloads]: https://img.shields.io/npm/dt/micro-github-latest.svg?style=flat-square
[dependency-badge]: https://david-dm.org/evenchange4/micro-github-latest.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/micro-github-latest
[devDependency-badge]: https://david-dm.org/evenchange4/micro-github-latest/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/micro-github-latest#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/micro-github-latest/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/micro-github-latest#info=peerDependencies
[githubTag-badge]: https://img.shields.io/github/tag/evenchange4/micro-github-latest.svg?style=flat-square
[githubTag]: ./CHANGELOG.md
[license-badge]: https://img.shields.io/github/license/evenchange4/micro-github-latest.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[greenkeeper-badge]: https://badges.greenkeeper.io/evenchange4/micro-github-latest.svg
[greenkeeper]: https://greenkeeper.io/
[dockerhub-auto-badge]: https://img.shields.io/docker/automated/evenchange4/micro-github-latest.svg?style=flat-square
[dockerhub]: https://hub.docker.com/r/evenchange4/micro-github-latest/
[dockerPulls-badge]: https://img.shields.io/docker/pulls/evenchange4/micro-github-latest.svg?style=flat-square
[dockerSize]: https://microbadger.com/images/evenchange4/micro-github-latest
[dockerSize-badge]: https://images.microbadger.com/badges/image/evenchange4/micro-github-latest.svg
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
