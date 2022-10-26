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
          <PageSubtitle>Learn about Callout component and how to use it.</PageSubtitle>
        </header>
        <p>Callout component has a distinct look meant to drag reader's attention, so critical information could be noticed. This is how the component looks like:</p>
        <Callout type="info">
          This message is just for a demo purpose to show the component's look. 
        </Callout>
        <Heading2>Add callout</Heading2>
        <p>Import the component from <Link target="_blank" href="#">callout</Link> folder:</p>
        <CodeBlock>
          {"import { Callout } from '../components/callout';"}
        </CodeBlock>
        <p>Specify callout style using <code>type</code> prop. It supports 4 values: <code>info</code>,<code>caution</code>,<code>warning</code>,<code>success</code>:</p>
        <CodeBlock language='javascript'>
          {`` +
          `<Callout type="info">\n` +
          `  Callout message\n` +
          `</Callout>` +
          ``}
        </CodeBlock>
        <p>Here is the visual style of each type:</p>
        <Callout type="info">Info — hint or general information.</Callout>
        <Callout type="caution">Caution — critical information telling what's blocking.</Callout>
        <Callout type="warning">Warning — important information that may affect user's workflow.</Callout>
        <Callout type="success">Success – message tells that all works.</Callout>
        <Heading2>Customize callout style</Heading2>
        <p>Adjust component's style in the <Link target="_blank" href="https://github.com/vrepsys/portal-template/blob/main/components/callout/Callout.tsx">Callout.tsx</Link> file.</p>
      </article>
    </PageLayout>
  );
};

export default CalloutPage;
