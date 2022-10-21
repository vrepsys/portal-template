import type { NextPage } from 'next';
import Head from 'next/head';
import { Popover } from '@headlessui/react';
import { Heading2 } from '../components/typography/heading2';
import { Heading3, Heading4, Heading5, PageSubtitle, PageTitle } from '../components/typography';
import { SideNavigation } from '../components/side-navigation/SideNavigation';
import { PageLayout } from '../components/page-layout';
import { DeployButton } from '../components/deploy-button/DeployButton';
import { CardsExample } from '../components/cards-example';

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
        <Heading2>Get started</Heading2>
        <p>Deploy to Vercel or Netlify (need to recreate those buttons instead of using images):</p>
        <div className="flex gap-2">
          <DeployButton platform="netlify" />
          <DeployButton platform="vercel" />
        </div>
        <Heading2>Components</Heading2>
        <CardsExample />
        <Heading2>Get in touch</Heading2>
        <p>Hey, we&apos;re friendly!</p>
      </article>
    </PageLayout>
  );
};

export default Home;
