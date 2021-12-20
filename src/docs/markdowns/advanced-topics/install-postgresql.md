# Installing PostgreSQL

To install <code>PostgreSQL</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

On Ubuntu 16.04, the latest version of PostgreSQL is included in the APT package repository by default. Update the package index on your server and install the default <code>postgresql</code> package and the <code>postgresql-contrib</code> utility package.

```sh
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

You can check if your PostgreSQL server is running with the following command:

```sh
sudo service postgresql status
```

If PostgreSQL isn't running, you can start it using the command:

```sh
sudo systemctl start postgresql
```
