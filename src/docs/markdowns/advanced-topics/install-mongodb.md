# Installing MongoDB

To install <code>mongoDB</code> on a Codeanywhere container based on Ubuntu 16.04 distribution, just run the followings commands in your [IDE terminal](/editor/introduction/how-to-access) to install the latest official MongoDB release:

Import the public key used by the package management system.

```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
```

Create a `/etc/apt/sources.list.d/mongodb-enterprise.list` file for MongoDB.

```sh
echo "deb [ arch=amd64,arm64,ppc64el,s390x ] http://repo.mongodb.com/apt/ubuntu xenial/mongodb-enterprise/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
```

Reload local package database and install the MongoDB Enterprise packages.

```sh
sudo apt-get update
sudo apt-get install -y mongodb-enterprise
```

Start MongoDB

```sh
sudo systemctl start mongod
```
