# Installing Elasticsearch

To install <code>Elasticsearch</code> in your container, you have to run the following commands in the [IDE terminal](/editor/introduction/how-to-access).

Elasticsearch is based on Java, therefore you have to run the following commands to install OpenJDK 8.  
**Note**: You can skip this step if you selected the <code>Java</code> template for your container.

```sh
sudo apt update
sudo apt install openjdk-8-jdk
```

Now that OpenJDK is installed, import the Elasticsearch GPG key:

```sh
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
```

Register the Elasticsearch repository:

```sh
sudo sh -c 'echo "deb https://artifacts.elastic.co/packages/6.x/apt stable main" > /etc/apt/sources.list.d/elastic-6.x.list'
```

Update the package index and install the <code>elasticsearch</code> package.

```sh
sudo apt-get update
sudo apt-get install elasticsearch
```

After installing Elasticsearch package, run the following commands below to start the service and make sure it automatically starts up whenever the server boots up.

```sh
sudo systemctl start elasticsearch.service
sudo systemctl enable elasticsearch.service
```

See the [official documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html) for more information on configuring Elasticsearch.
