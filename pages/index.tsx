import type { NextPage } from 'next';
import { Button } from '../components/button';
import { CardsExample } from '../components/cards-example';
import { NetlifyIcon, VercelIcon } from '../components/icons';
import { Link } from '../components/link';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';
import { Heading2 } from '../components/typography/heading2';

const repoUrl = encodeURIComponent('https://github.com/vrepsys/portal-template');
const deployNetlifyUrl = `https://app.netlify.com/start/deploy?repository=${repoUrl}`;
const deployVercelUrl = `https://vercel.com/new/clone?repository-url=${repoUrl}`;

const Home: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Portal template</PageTitle>
          <PageSubtitle>A free and open source documentation website template</PageSubtitle>
        </header>
        <p>
          Portal template is built with <Link url="https://nextjs.org/">Next.js</Link> and styled
          with <Link url="https://tailwindcss.com/">tailwindcss</Link>.
        </p>
        <p>
          The layout and every component in the template is{' '}
          <Link url="/customization">customizable</Link> using predefined css variables. You&apos;re
          welcome to visit other pages in this template to learn more about each component.
        </p>
        <Heading2>Get started</Heading2>
        <p>
          The easiest way to get started is to clone the repository from{' '}
          <Link url="https://github.com/vrepsys/portal-template">GitHub</Link> and start playing
          around. You can find the instructions for running the project on our{' '}
          <Link url="https://github.com/vrepsys/portal-template">GitHub readme</Link>.
        </p>
        <p>
          You can also click the buttons below to clone and deploy the template to Vercel or
          Netlify.
        </p>
        <div className="flex gap-2">
          <Button className="button netlify" icon={VercelIcon} to={deployNetlifyUrl}>
            Deploy to Netlify
          </Button>
          <Button className="button primary vercel" icon={NetlifyIcon} to={deployVercelUrl}>
            Deploy to Vercel
          </Button>
        </div>
        <Heading2>Components</Heading2>
        <CardsExample />
        <Heading2>Roadmap</Heading2>
        <p>
          While we&apos;re working on expanding and refining the UI components the next big step for
          us is rendering the documentation contents from Stripe&apos;s{' '}
          <Link url="https://markdoc.dev">Markdoc</Link>.
        </p>
        <p>
          Follow us on <Link url="https://github.com/vrepsys/portal-template">Github</Link> or{' '}
          <Link url="https://twitter.com/vrepsys">Twitter</Link> learn when we add new features.
        </p>
        <Heading2>Get in touch</Heading2>
        <p>
          We&apos;d be super happy to know if you found this useful or if you used this template for
          your project.
        </p>
        <p>
          Feel free to drop us a line with your feedback, ideas or if you need help with your
          documentation. This project was created by <Link url="https://repsys.cc">@vrepsys</Link>{' '}
          and <Link url="https://twitter.com/domasmark">@domasmark</Link>.
        </p>
      </article>
    </PageLayout>
  );
};

export default Home;
