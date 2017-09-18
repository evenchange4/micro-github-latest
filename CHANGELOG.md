# Changelog

## [HEAD]
> Unreleased

## [v1.3.0]
> Sep 18, 2017

* chore(update): github & update yarn to 1.0.2
* chore(update): upgrade node to 8.5.0
* docs(LICENSE): update year
* feat(403): handle 403, fallback to githut releases/latest page when rate limit exceeded

## [v1.2.1]
> Sep 04, 2017

* ncu(update): upgrade node to 8.4.0

## [v1.2.0]
> Aug 14, 2017

* feat(Header): response with github origin header.
* feat(debug): add debug for dev.
* feat(cache): Internal 304 cache handler for GitHub Api.  🎉

> Note: Making a conditional request and receiving a 304 response does not count against your Rate Limit, so we encourage you to use it whenever possible. Ref: https://developer.github.com/v3/#conditional-requests

## [v1.1.4]
> Aug 12, 2017

* chore(npm): ncu update eslint
* chore(github-release): zip all

## [v1.1.3]
> Aug 10, 2017

* chore(node): add node version info

## [v1.1.1]
> Aug 10, 2017

* chore(docker): optimize image size

## [v1.1.0]
> Aug 10, 2017

* fix(deploy): drop now-purge and switch to now rm --safe
* chore(deploy): optimize docker image & now.sh
* feat(npm): release

BREAK CHANGES: port argument

## [v1.0.1]
> Aug 09, 2017

* feat(API): add /rate_limit api

## [v1.0.0]
> Aug 08, 2017

- first commit
