#!/bin/bash

echo 'Creating application user and db'
docker-compose exec mongo sh -c "mongo --port 27017 -u "root" -p "edec408fac172f177696b9e97a6e1be6447d0bbe" --authenticationDatabase admin < /scripts/init-db-user.js"
