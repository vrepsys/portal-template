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
          <PageTitle>Creating new page</PageTitle>
          <PageSubtitle>
            Learn how to add a new page using portal-template.
          </PageSubtitle>
        </header>
        <p>Create a new <code>your-page-name.tsx</code> file in <Link url="https://github.com/vrepsys/portal-template/tree/main/pages" target="_blank">pages</Link> folder. Then import <code>NextPage</code> and <code>PageLayout</code> components to the new file:</p>
        <CodeBlock>
          {`import \{ NextPage \} from \'next\';\n` +
            `import \{ PageLayout \} from \'../components/page-layout\';\n` +
          ``}
        </CodeBlock>
        <p>Create NextJS const. Add <code>{"<article>"}</code> and <code>{"<header>"}</code> inside:</p>
        <CodeBlock>
          {`` +
            `const YourPageName: NextPage = () => {\n` +
            `  return (\n` +
            `    <PageLayout>\n` +
            `      <article>\n` +
            `        <header>Your page header</header>\n` +
            `        Your page content\n` +
            `      </article>\n` +
            `    </PageLayout>\n` +
            `  );\n` +
            `};\n` +
            ``}
        </CodeBlock>
        <p>Export your NextJS const</p>
        <CodeBlock>
          {`` +
            `export default YourPageName;\n` +
            ``}
        </CodeBlock>
        <Heading2>Add to the sidebar</Heading2>
        <p>Open <Link url="https://github.com/vrepsys/portal-template/blob/main/components/side-navigation/navigation.ts">navigation.ts</Link> file. The file exports list categories. Each cateogry has its navigation items:</p>
        <CodeBlock language='typescript'>
          {`` +
          `const YourListGroupName: NavItem[] = [\n` +
          `  { title: 'Your new page', url: '/your-new-page' },\n` +
          `  { title: 'Some other page', url: '/some-other-page' },\n` +
          `  ...\n` +
          `];\n` +
          ``}
        </CodeBlock>
        <p><code>title</code> declares what will be shown for the user in the sidebar. <code>url</code> is the name of a file saved in <Link url="https://github.com/vrepsys/portal-template/tree/main/pages">pages</Link> folder.</p>
        <p>Assign your page to a category or declare it directly in export constant:</p>
        <CodeBlock language='typescript'>
          {`` +

            `export const navigation: Category[] = [\n` +
            `  { items: [{title: "Your new page", url: "/your-new-page"}]},\n` +
            `  { title: 'Your list group name', items: YourListGroupName },\n` +
            `];\n` +
            ``}
        </CodeBlock>
        <Heading2>Customize page layout</Heading2>
        <p>Adjust the page layout spacing using variables in <Link url="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css">global.css</Link> file.</p>
        <Table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default value</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--width-page-article-column</code></td>
              <td><code>15rem</code></td>
            </tr>
            <tr>
              <td><code>--width-page-table-of-contents-column</code></td>
              <td><code>15rem</code></td>
            </tr>
            <tr>
              <td><code>--width-page-column-gap</code></td>
              <td><code>3.5rem</code></td>
            </tr>
            <tr>
              <td><code>--width-page-padding</code></td>
              <td><code>2.5rem</code></td>
            </tr>
            <tr>
              <td><code>--width-page-padding-mobile</code></td>
              <td><code>1.25rem</code></td>
            </tr>
          </tbody>
        </Table>
        <p>For other changes customize <Link url="https://github.com/vrepsys/portal-template/blob/main/components/page-layout/PageLayout.tsx">PageLayout.tsx</Link> file.</p>
      </article>
    </PageLayout>
  );
};

export default CreatingNewPagePage;
