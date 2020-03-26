console.log("#######################")
console.log("#######################")
console.log("#######  TEST   #######")
console.log("#######################")
console.log("#######################")

const gbpd = {
  user: "gbpd",
  db: "dev",
  roles: [
    { role: "clusterAdmin", db: "dev" },
    { role: "readAnyDatabase", db: "dev" },
  ],
  pwd: "edec408fac172f177696b9e97a6e1be6447d0bbe",
  mechanisms: ["SCRAM-SHA-1"],
};

// const admin = {
//   user: "admin",
//   pwd: "7110eda4d09e062aa5e4a390b0a572ac0d2c0220",
//   mechanisms: ["SCRAM-SHA-256"],
//   roles: [
//     { role: "clusterAdmin", db: "dev" },
//     { role: "readAnyDatabase", db: "dev" },
//     "readWrite"
//   ]
// }

db.createUser(gbpd);

db.collection.users.create({ email: 'adolfo@onrubia.es', password: 'Aoar12003'})
