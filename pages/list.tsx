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
          The <code>List</code> is a wrapper around styled <code>ul</code> and <code>ol</code> html
          tags. This is how it looks like:
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
          Import the component from the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/list"
          >
            list
          </Link>{' '}
          folder:
        </p>
        <CodeBlock language="typescript">{"import { List } from '../components/list';"}</CodeBlock>
        <p>
          The component accepts a <code>type</code> property which must have a value of either{' '}
          <code>ordered</code> or <code>unordered</code>:
        </p>
        <CodeBlock language="tsx">
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
          List component doesn&apos;t accept html{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attributes"
          >
            attributes
          </Link>{' '}
          for the <code>ol</code> and <code>ul</code> tags. This is a todo.{' '}
        </Callout>
        <Heading2>Customize list style</Heading2>
        <p>
          Adjust the appearance in{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css"
          >
            global.css
          </Link>
        </p>
      </article>
    </PageLayout>
  );
};

export default ListsPage;
