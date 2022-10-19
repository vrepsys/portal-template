import { NextPage } from 'next';
import { CodeBlock } from '../components/code-block';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

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
          <PageTitle>Code Block</PageTitle>
          <PageSubtitle>Learn more about typography components in this template</PageSubtitle>
        </header>
        <p>Code block is pretty neat. Let&apos;s have mor of it.</p>
        <CodeBlock language="typescript">{code}</CodeBlock>
      </article>
    </PageLayout>
  );
};

export default CodeBlockPage;
