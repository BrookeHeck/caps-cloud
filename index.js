'use strict';

// importing vendor messages and driver messages will start the subscription to queues on AWS
// const vendorMessages = require('./vendor/vendorMessages');
// const driverMessages = require('./driver/driverMessages');

// starts the chain of events by alerting publishing to SNS topic on AWS
const publishPickup = require('./vendor/publishPickup');

let count = 5;
const intervalId = setInterval(() => {
  publishPickup();
  count--;
  if(count === 0) clearInterval(intervalId);
}, 3000);


