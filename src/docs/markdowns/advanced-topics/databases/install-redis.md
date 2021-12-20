# Installing Redis

To install <code>Redis</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

On Ubuntu 16.04, the latest version of Redis is included in the APT package repository by default. Update the package index on your server and install the default <code>redis</code> package.

```sh
sudo apt-get update
sudo apt-get install redis-server
```

You can check if your Redis service is running with the following command:

```sh
sudo service redis status
```

If Redis isn't running, you can start it using the command:

```sh
sudo systemctl start redis
```

See the [official documentation](https://redis.io/topics/rediscli) for more information on interacting with your database using the command line interface.
