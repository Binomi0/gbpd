use dev

db.createUser({
  user: "gbpd",
  pwd: "7110eda4d09e062aa5e4a390b0a572ac0d2c0220",
  mechanisms: ["SCRAM-SHA-1"],
  roles: [
    { role: "readWrite", db: "dev" }
  ]
});
