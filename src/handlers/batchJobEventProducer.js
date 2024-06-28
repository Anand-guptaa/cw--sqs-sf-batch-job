'use strict';
const sqsService = require('../services/sqsService');
module.exports.handle = async (event) => {
  const eventMessage = process.env.EVENT_MESSAGE;
  const queueName = process.env.QUEUE_NAME;
  const queueUrl = process.env.QUEUE_BASE_URL
  await sqsService.publishEvent(eventMessage, queueName,queueUrl);
 
};

