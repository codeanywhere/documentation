# Working with Repositories

With Codeanywhere, you’ll be able to work directly with your repositories. You can work with your repository using standard git commands inside your SSH terminal. Go to the [Connections](/editor/sidebar/connections) widget in the sidebar and right click on your container and select SSH Terminal in order to open it up.

### <a name="setting-up-a-repository" href="#setting-up-a-repository" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Setting up a Repository

Create a new local repository:

```sh
git init
```

Create a new repository out of a directory:

```sh
git init <directory>
```

Create a copy of an existing repository inside Container:

```sh
git clone /path/repository_name.git
```

Create a copy of an existing repository inside Container into an directory:

```sh
git clone /path/repository_name.git <directory>
```

Create a copy of an private repository inside Container:

```sh
git clone username@host:/path/repository_name.git
```

### <a name="saving-changes" href="#saving-changes" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Saving Changes

Stage all changes in a file for next commit:

```sh
git add <filename>
```

Stage all changes in a folder for next commit:

```sh
git add <foldername>
```

Add all files to staging:

```sh
git add *
```

Commit changes to head:

```sh
git commit -m "Commit message"
```

Commit all changes in the working directory:

```sh
git commit -a
```

### <a name="inspecting-a-repository" href="#inspecting-a-repository" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Inspecting a Repository

List which files are staged, unstaged, and untracked:

```sh
git status
```

Display the entire commit history using the default formatting:

```sh
git log
```

### <a name="connecting-to-a-remote-repository" href="#connecting" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Connecting to a Remote Repository

Add the server to be able to push to it:

```sh
git remote add origin <server>
```

List all currently configured remote repositories:

```sh
git remote -v
```

### <a name="working-with-branches" href="#working-with-branches" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Working with Branches

Create a new branch and switch to it:

```sh
git checkout -b <branchname>
```

Switch from one branch to another:

```sh
git checkout <branchname>
```

List all the branches in your repo, and also tell you what branch you're currently in:

```sh
git branch
```

Delete the feature branch:

```sh
git branch -d <branchname>
```

Push the branch to your remote repository, so others can use it:

```sh
git push origin <branchname>
```

Push all branches to your remote repository:

```sh
git push --all origin
```

Delete a branch on your remote repository:

```sh
git push origin :<branchname>
```

For example, if you want to push to your master branch, just use:

```sh
git push origin master
```

### <a name="update-the-remote-repository" href="#update-the-remote-repository" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Update the Remote Repository

Merge changes on the remote server to your Container:

```sh
git pull
```

Merge a different branch into your active branch:

```sh
git merge <branchname>
```

View all the merge conflicts

```sh
git diff
```
