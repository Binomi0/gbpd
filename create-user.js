db.createUser({
  user: process.env.MONGO_INITDB_USERNAME,
  pwd: process.env.MONGO_INITDB_PASSWORD,
  roles: [ { role: "dbAdmin", db: process.env.MONGO_INITDB_DATABASE } ]
});


rs.initiate( { _id: 'rs0', members: [ { _id: 0, host: "mongo:27017" },{ _id: 1, host: "mongo2:27017" },{ _id: 2, host: "mongo3:27017" } ] } );
