import { NextPage } from 'next';
import { Link } from '../components/link';
import { CodeBlock } from '../components/code-block';
import { PageLayout } from '../components/page-layout';
import { Table } from '../components/table';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';

const TablePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Table</PageTitle>
          <PageSubtitle>Everything you need to know about the Table component.</PageSubtitle>
        </header>
        <p>
          Table component lists data in columns and rows. The component is a mix of react and HTML
          tags. This is how it looks like:
        </p>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mars</td>
              <td>Red</td>
              <td>97.689</td>
            </tr>
            <tr>
              <td>Jupiter</td>
              <td>Big</td>
              <td>611.92</td>
            </tr>
            <tr>
              <td>Saturn</td>
              <td>Ring</td>
              <td>1 424.8</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Total:</td>
              <td>2 134.409</td>
            </tr>
          </tfoot>
        </Table>
        <Heading2>Add table</Heading2>
        <p>
          Import the component from the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/table"
          >
            table
          </Link>{' '}
          folder:
        </p>
        <CodeBlock language="typescript">
          {"import { Table } from '../components/table';"}
        </CodeBlock>
        <p>
          The parent tag is converted to react, everything else is plain HTML. This way you can add
          additional control to the component when needed:
        </p>
        <CodeBlock language="tsx">
          {`` +
            `<Table>\n` +
            `  <thead>\n` +
            `    <tr>\n` +
            `      <th>Name</th>\n` +
            `      <th>Code</th>\n` +
            `      <th>Distance</th>\n` +
            `    </tr>\n` +
            `  </thead>\n` +
            `  <tbody>\n` +
            `    <tr>\n` +
            `      <th>Mars</th>\n` +
            `      <th>Red</th>\n` +
            `      <th>97.689</th>\n` +
            `    </tr>\n` +
            `    ...\n` +
            `  </tbody>\n` +
            `  <tfoot>\n` +
            `    ...\n` +
            `  </foot>\n` +
            `</Table>` +
            ``}
        </CodeBlock>
        <Heading2>Customize table style</Heading2>
        <p>
          Adjust the table visual style in the{' '}
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

export default TablePage;
