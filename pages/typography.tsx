import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import {
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  PageSubtitle,
  PageTitle,
} from '../components/typography';
import { Table } from '../components/table';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';

const Typography: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Typography</PageTitle>
          <PageSubtitle>Learn about available text styles and how to use them.</PageSubtitle>
        </header>
        <p>
          Here&apos; a list of typography elements we defined and styled in Portal template.
          Headings are defined as React components so they&apos;re easy to extend. For inline styles
          we opted for simple html tags.
        </p>
        <Table className="align-middle">
          <thead>
            <tr>
              <th>Style</th>
              <th>Component</th>
              <th>Rendered tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-center">
                <span className="font-serif text-title text-color-default">Page title</span>
              </td>
              <td>
                <code>{'<PageTitle>'}</code>
              </td>
              <td>
                <code>{'<h1>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-serif text-headline-largest text-color-default">
                  Headline largest
                </span>
              </td>
              <td>
                <code>{'<Heading2>'}</code>
              </td>
              <td>
                <code>{'<h2>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-serif text-headline-large text-color-default">
                  Headline large
                </span>
              </td>
              <td>
                <code>{'<Heading3>'}</code>
              </td>
              <td>
                <code>{'<h3>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-serif text-headline-medium text-color-default">
                  Headline medium
                </span>
              </td>
              <td>
                <code>{'<Heading4>'}</code>
              </td>
              <td>
                <code>{'<h4>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-headline-small text-color-default">
                  Headline small
                </span>
              </td>
              <td>
                <code>{'<Heading5>'}</code>
              </td>
              <td>
                <code>{'<h5>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-headline-smallest text-color-default">
                  Headline smallest
                </span>
              </td>
              <td>
                <code>{'<Heading6>'}</code>
              </td>
              <td>
                <code>{'<h6>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-subtitle text-color-secondary">Subtitle</span>
              </td>
              <td>
                <code>{'<PageSubtitle>'}</code>
              </td>
              <td>
                <code>{"<p class='page-subtitle'>"}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-base text-color-default">Body text</span>
              </td>
              <td>{'<p>'}</td>
              <td>
                <code>{'<p>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-sans text-small text-color-default">Small body text</span>
              </td>
              <td>
                <code>{'<small>'}</code>
              </td>
              <td>
                <code>{'<small>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-mono text-code text-color-default">Code</span>
              </td>
              <td>
                <code>{'<code>'}</code>
              </td>
              <td>{'<code>'}</td>
            </tr>
          </tbody>
        </Table>
        <Heading2>Add headlines</Heading2>
        <p>
          Import text style components from the{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/typography"
          >
            typography
          </Link>{' '}
          folder:
        </p>
        <CodeBlock language="typescript">
          {`import \{ PageTitle, PageSubtitle, Heading2, Heading3, Heading4, Heading5, Heading6 } from \'../components/typography\';`}
        </CodeBlock>
        <p>
          <code>{'<h1>'}</code>- <code>{'<h6>'}</code> HTML tags and a subtitle paragraph use React
          components. They of indexing the titles for the table of contents.
        </p>
        <p>
          Make sure page title and subtitle components wrapped inside a <code>{'<header>'}</code>{' '}
          tag:
        </p>
        <CodeBlock language="tsx">
          {`<header> \n` +
            ` <PageTitle>Your page title</PageTitle> \n` +
            ` <PageSubtitle>Your page subtitle</PageSubtitle> \n` +
            `</header>`}
        </CodeBlock>
        <p>Add headlines using these components:</p>
        <CodeBlock language="tsx">
          {`<Heading2>Your headline</Heading2> \n` +
            `<Heading3>Your headline</Heading3> \n` +
            `<Heading4>Your headline</Heading4> \n` +
            `<Heading5>Your headline</Heading5> \n` +
            `<Heading6>Your headline</Heading6> \n`}
        </CodeBlock>
        <Heading2>Body text</Heading2>
        <p>
          For paragraphs use the plain HTML <code>{'<p>'}</code> tag.
        </p>
        <Heading3>Inline styles</Heading3>
        <p>Inline styles use plain HTML tags. Defined inline styles:</p>
        <Table>
          <thead>
            <tr>
              <th>Style</th>
              <th>HTML tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>Code</code>
              </td>
              <td>
                <code>{'<code/>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <mark>Marked</mark>
              </td>
              <td>
                <code>{'<mark/>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Bold</strong>
              </td>
              <td>
                <code>{'<strong/>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <em>Italic</em>
              </td>
              <td>
                <code>{'<em/>'}</code>
              </td>
            </tr>
            <tr>
              <td>
                <u>Underline</u>
              </td>
              <td>
                <code>{'<u/>'}</code>
              </td>
            </tr>
          </tbody>
        </Table>
        <Heading3>Hyperlinks</Heading3>
        <p>
          <Link href="#hyperlinks">Hyperlinks</Link> use a Next.js <code>Link</code> component which
          enables page pre-caching for internal pages.
          <br /> Import it from:
        </p>
        <CodeBlock language="typescript">{`import { Link } from '../components/link';`}</CodeBlock>
        <p>
          <code>Link</code> component passes all{' '}
          <Link
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes"
          >
            attributes
          </Link>{' '}
          down to the <code>{'<a>'}</code> tag . Use it like this:
        </p>{' '}
        <CodeBlock language="tsx">
          {`` + `<Link href="/your-page-name">hyperlink</Link>\n` + ``}
        </CodeBlock>
        <Heading2>Customize text styles</Heading2>
        <p>
          Adjust the style and size of all typography elements in{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/tailwind.config.js#L44"
          >
            tailwind.config.js
          </Link>{' '}
          file. Text colors and margins can be adjusted in{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css"
          >
            global.css
          </Link>{' '}
          . Here are the default values:
        </p>
        <Table className="align-middle">
          <thead>
            <tr>
              <th>Classname</th>
              <th>Typeface</th>
              <th>Weight</th>
              <th>Size mobile</th>
              <th>Size desktop</th>
              <th>Letter spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text-title</td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>32 pt</td>
              <td>36 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>text-headline-largest</td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>24 pt</td>
              <td>28 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>text-headline-large</td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>20 pt</td>
              <td>24 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>text-headline-medium</td>
              <td>Source Serif Pro</td>
              <td>SemiBold</td>
              <td>20 pt</td>
              <td>20 pt</td>
              <td>0.4 pt</td>
            </tr>
            <tr>
              <td>text-headline-small</td>
              <td>Inter</td>
              <td>SemiBold</td>
              <td>16 pt</td>
              <td>16 pt</td>
              <td>0.8 pt</td>
            </tr>
            <tr>
              <td>text-headline-smallest</td>
              <td>Inter</td>
              <td>SemiBold</td>
              <td>13 pt</td>
              <td>13 pt</td>
              <td>0.8 pt</td>
            </tr>
            <tr>
              <td>text-subtitle</td>
              <td>Inter</td>
              <td>Regular</td>
              <td>20 pt</td>
              <td>20 pt</td>
              <td>0.2 pt</td>
            </tr>
            <tr>
              <td>text-base</td>
              <td>Inter</td>
              <td>Regular</td>
              <td>16 pt</td>
              <td>16 pt</td>
              <td>0.2 pt</td>
            </tr>
            <tr>
              <td>text-small</td>
              <td>Inter</td>
              <td>Regular</td>
              <td>13 pt</td>
              <td>13 pt</td>
              <td>0.2 pt</td>
            </tr>
            <tr>
              <td>text-code</td>
              <td>Source Code Pro</td>
              <td>Medium</td>
              <td>14 pt</td>
              <td>14 pt</td>
              <td>0.2 pt</td>
            </tr>
          </tbody>
        </Table>
      </article>
    </PageLayout>
  );
};

export default Typography;
