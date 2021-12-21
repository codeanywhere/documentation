# Changing MySQL password

Our Containers created from stacks that include a MySQL database are preconfigured with a passwordless root account for ease of use. This is OK for the initial setup and development without any sensitive data. We strongly advise that you change your password and you can do it easily with the following commands in your [IDE terminal](/editor/introduction/how-to-access):

Login to your database:

```sh
mysql -u root
```

Execute the following commands in MySQL console:

```sh
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('YourNewPassword');
exit
```

Now, you just login to your database with the new password in the terminal or phpmyadmin:

```sh
mysql -u root -p
```

You will be prompted for the password after hitting Enter.
