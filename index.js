'use strict';

// importing vendor messages and driver messages will start the subscription to queues on AWS
// const vendorMesages = require('./vendor/vendorMessages');
// const driverMessages = require('./driver/driverMessages');

// starts the chain of events by alerting publishing to SNS topic on AWS
const publishPickup = require('./vendor/publishPickup');

setInterval(() => {
  publishPickup();
}, 5000);


