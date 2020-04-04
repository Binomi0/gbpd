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


# user
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

mongo.conf
```conf
# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: /data/db
  journal:
    enabled: true
#  engine:
#  mmapv1:
#  wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1

# how the process runs
processManagement:
  timeZoneInfo: /usr/share/zoneinfo

# security:
#   authorization: enabled

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options:

#auditLog:

#snmp:

```


# kubectl

start
kubectl apply -f pods/gbpd/

stop
kubectl delete deployment gbpd-front
kubectl delete deployment gbpd-api
kubectl delete service gbpd-front
kubectl delete service gbpd-api
