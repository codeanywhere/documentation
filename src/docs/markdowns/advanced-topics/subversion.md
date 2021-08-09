# Subversion

Subversion is an open source version control system. Codeanywhere doesn't have this feature yet. But you can set everything up using your Container's SSH Terminal.

### <a name="installing-subversion" href="#installing-subversion" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Installing Subversion

First, [create a new container](/dashboard/containers/create-new-container).

In your SSH Terminal type in:

```sh
sudo apt-get update
```

in order to make sure that everything is up-to-date.

To install Subversion, run the following command from a terminal prompt:

```sh
sudo apt-get install subversion apache2 libapache2-svn
```

### <a name="configure-server" href="#configure-server" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Configure Server

After you've installed packages on your Container, you can create a Subversion repository and access the project.

The Subversion repository can be created using the following command from a SSH terminal:

```sh
svnadmin create /path/to/repo/
```

Once you create the repository you can import files into the repository, just enter the following from a terminal prompt:

```sh
svn import /path/to/directory path/to/repo/
```
