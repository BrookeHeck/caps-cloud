'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/753113110670/vendor-queue',
  handleMessage: message => {
    let body = JSON.parse(message.Body);
    console.log(body.Message);
  },
});

app.start();