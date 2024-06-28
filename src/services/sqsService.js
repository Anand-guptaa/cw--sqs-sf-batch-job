'use strict';

const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

async function publishEvent(event, queueName,queueUrl) {
    console.log('sqs :: sendMessageToQueue --> Start',);

    const params = {
        MessageBody: JSON.stringify(event),
        QueueUrl: queueUrl+queueName
    };

    await sqs.sendMessage(params).promise();
    console.log('sqs :: sendMessageToQueue --> End');
}

module.exports = {
    publishEvent
}
