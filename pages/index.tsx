import type { NextPage } from "next";
import Head from "next/head";
import { Popover } from "@headlessui/react";
import { Heading2 } from "../components/typography/heading2";
import {
  Heading3,
  Heading4,
  Heading5,
  PageSubtitle,
  PageTitle,
} from "../components/typography";
import { SideNavigation } from "../components/side-navigation/SideNavigation";
import { PageLayout } from "../components/page-layout";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>This is a page title</PageTitle>
          <PageSubtitle>This is a page subtitle</PageSubtitle>
        </header>
        <p>
          Portal template is a free and open source documentation website
          template. Feel free to clone it on Github, and use it for your
          project.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component
          is customizable using css variables.
        </p>
        <p>
          Content content and more content. Content content and more content.
          Content content and more content. Content content and more content.
          Content content and more content. Content content and more content.
          Content content and more content. Content content and more content.
        </p>
        <Heading2>Level 2 heading</Heading2>
        <p>
          Portal template is a free and open source documentation website
          template. Feel free to clone it on Github, and use it for your
          project.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component
          is customizable using css variables.
        </p>
        <p>
          Content content and more content. Content content and more content.
          Content content and more content. Content content and more content.
          Content content and more content. Content content and more content.
          Content content and more content. Content content and more content.
        </p>

        <Heading3>Level 3 heading</Heading3>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component
          is customizable using css variables.
        </p>
        <p>
          Some content and more content. Content content and more content.
          Content content and more content. Content content and more content.
        </p>

        <Heading3>One more level 3 heading</Heading3>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component
          is customizable using css variables.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component
          is customizable using css variables.
        </p>

        <Heading2>One more heading 2</Heading2>
        <p>
          Some content and more content. Content content and more content.
          Content content and more content. Content content and more content.
        </p>
        <p>
          Some content and more content. Content content and more content.
          Content content and more content. Content content and more content.
        </p>
        <p>
          We use this template to kickstart documentation projects for our
          clients at Portal. Need help or just want to chat about building
          better documentation? Get in touch via email or Twitter.
        </p>

        <Heading2>This is the last level 2 heading</Heading2>
        <p>
          Portal template is a free and open source documentation website
          template. Feel free to clone it on Github, customize per your needs,
          and use it for your project.
        </p>
        <p>
          It’s build with Next.js and styled with tailwindcss. Every component
          is customizable using css variables. You’re welcome to visit other
          pages in this template to learn more about each components in the
          template. We’ve also added some tips and tricks about what it takes to
          build a neat documentation portal.
        </p>
        <p>
          (Callout?) We use this template to kickstart documentation projects
          for our clients at Portal. Need help or just want to chat about
          building better documentation? Get in touch via email or Twitter.
        </p>
      </article>
    </PageLayout>
  );
};

export default Home;
