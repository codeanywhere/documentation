# Installing MEAN stack

In order to install MEAN stack, [create a container](/dashboard/containers/create-new-container) with the Node.js stack. First you will now need to install MongoDB, check the following [guide](/advanced-topics/databases/install-mongodb).

Now that you have MongoDB installed, clone the MEAN repo in your `workspace`:

```sh
git clone https://github.com/linnovate/mean.git ~/workspace
```

Now you need to set an example environment file and install the dependencies

```sh
mv .env.example .env
yarn install
```

Finally build the app and serve it on port 3000 and you should be able to preview it when it successfully runs all commands

```sh
yarn build
SERVER_PORT=3000 yarn start
```
