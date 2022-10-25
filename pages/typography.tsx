import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { Heading2, Heading3, Heading4, Heading5, PageSubtitle, PageTitle } from '../components/typography';
import { Table } from '../components/table';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';
import { List } from '../components/list';

const Typography: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Typography</PageTitle>
          <PageSubtitle>
            Learn about available text styles and how to use them.
          </PageSubtitle>
        </header>
        <p>Portal template provides a set number of text styles. Some text styles are used as components. Here's a full list of available options:</p>
        <Table className='align-middle'>
          <thead>
            <tr>
              <th>Style</th>
              <th>Component name</th>
              <th>Rendered HTML tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="font-serif text-title text-color-default">Page title</span></td>
              <td><code>{"<PageTitle/>"}</code></td>
              <td><code>{"<h1/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-serif text-headline-largest text-color-default">Headline largest</span></td>
              <td><code>{"<Heading2/>"}</code></td>
              <td><code>{"<h2/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-serif text-headline-large text-color-default">Headline large</span></td>
              <td><code>{"<Heading3/>"}</code></td>
              <td><code>{"<h3/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-serif text-headline-medium text-color-default">Headline medium</span></td>
              <td><code>{"<Heading4/>"}</code></td>
              <td><code>{"<h4/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-sans text-headline-small text-color-default">Headline small</span></td>
              <td><code>{"<Heading5/>"}</code></td>
              <td><code>{"<h5/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-sans text-headline-smallest text-color-default">Headline smallest</span></td>
              <td><code>{"<Heading6/>"}</code></td>
              <td><code>{"<h6/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-sans text-subtitle text-color-secondary">Subtitle</span></td>
              <td><code>{"<PageSubtitle/>"}</code></td>
              <td><code>{"<p class='page-subtitle'/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-sans text-base text-color-default">Body text</span></td>
              <td>Plain HTML</td>
              <td><code>{"<p/>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-sans text-small text-color-default">Small body text</span></td>
              <td>Plain HTML</td>
              <td><code>{"<p><small/></p>"}</code></td>
            </tr>
            <tr>
              <td><span className="font-mono text-code text-color-default">Code text</span></td>
              <td>Used in <code>{"<CodeBlock/>"}</code> component</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
        <Heading2>Add headlines</Heading2>
        <p>Import all text style components from <Link target="_blank" href="https://github.com/vrepsys/portal-template/tree/main/components/typography">typography</Link> folder:</p>
        <CodeBlock language='javascript'>
          {`import \{ PageTitle, PageSubtitle, Heading2, Heading3, Heading4, Heading5, Heading6 } from \'../components/typography\';`}
        </CodeBlock>
        <p><code>{"<h1>"}</code>- <code>{"<h6>"}</code> HTML tags and a subtitle paragraph use components. Components take care of indexing the titles. Paragraphs and inline styles use plain HTML.</p>
        <p>Make sure page title and subtitle components are added inside <code>{"<header/>"}</code> tag:</p>
        <CodeBlock language='javascript'>
          {`` +
          `<header> \n` +
          ` <PageTitle>Your page title</PageTitle> \n` +
          ` <PageSubtitle>Your page subtitle</PageSubtitle> \n` +
          `</header>` +
          ``}
        </CodeBlock>
        <p>Add headlines using these components:</p>
        <CodeBlock language='javascript'>
          {`` +
          `<Heading2>Your headline</Heading2> \n` +
          `<Heading3>Your headline</Heading3> \n` +
          `<Heading4>Your headline</Heading4> \n` +
          `<Heading5>Your headline</Heading5> \n` +
          `<Heading6>Your headline</Heading6> \n` +
          ``}
        </CodeBlock>

        <Heading2>Add body text</Heading2>
        <p>Parapgrahs are added using plain HTML <code>{"<p/>"}</code> tag.</p>
        <Heading3>Inline styles</Heading3>
        <p>
          Inline styles are added using plain HTML. Defined inline styles:
        </p>
        <Table>
          <thead>
            <tr>
              <th>Style</th>
              <th>HTML tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Code</code></td>
              <td><code>{"<code/>"}</code></td>
            </tr>
            <tr>
              <td><mark>Marked</mark></td>
              <td><code>{"<mark/>"}</code></td>
            </tr>
            <tr>
              <td><strong>Bold</strong></td>
              <td><code>{"<strong/>"}</code></td>
            </tr>
            <tr>
              <td><em>Italic</em></td>
              <td><code>{"<em/>"}</code></td>
            </tr>
            <tr>
              <td><u>Underline</u></td>
              <td><code>{"<u/>"}</code></td>
            </tr>
          </tbody>
        </Table>
        <Heading3>Hyperlinks</Heading3>
        <p><Link href="#hyperlinks">Hyperlinks</Link> use Next.js component that allows easy linking between internal pages.<br/> Import it from:</p>
        <CodeBlock language='html'>
          {`import { Link } from '../components/link';`}
        </CodeBlock>
        <p>Link component supports all <code>{"<a/>"}</code> tag <Link target="_blank" href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes'>attributes</Link>. Use it like this:</p>        <CodeBlock language='html'>
          {`` +
          `<Link href="/your-page-name">hyperlink</Link>\n` +
          ``}
        </CodeBlock>
        <Heading2>Customize text styles</Heading2>
        <p>Adjust typography style and size in <Link target="_blank" href="https://github.com/vrepsys/portal-template/blob/main/tailwind.config.js#L44">tailwind.config.js</Link> file. Text colors and margins can be adjusted from <Link target="_blank" href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css">global.css</Link> file. Here are the default values:</p>
        <Table className='align-middle'>
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
