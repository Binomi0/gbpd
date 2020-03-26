FROM mongo:3

WORKDIR /data/db

COPY init-mongo.js /docker-entrypoint-initdb.d/init-mongo.js

CMD ["mongo"]
