import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import { Table } from '../components/table';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';

const Typography: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Typography</PageTitle>
          <PageSubtitle>
            This template provides a number of text styles. Read below to learn about them and how
            to use them.
          </PageSubtitle>
        </header>
        <Table className="align-middle">
          <thead>
            <tr>
              <th>Style</th>
              <th>Typeface</th>
              <th>Weight</th>
              <th>Size mobile</th>
              <th>Size desktop</th>
              <th>Letter spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="font-serif text-title text-color-default">H1</span>
              </td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>32 pt</td>
              <td>36 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-serif text-headline-largest text-color-default">H2</span>
              </td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>24 pt</td>
              <td>28 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-serif text-headline-large text-color-default">H3</span>
              </td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>20 pt</td>
              <td>24 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-serif text-headline-medium text-color-default">H4</span>
              </td>
              <td>Source Serif Pro</td>
              <td>SemiBold</td>
              <td>20 pt</td>
              <td>20 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-headline-small text-color-default">H5</span>
              </td>
              <td>Inter</td>
              <td>SemiBold</td>
              <td>16 pt</td>
              <td>16 pt</td>
              <td>0.8 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-headline-smallest text-color-default">H6</span>
              </td>
              <td>Inter</td>
              <td>SemiBold</td>
              <td>13 pt</td>
              <td>13 pt</td>
              <td>0.8 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-subtitle text-color-secondary">Subtitle</span>
              </td>
              <td>Inter</td>
              <td>Regular</td>
              <td>20 pt</td>
              <td>20 pt</td>
              <td>0.2 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-base text-color-default">Body text</span>
              </td>
              <td>Inter</td>
              <td>Regular</td>
              <td>16 pt</td>
              <td>16 pt</td>
              <td>0.2 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-small text-color-default">Small body text</span>
              </td>
              <td>Inter</td>
              <td>Regular</td>
              <td>13 pt</td>
              <td>13 pt</td>
              <td>0.2 pt</td>
            </tr>
            <tr>
              <td>
                <span className="font-mono text-code text-color-default">Code</span>
              </td>
              <td>Source Code Pro</td>
              <td>Medium</td>
              <td>14 pt</td>
              <td>14 pt</td>
              <td>0.2 pt</td>
            </tr>
          </tbody>
        </Table>
        <CodeBlock language="typescript">
          {`import \{ NextPage \} from \'next\';\n` +
            `import \{ PageLayout \} from \'../components/page-layout\';\n` +
            `import \{ Heading2, PageSubtitle, PageTitle } from \'../components/typography\';\n\n` +
            `const PageName: NextPage = () => {\n` +
            `  return (\n` +
            `    <PageLayout>\n` +
            `      <article>\n` +
            `        <header>\n` +
            `          <PageTitle>Page title</PageTitle>\n` +
            `          <PageSubtitle>Page subtitle</PageSubtitle>\n` +
            `        </header>\n` +
            `        <p>Paragraph</p>\n` +
            `      </article>\n` +
            `    </PageLayout>\n` +
            `  );\n` +
            `};\n\n` +
            `export default PageName\n` +
            ``}
        </CodeBlock>
        <Heading2>Inline styling</Heading2>
        <p>
          Paragraph supports these inline styles: <code>code</code>, <mark>marked</mark>,
          <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <Link href="#">hyperlink</Link>.
        </p>
        <CodeBlock language="html">
          {
            '<code>code</code>, <mark>marked</mark>, <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <Link url="#">hyperlink</Link>'
          }
        </CodeBlock>
        <Heading2>Styling styles</Heading2>
        <p>
          Change typography sizes in{' '}
          <Link
            href="https://github.com/vrepsys/portal-template/blob/main/tailwind.config.js#L44"
            target="_blank"
          >
            tailwind.config.js
          </Link>
          . Colors and margins are located in global.css file.
        </p>
        <p>
          <code>tailwind.config.js</code>
        </p>
      </article>
    </PageLayout>
  );
};

export default Typography;
