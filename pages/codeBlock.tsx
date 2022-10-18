import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const CodeBlock: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Code Block</PageTitle>
          <PageSubtitle>
            Learn more about typography components in this template
          </PageSubtitle>
        </header>
        <p>Code block is pretty neat. Let&apos;s have mor of it.</p>
        <pre>
            <code>
                {/*
                   add any code example
                */}
            </code>
        </pre>
      </article>
    </PageLayout>
  );
};

export default CodeBlock;
