import { NextPage } from 'next';
import { CodeBlock } from '../components/code-block';
import { List } from '../components/list';
import { PageLayout } from '../components/page-layout';
import { Callout } from '../components/callout';
import { Link } from '../components/link';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';

const ListsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Lists</PageTitle>
          <PageSubtitle>Learn about the List component and how to use it.</PageSubtitle>
        </header>
        <p>
          List component shows text in the list. Underneath it should contain <code>ul</code> and{' '}
          <code>ol</code> html tags. This is how the component looks like:
        </p>
        <List>
          <li>
            <p>Apples</p>
          </li>
          <li>
            <p>Carrots</p>
          </li>
          <li>
            <p>Pineapples</p>
          </li>
        </List>
        <Heading2>Add list</Heading2>
        <p>
          Import the component from{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/list"
          >
            list
          </Link>{' '}
          folder:
        </p>
        <CodeBlock language="javascript">{"import { List } from '../components/list';"}</CodeBlock>
        <p>
          Component ordered and unordered lists. Control it with <code>type</code> prop:
        </p>
        <CodeBlock language="javascript">
          {`` +
            `<List type="ordered">\n` +
            `  <li><p>Buy the groceries</p></li>\n` +
            `  <li><p>Cook the food</p></li>\n` +
            `  <li><p>Eat the food</p></li>\n` +
            `  <li><p>Wash the dishes</p></li>\n` +
            `<List type="ordered">\n` +
            ``}
        </CodeBlock>
        <p>This is how the ordered list looks like:</p>
        <List type="ordered">
          <li>
            <p>Buy the groceries</p>
          </li>
          <li>
            <p>Cook the food</p>
          </li>
          <li>
            <p>Eat the food</p>
          </li>
          <li>
            <p>Wash the dishes</p>
          </li>
        </List>
        <Callout type="warning">
          List component doesn&apos;t support <code>ol</code> tag{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attributes"
          >
            attributes
          </Link>
          .
        </Callout>
        <Heading2>Customize list style</Heading2>
        <p>
          Adjust list style in the{' '}
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

export default ListsPage;
