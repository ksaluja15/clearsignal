---
title: "Migrate your blog from Ghost(Pro) to Digital ocean"
date: "2022-08-03"
excerpt: ""
imageUrl: "/kunal-saluja.jpg"
tags: ["blog"]
---

I recently decided to migrate my ghost blog from ghost(pro)
          subscription to a digital ocean droplet. Primary reasons for the
          migration were:

          Inability to modify themes with a basic subscription
          Limited integrations.

        Here are the steps involved in the migration:

### 
          Downloading content from Ghost(pro) website

            Navigate to your Ghost dashboard ➡ Settings ➡ Labs

              Export your content
              Download current redirects
              Download current routes.yaml

            Navigate to your Ghost dashboard ➡ Settings ➡ Design

                Go to Change theme ➡ Advanced ➡ Download

            Navigate to Members ➡ Settings ➡ Export all members

            Send an email to{' '}

              support@ghost.org
            {' '}
            from your registered email asking for a zip of all the images used
            in your website.

### 
          Creating a droplet on Digital Ocean

            Create an account and sign in on{' '}

              Digital Ocean

            Click{' '}

              here
            {' '}
            and then select 'Create Ghost Droplet'

            Make sure it says "Ghost latest on Ubuntu XX.xx". If it
            doesn't say that, you may end up creating a droplet without
            Ghost.

            The default droplet configuration works fine for a regular ghost
            website with a few hundred visitors per day

          Add your SSH key

            Do not enable Monitoring unless you choose a bigger
            droplet ➡ Adding a monitoring agent will make your website
            frequently unresponsive, as it is resource intensive.

          Create the droplet. It will be ready in a minute!

### 
          Configuring Domain

            Click on 'Droplets' on the control panel. Now you can see
            all your droplets.

            Go to the settings dropdown menu for your droplet and select
            'Add Domain'. Make sure you're setting the domain for
            the droplet and not for the "Project".

            Type the name of your website (clearsignal.xyz in my case) and click
            on 'Add Domain'

            It should create 4 entries as shown below

            Navigate to your domain name registrar (Namecheap in my case) and
            set custom nameservers as mentioned{' '}

              here

            .

### 
          Ghost setup on droplet

            Type the following command:{' '}
            {'ssh root@{public ip of droplet}'}

            Wait till the ghost installation is complete

              Enter the relevant information when prompted

            Go to {'{domainname}/ghost'} to configure your
            website.

            Navigate to Settings ➡ Labs ➡ Delete All content

            Click on Import content. Don't forget to click on the
            'import' button after selecting the file.

          Upload redirects and routes

            Go to settings ➡ design ➡ upload theme . Make sure to
            rename the theme before uploading.

            Copy images from the zip emailed to you from ghost support to the
            droplet. Use the following command:

              {
                'scp -pr {Local path to extracted zip from support@ghost.org}/content/images/  root@{Droplet Public ip}:/var/www/ghost/content/images/*'
              }

          Now you can modify your ghost theme and upload it anytime.
          Subscription costs came down from 11$/month to 6$/month Affine
          Augmentations‌