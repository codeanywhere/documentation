# Installing Meteor framework

To install Meteor framework on a Codeanywhere container, just run the following command in your [IDE terminal](/editor/introduction/how-to-access) to install the latest official Meteor release:

```sh
curl https://install.meteor.com/ | sh
```

Once installed, the `meteor create` command will create a fresh Laravel installation in the `workspace` directory.

```sh
cd ~/workspace
meteor create .
```

Now you can run your Meteor app by running:

```sh
meteor run
```

and [previewing it](general/getting-started/faq#preview-progress) on your preview URL after the app is lifted.

**NOTE**: Meteor is resource intensive. Minimal system requirement for a succesfull application initialization is 512MB of RAM and 3GB of disk space.\*
