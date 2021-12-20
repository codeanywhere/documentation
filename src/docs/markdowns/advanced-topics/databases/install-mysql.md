# Installing MySQL

To install <code>MySQL</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

On Ubuntu 16.04, the latest version of MySQL is included in the APT package repository by default. Update the package index on your server and install the default <code>mysql-server</code> package. During the installation, you will be prompted to create a root password.

```sh
sudo apt-get update
sudo apt-get install mysql-server
```

It is recommended to run the included security script to change some of the less secure default configuration options. You will be asked to provide the password you chose in the installation process.

```sh
mysql_secure_installation
```

You can check if your MySQL server is running with the following command:

```sh
sudo service mysql status
```

If MySQL isn't running, you can start it using the command:

```sh
sudo systemctl start mysql
```

See the [official documentation](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) for more information on interacting with your database using the command line interface.
