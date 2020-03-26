FROM mongo:3

WORKDIR /data/db

COPY init-mongo.js /docker-entrypoint-initdb.d/init-mongo.js

CMD ["mongo", "-u", "gbpd", "-p", "edec408fac172f177696b9e97a6e1be6447d0bbe", "--authenticationDatabase", "dev"]
