# About the IDE

Our Cloud IDE is built on [Theia](https://theia-ide.org/), an open-source editor which offers all VS Code features in a lightweight web environment. Use it to develop, debug and deploy all of your applications.

Codeanywhere has developed a number of <code>unique extensions</code> which improve the productivity and user experience while using the editor. They include:

- [**Preview Ports**](#preview-ports)
- [**Projects**](#projects)
- [**Collaboration**](/editor/collaboration/about)
- [**Connections**](/editor/introduction/sidebar#connections)

### <a name="preview-ports" href="#preview-ports" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Preview Ports

Codeanywhere offers their users the ability to preview their app progress via public or private links. In the editor, select <code>View -> Preview Ports</code> to enable the Preview Ports widget.

<p><img src="/images/editor/introduction/open-preview-ports.png" alt="Enable Preview Ports" class="width-90"/></p>

If your app is running, it should show up in the Preview Ports widget. The running processes will be listed inside the widget with the option to select:

- **Preview**: Opens your private app link in the <code>Preview</code> widget inside the IDE.
- **Private**: Opens your app in a new browser tab. The link is only accessible to you if you're logged in to your Codeanywhere account.
- **Public:** Opens your app in a new browser tab. The link is publicly accessible to anyone. The app **must be running on** <code>0.0.0.0</code>.
- **Exit**: Gracefully terminates your app. This action can be blocked, handled, and ignored.
- **Kill:** Immediately terminates your app.

<p><img src="/images/editor/introduction/preview-ports-widget.png" alt="Preview Ports widget" class="width-90"/></p>

You will be notified every time you restart your app so you can preview the progress instantly.

<p><img src="/images/editor/introduction/preview-ports-popup.png" alt="Preview Ports popup" class="width-60"/></p>

### <a name="projects" href="#projects" class="anchor-link"><img src="/images/anchor.svg" alt="Link anchor" class="anchor-img"></a>Projects

The <code>Projects</code> view allows you to easily switch between multiple projects inside your container. You can find it by navigating to <code>View -> Projects</code> or <code>File -> New Project</code>.

<p>
  <div class="side-by-side-images">
    <img src="/images/editor/introduction/view-projects.png" alt="Projects view"/>
    <img src="/images/editor/introduction/file-new-project.png" alt="New project"/>
  </div>
</p>

<p><img src="/images/editor/introduction/view-projects.png" alt="Projects view" class="width-60 solo-image"/></p>
<p><img src="/images/editor/introduction/file-new-project.png" alt="New project" class="width-60 solo-image"/></p>

Projects will also help you with cloning and opening a Git repository. Just click on <code>Clone an existing project</code> and enter your repository SSH URL and we will take care of the rest.

<p><img src="/images/editor/introduction/projects-widget.png" alt="Projects widget" class="width-60"/></p>

**Note:** Your Codeanywhere account must be authorized with the appropriate Git provider to successfully clone a repository. Not sure how to do that? Find out [here](/dashboard/connected-accounts/git-providers).
