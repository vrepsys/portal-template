import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import { Heading2 } from '../components/typography/heading2';
import { Heading3, Heading4, Heading5, PageSubtitle, PageTitle } from '../components/typography';
import { SideNavigation } from '../components/side-navigation/SideNavigation';
import { PageLayout } from '../components/page-layout';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Home: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Documentation website template</PageTitle>
          <PageSubtitle>
            Portal template is a free and open source documentation website template. Feel free to
            clone it on Github, customize per your needs, and use it for your project.
          </PageSubtitle>
        </header>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component is customizable using
          css variables. You’re welcome to visit other pages in this template to learn more about
          each components in the template. We’ve also added some tips and tricks about what it takes
          to build a neat documentation portal.
        </p>
        <p>
          Deploy to Vercel or Netlify (need to recreate those buttons instead of using images):
          <a
            className="block"
            href={`https://vercel.com/new/clone?repository-url=${encodeURIComponent(
              'https://github.com/vrepsys/portal-template'
            )}`}
          >
            <img src="https://vercel.com/button" alt="Deploy with Vercel" />
          </a>
          <a
            className="block"
            href={`https://app.netlify.com/start/deploy?repository=${encodeURIComponent(
              'https://github.com/vrepsys/portal-template'
            )}`}
          >
            <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
          </a>
        </p>
        <Heading2>Lists</Heading2>
        <Heading3>Ordered list</Heading3>
        Planets:
        <ul>
          <li>Earth</li>
          <li>Mars</li>
          <li>Jupiter</li>
        </ul>
        <Heading3>Unordered list</Heading3>
        Planets:
        <ol>
          <li>Saturn</li>
          <li>Uranus</li>
          <li>Neptune</li>
        </ol>
        <Heading2>Divider</Heading2>
        This is a text above the divider.
        <hr />
        This is a text below the divider.
        <Heading2>Blockquote</Heading2>
        <blockquote>
          This is a blockquote. Portal template is a free and open source documentation website
          template. Feel free to clone it on Github, and use it for your project.
        </blockquote>
        <Heading2>Level 2 heading</Heading2>
        <p>
          Portal template is a free and open source documentation website template. Feel free to
          clone it on Github, and use it for your project.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component is customizable using
          css variables. You’re welcome to visit other pages in this template to learn more about
          each components in the template. We’ve also added some tips and tricks about what it takes
          to build a neat documentation portal.
        </p>
        <p>
          We use this template to kickstart documentation projects for our clients at Portal. Need
          help or just want to chat about building better documentation? Get in touch via email or
          Twitter.
        </p>
        <Heading2>Table</Heading2>
        This is how a table looks like
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>Typeface</th>
              <th>Weight</th>
              <th>Size desktop</th>
              <th>Size mobile</th>
              <th>Letter spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>h1</td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>36</td>
              <td>32</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>h2</td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>28</td>
              <td>24</td>
              <td>0.4</td>
            </tr>
          </tbody>
        </table>
        <Heading3>Level 3 heading</Heading3>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component is customizable using
          css variables.
        </p>
        <p>
          Some content and more content. Content content and more content. Content content and more
          content. Content content and more content.
        </p>
        <Heading3>One more level 3 heading</Heading3>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component is customizable using
          css variables.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component is customizable using
          css variables.
        </p>
        <Heading2>One more heading 2</Heading2>
        <p>
          Some content and more content. Content content and more content. Content content and more
          content. Content content and more content.
        </p>
        <p>
          We use this template to kickstart documentation projects for our clients at Portal. Need
          help or just want to chat about building better documentation? Get in touch via email or
          Twitter.
        </p>
        <Heading2>This is the last level 2 heading</Heading2>
        <p>
          Portal template is a free and open source documentation website template. Feel free to
          clone it on Github, customize per your needs, and use it for your project.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component is customizable using
          css variables. You’re welcome to visit other pages in this template to learn more about
          each components in the template. We’ve also added some tips and tricks about what it takes
          to build a neat documentation portal.
        </p>
        <p>
          (Callout?) We use this template to kickstart documentation projects for our clients at
          Portal. Need help or just want to chat about building better documentation? Get in touch
          via email or Twitter.
        </p>
      </article>
    </PageLayout>
  );
};

export default Home;
