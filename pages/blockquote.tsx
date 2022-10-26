import { NextPage } from 'next';
import { Link } from '../components/link';
import { Blockquote } from '../components/blockquote';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import { CodeBlock } from '../components/code-block';

const BlockquotePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Block Quote</PageTitle>
          <PageSubtitle>Learn about Blockquote component and how to use it.</PageSubtitle>
        </header>
        <p>
          Blockquote component highlights the citations of other people&apos;s thoughts. Underneath
          the react component are HTML <code>blockquote</code> and <code>figure</code> tags. This is
          how the component looks like:
        </p>
        <Blockquote
          caption={
            <>
              — Aldous Huxley, <cite>Brave New World</cite>
            </>
          }
          cite="https://www.huxley.net/bnw/four.html"
        >
          Words can be like X-rays, if you use them properly—they will go through anything. You read
          and you are pierced.
        </Blockquote>
        <Heading2>Add blockquote</Heading2>
        <p>
          Import the component from{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/blockquote"
          >
            blockquote
          </Link>{' '}
          folder:
        </p>
        <CodeBlock language="typescript">
          {"import { Blockquote } from '../components/blockquote';"}
        </CodeBlock>
        <p>
          Enter the quote value to the <code>children</code> prop, add details about the quote using{' '}
          <code>caption</code> and <code>cite</code> props:
        </p>
        <CodeBlock language="jsx">
          {`` +
            `<Blockquote\n` +
            `  caption={<> - Aldous Huxley, <cite>Brave New World</cite></>}\n` +
            `  cite="https://www.huxley.net/bnw/four.html"\n` +
            `>\n` +
            `  Words can be like X-rays, if you use them properly—they will go through anything.\n` +
            `  You read and you are pierced.\n` +
            `</Blockquote>\n` +
            ``}
        </CodeBlock>
        <Heading2>Customize blockquote style</Heading2>
        <p>
          Adjust blockquote&apos;s visual style in the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/components/blockquote/Blockquote.tsx"
          >
            Blockquote.tsx
          </Link>{' '}
          file.
        </p>
      </article>
    </PageLayout>
  );
};

export default BlockquotePage;
