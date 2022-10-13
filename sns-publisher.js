'use strict';

const AWS = require('aws-sdk');

const sns = new AWS.SNS({
  region: 'us-west-2',
});

const topic = 'arn:aws:sns:us-west-2:753113110670:delivered';

const payload = {
  TopicArn: topic,
  Message: 'Hello from node',
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });