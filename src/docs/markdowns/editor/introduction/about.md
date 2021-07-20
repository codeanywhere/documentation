# About the IDE

Our Cloud IDE is built on [Theia](https://theia-ide.org/), the VS Code-like Open Source web editor that offers
all Visual Studio Code features in a lightweight web environment. Use it to develop, debug and deploy all of your applications.

We have developed a number of extensions, that you will find only in Codeanywhere,
to improve your experience while using our IDE.

That includes:

- [**Preview Ports**](#preview-ports)
- [**Projects**](#projects)
- [**Collaboration**](/editor/collaboration/about)
- [**Connections**](/editor/introduction/sidebar#connections)

### <a name="preview-ports" href="#preview-ports" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Preview Ports

The Preview Ports widget offers you an interface to track and preview your open ports.

TODO: SCREENSHOT WITH ARROW TO STATUS BAR

TODO: SCREENSHOT WITH WIDGET OPEN

Your open ports will be listed inside the Preview Ports widget with the option to open:

  - **Private:** only accessible by you while logged into Codeanywhere.
  - **Public:** accessible to anyone but **must be running on <code>0.0.0.0</code>**

previews.

You don't have to worry about opening the widget every time you start a port because
you will be notified and be able to preview the application instantly.

TODO: SCREENSHOT WITH POPUP MESSAGE

### <a name="projects" href="#projects" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Projects

The Projects view allows you to easily switch between multiple projects inside your container.

You can find the Projects view inside <code>View -> Projects</code> or <code>File -> New Project</code>.

TODO: SCREENSHOT FROM MENUS

Projects will also help you with cloning and opening a Git repository. Just click on <code>Clone an existing project</code> and enter your repository SSH URL and we will take care of the rest.

TODO: SCREENSHOT OF GIT CLONE SCREEN.

**Note:** To successfully clone a Git repository. Your Codeanywhere account must be authorized with the appropriate Git provider. Not sure how to do that?
Find out more [here](/dashboard/connected-accounts/git-providers).