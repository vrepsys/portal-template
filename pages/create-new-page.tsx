import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import { Table } from '../components/table';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';

const CreatingNewPagePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>How to create a new page</PageTitle>
          <PageSubtitle>Learn how to use the Layout component to create new pages.</PageSubtitle>
        </header>
        <p>
          Create a new <code>your-page-name.tsx</code> file in the{' '}
          <Link href="https://github.com/vrepsys/portal-template/tree/main/pages" target="_blank">
            pages
          </Link>{' '}
          folder and import the dependencies. In Next.js the file name represents the url slug for
          the page.
        </p>
        <CodeBlock language="typescript">
          {`import \{ NextPage \} from \'next\';\n` +
            `import \{ PageLayout \} from \'../components/page-layout\';\n` +
            ``}
        </CodeBlock>
        <p>
          Create a NextPage that wraps your content in a <code>{'<PageLayout>'}</code>. Start by
          adding a page title and a subtitle.
        </p>
        <CodeBlock language="tsx">
          {`const YourPageName: NextPage = () => {\n` +
            `  return (\n` +
            `    <PageLayout>\n` +
            `      <article>\n` +
            `        <header>\n` +
            `           <PageTitle>Your page title</PageTitle>\n` +
            `           <PageSubtitle>Page subtitle</PageSubtitle> \n` +
            `        </header>\n` +
            `        <p>Your page content goes here.</p>\n` +
            `      </article>\n` +
            `    </PageLayout>\n` +
            `  );\n` +
            `};\n`}
        </CodeBlock>
        <p>Export your the page</p>
        <CodeBlock language="typescript">{`` + `export default YourPageName;\n` + ``}</CodeBlock>
        <Heading2>Add your page to the sidebar</Heading2>
        <p>
          Navigation items and item groups are defined in{' '}
          <Link href="https://github.com/vrepsys/portal-template/blob/main/components/side-navigation/navigation.ts">
            side-navigation/navigation.ts
          </Link>
          . To add a new item to the sidebar we&apos;ll create a new items group. Start by defining
          items for the new group:
        </p>
        <CodeBlock language="typescript">
          {`` +
            `const newItems: NavItem[] = [\n` +
            `  { title: 'Your new page', url: '/your-new-page' },\n` +
            `  { title: 'Some other page', url: '/some-other-page' },\n` +
            `  ...\n` +
            `];\n` +
            ``}
        </CodeBlock>
        <p>
          The <code>title</code> property represents the navigation item text in the sidebar.{' '}
          <code>url</code> is the name of a file saved in{' '}
          <Link href="https://github.com/vrepsys/portal-template/tree/main/pages">pages</Link>{' '}
          folder.
        </p>
        <p>
          For the new group to show up in the navigation add a new item to the{' '}
          <code>navigation</code> array:
        </p>
        <CodeBlock language="typescript">
          {`` +
            `export const navigation: Category[] = [\n` +
            `  { title: 'Title for the new group', items: newItems },\n` +
            `  ...\n` +
            `];\n` +
            ``}
        </CodeBlock>
      </article>
    </PageLayout>
  );
};

export default CreatingNewPagePage;
