# Add Custom Domain to Container

If you wish to have your app publicly accessible at a custom domain, you can do so by adding a custom domain to your container.

Before you start configuring your domain in Codeanywhere, you should go to a domain registrar and create a new CNAME record. The CNAME record you create must point to our proxy server: <code>sfo.codeanyproxy.com</code>

Navigate to the <code>Home</code> or <code>Containers</code> page, expand the container menu and select the <code>Domains</code> option.

<p><img src="/images/dashboard/containers/add-custom-domain-1.png" alt="Container domains option" class="width-90"/></p>

You will see a page with all of your current domains for the container. Click on <code>Add Domain</code> to add a new custom domain.

<p><img src="/images/dashboard/containers/add-custom-domain-2.png" alt="Custom domains list" class="width-90"/></p>

Set the internal port to the port your application server is listening to. You can access your custom domain without appending the internal port at the end of the URL.

Set the external port to 80, 443 or any port in the range between 1024 and 9999. If you set the external port to 443, Codeanywhere will automatically set up a free SSL certificate provided by _Let's Encrypt_. It is important that you have already configured your CNAME record to point to the Codeanywhere proxy server so the certificate can be issued.

<p><img src="/images/dashboard/containers/add-custom-domain-3.png" alt="Create custom domain" class="width-60"/></p>

**Note**: Custom domains do not prevent the container to be turned off in case it doesn't have the <code>Always-On</code> feature enabled.
