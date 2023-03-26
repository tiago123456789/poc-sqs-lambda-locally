'use strict';

const AWS = require("aws-sdk")

const config = {
  endpoint: new AWS.Endpoint('http://localhost:4566'),
  accessKeyId: 'root', 
  secretAccessKey: 'root', 
  region: 'us-east-1'
}

const sqs = new AWS.SQS(config);

module.exports.main = async (event) => {
  const response = await sqs.sendMessage({
    QueueUrl: 'http://localhost:4566/000000000000/teste_video',
    MessageBody: JSON.stringify({
        message: "WELCOME LOCALSTACK! I'm here for help you",
        id: (Math.random(0, 100000) * 100000)
    })
  })
  .promise()
  return {
    statusCode: 200,
    body: JSON.stringify(
      response,
      null,
      2
    ),
  };
};
