# Installing MariaDB

To install <code>MariaDB</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

Import the MariaDB GnuPG signing key to your system:

```sh
sudo apt-key adv --fetch-keys 'http://mariadb.org/mariadb_release_signing_key.asc'
```

Register the MariaDB repository:

```sh
sudo add-apt-repository 'deb [arch=amd64,arm64,i386,ppc64el] http://sfo1.mirrors.digitalocean.com/mariadb/repo/10.4/ubuntu xenial main'
```

Update the package index and install the <code>mariadb-server</code> and the <code>mariadb-client</code> packages.

```sh
sudo apt-get update
sudo apt-get install -y mariadb-server mariadb-client
```

You can check if your MariaDB instance is running with the following command:

```sh
sudo service mariadb status
```

If MariaDB isn't running, you can start it using the command:

```sh
sudo systemctl start mariadb
```

To access the MariaDB instance, run the following command and enter the passwort in the prompt:

```sh
sudo mysql -u root -p
```

See the [official documentation](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) for more information on interacting with your database using the command line interface.
