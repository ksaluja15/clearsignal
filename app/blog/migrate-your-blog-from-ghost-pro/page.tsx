import CodeBlock from '@/app/components/CodeBlock';
import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';
import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'migrate-your-blog-from-ghost-pro';

export const metadata = generatePostMetadata(slug);

const image1 =
  '/blog/migrate-your-blog-from-ghost-pro/Screenshot-from-2022-08-03-20-24-46.png';
const image2 =
  '/blog/migrate-your-blog-from-ghost-pro/Screenshot-from-2022-08-03-20-52-53-1.png';
const profile = '/kunal-saluja.jpg';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4">
          <Link
            href="/tag/blog"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            blog
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">
          Migrate your blog from Ghost(Pro) to Digital ocean
        </h1>

        <div className="mt-8 flex items-center gap-4">
          <Image
            src={profile}
            alt="Kunal Saluja"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full border-2 border-gray-700 bg-gray-800 object-cover"
          />
          <div>
            <h4 className="font-bold text-white">Kunal Saluja</h4>
            <div className="text-sm text-[var(--color-text-secondary)]">
              <time dateTime="2022-08-03">Aug 3, 2022</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>
          I recently decided to migrate my ghost blog from ghost(pro)
          subscription to a digital ocean droplet. Primary reasons for the
          migration were:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>Inability to modify themes with a basic subscription</li>
          <li>Limited integrations.</li>
        </ol>
        <p>Here are the steps involved in the migration:</p>
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Downloading content from Ghost(pro) website
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Navigate to your Ghost dashboard ➡ Settings ➡ Labs
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>Export your content</li>
              <li>Download current redirects</li>
              <li>Download current routes.yaml</li>
            </ul>
          </li>
          <li>
            Navigate to your Ghost dashboard ➡ Settings ➡ Design
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Go to Change theme ➡ Advanced ➡ Download
              </li>
            </ul>
          </li>
          <li>
            Navigate to Members ➡ Settings ➡ Export all members
          </li>
          <li>
            Send an email to{' '}
            <a
              href="mailto:support@ghost.org"
              className="text-blue-400 hover:underline"
            >
              support@ghost.org
            </a>{' '}
            from your registered email asking for a zip of all the images used
            in your website.
          </li>
        </ul>
        <hr className="border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Creating a droplet on Digital Ocean
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Create an account and sign in on{' '}
            <a
              href="https://www.digitalocean.com/?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Digital Ocean
            </a>
          </li>
          <li>
            Click{' '}
            <a
              href="https://marketplace.digitalocean.com/apps/ghost?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              here
            </a>{' '}
            and then select 'Create Ghost Droplet'
          </li>
          <li>
            Make sure it says "Ghost latest on Ubuntu XX.xx". If it
            doesn't say that, you may end up creating a droplet without
            Ghost.
            <figure className="mx-auto my-8 flex flex-col items-center">
              <Image
                src={image1}
                alt="Screenshot from 2022-08-03 20-24-46"
                width={800}
                height={400}
                className="rounded-lg object-contain"
              />
            </figure>
          </li>
          <li>
            The default droplet configuration works fine for a regular ghost
            website with a few hundred visitors per day
          </li>
          <li>Add your SSH key</li>
          <li>
            Do <strong>not</strong> enable Monitoring unless you choose a bigger
            droplet ➡ Adding a monitoring agent will make your website
            frequently unresponsive, as it is resource intensive.
          </li>
          <li>Create the droplet. It will be ready in a minute!</li>
        </ul>
        <hr className="border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Configuring Domain
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Click on 'Droplets' on the control panel. Now you can see
            all your droplets.
          </li>
          <li>
            Go to the settings dropdown menu for your droplet and select
            'Add Domain'. Make sure you're setting the domain for
            the droplet and not for the "Project".
          </li>
          <li>
            Type the name of your website (clearsignal.xyz in my case) and click
            on 'Add Domain'
          </li>
          <li>
            It should create 4 entries as shown below
            <figure className="mx-auto my-8 flex flex-col items-center">
              <Image
                src={image2}
                alt="Screenshot from 2022-08-03 20-52-53-1"
                width={800}
                height={200}
                className="rounded-lg object-contain"
              />
            </figure>
          </li>
          <li>
            Navigate to your domain name registrar (Namecheap in my case) and
            set custom nameservers as mentioned{' '}
            <a
              href="https://www.namecheap.com/support/knowledgebase/article.aspx/10375/2208/how-do-i-link-a-domain-to-my-digitalocean-account/?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              here
            </a>
            .
          </li>
        </ul>
        <hr className="border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Ghost setup on droplet
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Type the following command:{' '}
            <code>{'ssh root@{public ip of droplet}'}</code>
          </li>
          <li>
            Wait till the ghost installation is complete
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>Enter the relevant information when prompted</li>
            </ul>
          </li>
          <li>
            Go to <code>{'{domainname}/ghost'}</code> to configure your
            website.
          </li>
          <li>
            Navigate to Settings ➡ Labs ➡ Delete All content
          </li>
          <li>
            Click on Import content. Don't forget to click on the
            'import' button after selecting the file.
          </li>
          <li>Upload redirects and routes</li>
          <li>
            Go to settings ➡ design ➡ upload theme . Make sure to
            rename the theme before uploading.
          </li>
          <li>
            Copy images from the zip emailed to you from ghost support to the
            droplet. Use the following command:
            <CodeBlock>
              {
                'scp -pr {Local path to extracted zip from support@ghost.org}/content/images/  root@{Droplet Public ip}:/var/www/ghost/content/images/*'
              }
            </CodeBlock>
          </li>
        </ul>
        <hr className="border-gray-700" />
        <p>
          Now you can modify your ghost theme and upload it anytime.
          Subscription costs came down from 11$/month to 6$/month Affine
          Augmentations‌
        </p>
        <hr className="!my-4 border-gray-700" />
      </div>
       <RelatedPosts allPosts={postsData} currentPostSlug={slug} />

    </article>
  );
}