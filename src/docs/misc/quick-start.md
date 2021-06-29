# Quick Start Guide

Welcome to Repl.it!  This guide is meant to give you a quick overview of the many features of Repl.it.  We're very excited to introduce you to a new workflow that can change the way you write code.

No programming knowledge is necessary.  This quick start guide is in Python.

1. [Creating a New Python 3 Repl](#creating-a-new-python-3-repl)
2. [Renaming and Describing your Repl](#renaming-and-describing-your-repl)
3. [The Repl Environment](#the-repl-environment)
4. [Hello World!](#hello-world)
5. [A Simple Input Program](#a-simple-input-program)
6. [Adding Packages](#adding-packages)
7. [Creating Python Plots](#creating-python-plots)
8. [Starting a Web Server](#starting-a-web-server)
9. [Adding Secret Keys](#adding-secret-keys)
10. [Sharing Your Repl](#sharing-your-repl)
11. [Sample Repls](#sample-repls)
12. [More from our Community](#more-from-our-community)
13. [Moving Forward](#moving-forward)

## Creating a New Python 3 Repl

On your [Repls Dashboard](https://repl.it/repls), you create a new repl by clicking on "Start Coding Now" or the red button in the bottom right corner.  This will bring you to a page with a list of our supported languages.

Go ahead and select Python.  This will bring you to your workspace.

[More on the repls dashboard](/repls/dashboard).

## Renaming and Describing your Repl

The first thing to do when creating a repl is to give it a name and description.  This will make it easier to come back to later, and will help with organizing your repls.

You can edit the name and description of the repl by clicking on the edit icon highlighted below, then editing the text fields to change the name and add a description.  Clicking off the popover will automatically save any changes you've made.

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/creating-repl.mp4" />
</video>

## The Repl Environment

There are three main parts to the Repl:

1. The **Sidebar**, where you can find a variety of panes for files, the package manager, the debugger, live coding, and so on.
2. The **Editor**, where you write code.
3. The **Console/Terminal**, where you can interact with your code or evaluate code line-by-line.

## Hello, World!

Let's start with the **Console/Terminal**.  In that section, type in the following and hit enter:

```python
print("Hello World!")
```

Here you can evaluate code line by line and interact with its results.  Now let's try entering the following:

```python
x = "hey"
```

Then type:

```python
x * 3
```

Variables declared in the console persist, so you can continue to interact with variables there.

## A Simple Input Program

Now let's move over to the **Editor**.  Type in the following python code:

```python
name = input("What's your name?")

print("Hello", name)
```

To run it, click on the big Run button at the top of the screen, or hit CTRL+Enter (Windows/Chromebook) / CMD+Enter (Mac).

You'll see the code run on the right hand side of the screen.  Since the program is asking for input, go ahead and type your name in the console and hit enter.  It should then greet you!

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/simple-repl.mp4" />
</video>

## Adding Packages

Let's use the `matplotlib` package to make a simple plot.  Clear the existing code, click on the packages icon on your sidebar, and enter `matplotlib` to search for the package.  Select the first one (indicated by the arrow).

Click on the `+` button to add it to your packages.

This will create a new file, `requirements.txt`, which contains all the package information for your repl, including the version number.  It will also start installing on the right.

We can view all of our files by selecting the filetree icon on our sidebar - the first icon.  Click on the filetree icon, then select `main.py` to return to your program.

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/install-package.mp4" />
</video>

[More on packages](/repls/packages).

## Creating Python Plots

Let's enter the following code:

```python
import matplotlib as mpl
import matplotlib.pyplot as plt

plt.plot([1, 2, 4, 8, 16])

plt.savefig('plot.png')
```

Run the code.  You'll see that the newly generated image, `plot.png`, shows up in both the filetree and below the editor so you can see it!  Neat, huh?

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/generate-plot.mp4" />
</video>

[More on plotting in Python](/repls/python-plots).

## Starting a Web Server

Let's create a new Python3 repl.  As a shortcut, you can create a new repl by going directly to [https://repl.it/languages/python3](https://repl.it/languages/python3).  Let's call this one "python flask server"

Our first step is to add the `flask` package.  Go through the steps above except this time, choose the package called `flask`.

Once finished, go back to `main.py` and enter the following code:

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_repler():
  return 'Hello, Repler!'

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080)
```

Hit run, and you'll see that a new pane has appeared with the URL for your repl's hosted site, along with a preview of what it looks like.  You can share this link with your friends to show them the simple app that you made.

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/flask-server.mp4" />
</video>

[More on web servers](/repls/http-servers).

## Adding Secret Keys

So far, your repl is public to everyone (unless you have a paid plan) and they can see the code that you put here.  If you need to put some private information, such as an API key, or a database password, you can use `.env` files.

Create a new file by clicking on the File+ icon in your filetree.  Name it `.env`.

`.env` files contain key-value pairs like the following.  Type in:

```
PASSWORD=pass1234
```

This `.env` file is special because it is only visible to you.  Anyone who is visiting your repl won't be able to see the contents of this file.

Now let's edit `main.py` to include the following:

```python
from flask import Flask, request
import os
app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'Hello, Repler!'

@app.route('/secure-page')
def secret_route():
  password = request.args.get('secret')
  if (password == os.environ['PASSWORD']):
    return 'You found the secret!'
  else:
    return 'Wrong password!'

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080)
```

We're creating a new page where we look for a query param `secret` and we check to see if it matches our `.env` secret.  Watch the video below to see the results.

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/env-files.mp4" />
</video>

Of course, this is a very insecure way of handling secret tokens, since the URL including the query parameter can be cached.  This is just a simple demonstration.

[More on env files](/repls/secret-keys)

## Sharing Your Repl

Finally, now that you've created your first repl, feel free to share it with our community!

Head on over to [Repl Talk](https://repl.it/talk) and check out the [Share Board](https://repl.it/talk/share).  Click on "Share your repl!", choose the repl from the list (or type the name to search), add a title and a description, and Share!

<video width="60%" height="auto" controls style="display:block;margin: 0 auto;">
  <source src="https://replit.github.io/media/quick-start/share-repl.mp4" />
</video>

Feel free to join our Discord Community as well!  Join with [this invite link](https://discord.gg/346Tapr).

## Sample Repls

If you're interested in exploring more in what you can do on Repl.it, take a look at the following repls:

* [OneShot](https://repl.it/@IbraheemRodrigues/OneShot?ref=quickstart) by [@IbraheemRodrigues](https://repl.it/@IbraheemRodrigues?ref=quickstart) - an online multiplayer mobile-friendly space shooter game using Express.js and Socket.io.
* [Quantum Programming Tutorial](https://repl.it/@quantum_jim/QuantumProgrammingTutorial?ref=quickstart) by [@quantum_jim](https://repl.it/@quantum_jim?ref=quickstart) - an interactive CLI program to teach you quantum programming.
* [CartPole](https://repl.it/@MikeShi42/CartPole?ref=quickstart) by [@mikeshi42](https://repl.it/@MikeShi42/CartPole?ref=quickstart) - utilizing machine learning via OpenAI Gym to solve the classic cartpole game.
* [Game of Life](https://repl.it/@AlephZero/GameOfLife?ref=quickstart) by [@AlephZero](https://repl.it/@AlephZero?ref=quickstart) - the classic cellular automaton written in vanilla JavaScript.
* [Language Translator](https://repl.it/@panniu/Language-Translator?ref=quickstart) by [@panniu](https://repl.it/@panniu?ref=quickstart) - a simple translator CLI app in Python in less than 30 lines of code.
* [Nodejs Discord Bot](https://repl.it/@GarethDwyer1/discord-bot-node?ref=quickstart) by [@GarethDwyer1](https://repl.it/@GarethDwyer1?ref=quickstart) - a simple discord bot written in Node.js.
* [Neural Network](https://repl.it/@shamdasani/Enlight-Neural-Network?ref=quickstart) by [@shamdasani](https://repl.it/@shamdasani?ref=quickstart) - a neural network written from scratch using Python.

## More from our Community

You can find tutorials created by members of our community on [Learn](https://repl.it/talk/learn).  There are tutorials for creating single player and multiplayer games, web apps, Discord bots, and AI programs.  Be sure to give the post an upvote if you enjoyed it!

If you want to check out other cool repls that people have shared, you can find them on [Share](https://repl.it/talk/share).

If you have a question about programming or need help debugging something, be sure to post on [Ask](https://repl.it/talk/ask).  Someone will help you if they can!

## Moving Forward

Enjoy being a Repler!  We would love to hear more from you about how you use Repl.it, how you found out about Repl.it, and if there's anything we can do to improve.  Feel free to contact us through any of the following avenues:

* [Discord](https://discord.gg/346Tapr)
* [contact@repl.it](mailto:contact@repl.it)
* [Repl Talk Ask](https://repl.it/talk/ask)
* [Feedback](https://repl.it/feedback) / [Bug Reports](https://repl.it/bugs) / [Language Requests](https://repl.it/language-requests)
