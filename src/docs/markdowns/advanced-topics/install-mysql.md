# Installing MySQL

To install <code>MySQL</code> in your container, run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

On Ubuntu 16.04, only the latest version of MySQL is included in the APT package repository by default. To install it, simply update the package index on your server and install the default package. During the installation, you will be prompted to create a root password for your MySQL server.

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
