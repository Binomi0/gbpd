const gbpd = {
  user: "adolfo",
  pwd: "edec408fac172f177696b9e97a6e1be6447d0bbe",
  mechanisms: ["SCRAM-SHA-1"],
  roles: [
    { role: "clusterAdmin", db: "dev" },
    { role: "readAnyDatabase", db: "dev" }
  ]
};

db.createUser(gbpd);

db.collection.admin.insert({ email: 'adolfo@onrubia.es', password: 'Aoar12003'})
