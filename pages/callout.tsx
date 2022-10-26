import { NextPage } from 'next';
import { Callout } from '../components/callout';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import { Link } from '../components/link';
import { CodeBlock } from '../components/code-block';

const CalloutPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Callout</PageTitle>
          <PageSubtitle>Learn about the Callout component and how to use it.</PageSubtitle>
        </header>
        <p>
          Callout component has a distinct look meant to draw reader&apos;s attention, so that
          critical information is more noticeable. This is how the component looks like:
        </p>
        <Callout type="info">This is how a callout looks like</Callout>
        <Heading2>Add callout</Heading2>
        <p>
          Import the component from the{' '}
          <Link target="_blank" href="#">
            callout
          </Link>{' '}
          folder:
        </p>
        <CodeBlock language="typescript">
          {"import { Callout } from '../components/callout';"}
        </CodeBlock>
        <p>
          Specify the callout style using the <code>type</code> prop. It supports 4 values:{' '}
          <code>info</code>,<code>caution</code>,<code>warning</code>,<code>success</code>:
        </p>
        <CodeBlock language="tsx">
          {`<Callout type="info">\n` + `  Callout message\n` + `</Callout>`}
        </CodeBlock>
        <p>Examples:</p>
        <Callout type="info">Info — hint or general information.</Callout>
        <Callout type="caution">
          Caution — critical information telling what&apos;s blocking.
        </Callout>
        <Callout type="warning">
          Warning — important information that may affect user&apos;s workflow.
        </Callout>
        <Callout type="success">Success — message tells that all works.</Callout>
        <Heading2>Customize callout appearance</Heading2>
        <p>
          Adjust component&apos;s style by modifying the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/components/callout/Callout.tsx"
          >
            Callout.tsx
          </Link>
          .
        </p>
      </article>
    </PageLayout>
  );
};

export default CalloutPage;
