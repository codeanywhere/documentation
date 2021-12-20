# Installing SQL Lite

To install <code>SQL Lite</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

Update the package index on your server and install the default <code>postgresql</code> package.

```sh
sudo apt-get update
sudo apt-get install sqlite3
```

You can validate the installation by running the following command. Terminate the program by typing <code>CTRL+D</code>.

```sh
sqlite3
```

See the [official documentation](https://sqlite.org/cli.html) for more information on interacting with your database using the command line interface.
