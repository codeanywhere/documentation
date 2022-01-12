# Installing Django framework

In order to install Django framework, first [create a container](/dashboard/containers/create-new-container) with the Python stack. Python has it's own package manager `pip` with which you will install the Django framework.

```sh
pip install Django
```

Now that you have Django installed, create a new project in your `workspace`:

```sh
cd ~/workspace
django-admin startproject app
```

After the project is created, go to the project directory and launch the server:

```sh
cd ~/workspace/app
python manage.py runserver 0.0.0.0:3000
```

Once launched, you can [preview your application](general/getting-started/faq#preview-progress) with your container preview URL.
