#!/usr/bin/env bash

# deploy application to S3
export AWS_PROFILE=james_barak
aws s3 mb s3://ml-runner
aws s3 ls
npm run build && aws s3 sync build/ s3://ml-runner
