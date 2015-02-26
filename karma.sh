#!/bin/bash

# kill all child processes on exit
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

# run django and karma
make run &
npm test &

# wait for completion
for job in `jobs -p`; do
    wait $job
done
