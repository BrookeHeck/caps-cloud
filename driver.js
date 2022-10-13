'use strict';

const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/753113110670/vendor-queue',
  region: 'us-west-2',
});

const message = {
  body: 'hello from sqs node app',
  id: '1',
};

producer.send(message)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
