# Installing Microsoft SQL Server

To install <code>Microsoft SQL Server</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

Import the public repository GPG keys:

```sh
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Register the Microsoft Ubuntu repository:

```sh
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2019.list)"

echo "deb [arch=amd64] https://packages.microsoft.com/debian/8/prod jessie main" | sudo tee /etc/apt/sources.list.d/mssql-cli.list

```

Update the package index and install the <code>mssql-server</code> and the <code>mssql-cli</code> packages.

```sh
sudo apt-get update
sudo apt-get install -y mssql-server mssql-cli
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

See the [official documentation](https://github.com/dbcli/mssql-cli/blob/master/doc/usage_guide.md) for more information on interacting with your database using the command line interface.
