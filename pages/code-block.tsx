import { NextPage } from 'next';
import { CodeBlock } from '../components/code-block';
import { PageLayout } from '../components/page-layout';
import { Heading2, Heading5, PageSubtitle, PageTitle } from '../components/typography';

const CodeBlockPage: NextPage = () => {
  const code =
    'useEffect(() => { \n \
    const headingElements = Array.from(document.querySelectorAll("h2, h3")); \n \
    const newNestedHeadings = getNestedHeadings(headingElements);\n  \
    setNestedHeadings(newNestedHeadings); \n \
    }, []);';
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Code block</PageTitle>
          <PageSubtitle>Learn how the CodeBlock component works</PageSubtitle>
        </header>
        <p>
          The <code>CodeBlock</code> component uses{' '}
          <a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">
            React Syntax Highlighter
          </a>{' '}
          with a default theme that was designed to match the style of this template.
        </p>
        <p>
          You can customize it in the <code>globals.css</code> file by changing <code>hljs-</code>{' '}
          css classes.
        </p>
        <p>
          Alternatively, you can use the <code>style</code> property to specify one of the{' '}
          <a href="https://highlightjs.org">highlight.js</a> styles.
        </p>
        <Heading2>Example</Heading2>
        <Heading5>Example code:</Heading5>
        <CodeBlock language="jsx">
          {'<CodeBlock language="javascript">\n' +
            `   {'const example = "Code block example";\\n' + 'console.log(example);'}\n` +
            '</CodeBlock>'}
        </CodeBlock>
        <Heading5>How it&apos;s rendered:</Heading5>
        <CodeBlock language="javascript">
          {'const example = "Code block example";\n' + 'console.log(example);'}
        </CodeBlock>
      </article>
    </PageLayout>
  );
};

export default CodeBlockPage;
