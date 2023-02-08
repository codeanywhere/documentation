# Working with React-Native

In order to install React-Native framework, first [create a container](/dashboard/containers/create-new-container) with the Node.js stack. Node.js has it's own package manager `npm` with which you will install the Expo CLI.

```sh
npm install -g expo-cli
```

Now that you have the Expo CLI installed, create a new project in your `workspace`:

```sh
expo init AwesomeProject
```

After the project is created, go to the project directory:

```sh
cd ~/AwesomeProject
```

To run React-Native application on a port run:

```sh
WEB_PORT=3001 yarn web
```

Once launched, you can [preview your application](/general/getting-started/faq#preview-progress) with your container preview URL.

To run React-Native on your Android device add to your package.json under scripts:

```sh
“webtunnel”: “expo start --web --tunnel”
```

Run following command in terminal:

```sh
WEB_PORT=3000 npm run webtunnel
```
