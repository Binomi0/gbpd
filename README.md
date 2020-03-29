## Use
* **Require Docker**

This will run docker-compose up -d --force-recreate
`npm run start`

Once started, wait for mongo instance to be ready and run
`npm run init-mongo`

Should see an output like this
```js
Successfully added user: {
  "user" : "gbpd",
  "mechanisms" : [
    "SCRAM-SHA-1"
  ],
  "roles" : [
    {
      "role" : "readWrite",
      "db" : "dev"
    }
  ]
}
```

Then restart mongo
`docker-compose down mongo`
`docker-compose up -d`


You are ready to enjoy ! ;)


### scripts
```js
rs.initiate(
  {
    _id : 'rs0',
    members: [
      { _id : 0, host : "mongo:27017" },
      { _id : 1, host : "mongo2:27017" },
      { _id : 2, host : "mongo3:27017" }
    ]
  }
)
```


user
```js
{
  user: "gbpd",
  pwd: "7110eda4d09e062aa5e4a390b0a572ac0d2c0220",
  mechanisms: ["SCRAM-SHA-1"],
  roles: [
    { role: "dbAdmin", db: "dev"}
  ]
}
```
