#!/bin/bash

dockerize -wait tcp://son_db:3306 -timeout 30s

node /var/www/migrate.js

npm run start.dev