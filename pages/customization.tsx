import { NextPage } from 'next';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';
import { PageLayout } from '../components/page-layout';
import { Table } from '../components/table';
import { Heading2, Heading3, PageSubtitle, PageTitle } from '../components/typography';

const Customization: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Customize styles</PageTitle>
          <PageSubtitle>Learn how to customize the styles to match your brand</PageSubtitle>
        </header>
        <p>
          To change the template&apos;s appearance you&apos;ll want to modify the{' '}
          <Link href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css">
            styles/global.css
          </Link>{' '}
          file where most of the styles are defined.
        </p>
        <p>The page layout and core colors are defined in the following css variables.</p>
        <Table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>--width-page-article-column</code>
              </td>
              <td>
                <code>15rem</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--width-page-table-of-contents-column</code>
              </td>
              <td>
                <code>15rem</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--width-page-column-gap</code>
              </td>
              <td>
                <code>3.5rem</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--width-page-padding</code>
              </td>
              <td>
                <code>2.5rem</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--width-page-padding-mobile</code>
              </td>
              <td>
                <code>1.25rem</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--color-default</code>
              </td>
              <td>
                <code>theme(&apos;colors.slate[900]&apos;)</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--color-secondary</code>
              </td>
              <td>
                <code>theme(&apos;colors.slate[600]&apos;)</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--color-tertiary</code>
              </td>
              <td>
                <code>theme(&apos;colors.slate[400]&apos;)</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>--color-divider</code>
              </td>
              <td>
                <code>theme(&apos;colors.slate[200]&apos;)</code>
              </td>
            </tr>
          </tbody>
        </Table>
        <Heading3>Customize components</Heading3>
        <p>
          You can customize how components look by modifying the css classes or changing the
          tailwind theme defined in{' '}
          <Link href="https://github.com/vrepsys/portal-template/blob/main/tailwind.config.js">
            tailwind.config.js
          </Link>
          .
        </p>
        <p>
          For example, to change the appearance of the page subtitle modify the following class in{' '}
          <Link href="https://github.com/vrepsys/portal-template/blob/main/styles/globals.css">
            styles/global.css
          </Link>{' '}
        </p>
        <CodeBlock language="typescript">
          {`.content p.page-subtitle {\n` +
            `   @apply font-sans text-subtitle text-color-secondary mt-3 mb-8;\n` +
            `}`}
        </CodeBlock>
        <p>The apply rule above uses styles defined in tailwind to style the subheading.</p>
        <p>
          Alternatively, instead of changing the <code>page-subtitle</code> css class you can adjust
          the style by making changes to the tailwind theme.
        </p>
        <Heading2>Customize page layout</Heading2>
        <p>
          For more advanced changes feel free to modify the React components. For example, to change
          the page layout go to the{' '}
          <Link href="https://github.com/vrepsys/portal-template/blob/main/components/page-layout/PageLayout.tsx">
            components/page-layout/PageLayout.tsx
          </Link>{' '}
          and make your changes there.
        </p>
      </article>
    </PageLayout>
  );
};

export default Customization;
