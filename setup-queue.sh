#!/bin/bash

URL="http://0.0.0.0:4566"
QUEUE="teste_video"

aws --endpoint-url=$URL sqs create-queue --queue-name $QUEUE
aws --endpoint-url=$URL sqs get-queue-attributes --queue-url $URL/000000000000/$QUEUE --attribute-name All