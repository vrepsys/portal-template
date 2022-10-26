import { NextPage } from 'next';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';
import { PageLayout } from '../components/page-layout';
import { Heading2, Heading5, PageSubtitle, PageTitle } from '../components/typography';

const CodeBlockPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Code block</PageTitle>
          <PageSubtitle>Learn how the CodeBlock component works and how to use it.</PageSubtitle>
        </header>
        <p>
          The <code>CodeBlock</code> component uses{' '}
          <Link href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">
            React Syntax Highlighter
          </Link>{' '}
          with a default theme that was designed to match the style of this template. This is how it
          looks like:
        </p>
        <CodeBlock language="javascript">
          {'const example = "Code block example";\n' + 'console.log(example);'}
        </CodeBlock>
        <Heading2>Add code block</Heading2>
        <p>
          Import the component from{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/code-block"
          ></Link>
          code-block folder:
        </p>
        <CodeBlock language="javascript">
          {"import { CodeBlock } from '../components/code-block';"}
        </CodeBlock>
        <p>
          Specify the code snippet language using <code>language</code> prop:
        </p>
        <CodeBlock language="javascript">
          {'<CodeBlock language="javascript">\n' +
            `   {'const example = "Code block example";\\n' +\n` +
            `    'console.log(example);'}\n` +
            '</CodeBlock>'}
        </CodeBlock>
        <Heading2>Customize code block style</Heading2>
        <p>
          Adjust code block&apos;s visual style in the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css"
          >
            globals.css
          </Link>{' '}
          file by changing <code>hljs-</code> css classes.
        </p>
        <p>
          Alternatively, you can use the <code>style</code> property to specify one of the{' '}
          <Link href="https://highlightjs.org">highlight.js</Link> styles.
        </p>
      </article>
    </PageLayout>
  );
};

export default CodeBlockPage;
