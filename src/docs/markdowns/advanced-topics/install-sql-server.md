# Installing Microsoft SQL Server

To install <code>Microsoft SQL Server</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

Import the public repository GPG keys:

```sh
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Register the Microsoft SQL Server Ubuntu 16.04 repository for SQL Server 2019:

```sh
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2019.list)"
```

Update the package index and install the <code>mssql-server</code> package.

```sh
sudo apt-get update
sudo apt-get install -y mssql-server
```

After the package installation finishes, run the following command and follow the prompts in the terminal.

```sh
sudo /opt/mssql/bin/mssql-conf setup
```

You can check if your Microsoft SQL Server is running with the following command:

```sh
sudo service mssql-server status
```

If Microsoft SQL Server isn't running, you can start it using the command:

```sh
sudo systemctl start mssql-server
```
