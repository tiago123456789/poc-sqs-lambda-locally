Technologies:
===============

- Node.js(versão 16.8.0)
- Javascript 
- Serverless framework
- Lambda function(Aws)
- Docker and Docker compose
- Localstask


Instructions to run project locally:
======================================

- Clone repository
- Execute command **npm install** to install all modules
- Execute command **docker-compose up -d** to run container with localstack
- Execute command **bash setup-queue.sh** to create sqs queue in localstack
- Execute command **sls offline** to run lambda function locally


Instructions to test project locally:
=====================================

- Execute command **sls offline** to run lambda function locally
- Access address http://localhost:3000/publish-message to publish message SQS(running in localstack) 
- How lambda function(consumer) is configured, so the lambda receive the message and make something
