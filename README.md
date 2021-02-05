# api-error-notifier

## Installation
`$ npm install api-error-notifier`

## Why

`Notifies any error that has been captured by application. All errors are notified over slack web hook`

## Usage

```js
const notifier = require('api-error-notifier');

//@url -> Slack WebHook Url
//@type ->  Error Type
//@error -> Error Response


const result = notifier("url","type","error");

