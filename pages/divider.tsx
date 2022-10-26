import { NextPage } from 'next';
import { Link } from '../components/link';
import { CodeBlock } from '../components/code-block';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';

const DividerPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Divider</PageTitle>
          <PageSubtitle>Learn about the divider component and how to use it.</PageSubtitle>
        </header>
        <p>
          Divider is meant to separate the article into multiple sections. It&apos;s plain HTML
          element. This is how it looks like:
        </p>
        <hr />
        <Heading2>Add divider</Heading2>
        <p>
          Use plain HTML <code>hr</code> tag:
        </p>
        <CodeBlock language="tsx">{'<hr/>'}</CodeBlock>
        <Heading2>Customize divider style</Heading2>
        <p>
          Adjust divider&apos;s visual style in the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css"
          >
            global.css
          </Link>{' '}
          file.
        </p>
      </article>
    </PageLayout>
  );
};

export default DividerPage;
