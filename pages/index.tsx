import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portal Docs Template</title>
        <meta
          name="description"
          content="A Next.js template to get started with your documentation portal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Portal template is a free and open source documentation website
          template. Feel free to clone it on Github, customize per your needs,
          and use it for your project.
        </h1>
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
      </main>
    </div>
  );
};

export default Home;
