'use strict';

const AWS = require('aws-sdk');

const sns = new AWS.SNS({
  region: 'us-west-2',
});

const topic = 'arn:aws:sns:us-west-2:753113110670:alert';

const params = {
  TopicArn: topic,
  Protocol: 'application', // can use email or SMS, but this is just a node application
  NotificationEndpoint: 'arn:aws:lambda:us-west-2:753113110670:function:sns-subscriber',
};

sns.subscribe(params, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});