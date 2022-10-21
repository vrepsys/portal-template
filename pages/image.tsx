import { NextPage } from 'next';
import { Image } from '../components/image';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import exoplanet from 'public/exoplanet.jpeg';
import { CodeBlock } from '../components/code-block';

const ImagePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Image</PageTitle>
          <PageSubtitle>Learn about the image component</PageSubtitle>
        </header>
        <p>
          The <code>Image</code> component is uses a <a href="https://nextjs.org/">Next.js</a>{' '}
          <a href="https://nextjs.org/docs/api-reference/next/image">image component</a> underneath.
          As a result the image is always served in a correct size, prevents{' '}
          <a href="https://nextjs.org/learn/seo/web-performance/cls">Cumulative Layout Shift</a>,
          ensures faster page loads and comes with{' '}
          <a href="https://nextjs.org/docs/basic-features/image-optimization">other benefits</a>.
        </p>
        <p>
          Our image component wraps the image into a <code>figure</code> with an optional{' '}
          <code>figcaption</code>. The caption may be specified using the <code>caption</code> prop
          in the <code>Image</code> component.
        </p>
        <Heading2>Example</Heading2>
        <CodeBlock language="typescript">
          {"import exoplanet from 'public/exoplanet.jpeg'\n" +
            `<Image src={exoplanet}\n` +
            `       caption="Artist's impression of K2-18b. K2-18b is now the only super-Earth exoplanet known to host both water and temperatures that could support life. Credit: ESA/Hubble, M. Kornmesser."\n` +
            `       alt="A big blue planet on the right with its star and a moon visible on the left"\n` +
            '/>'}
        </CodeBlock>
        <Image
          alt="A big blue planet on the right with its star and a moon visible on the left"
          caption="Artist's impression of K2-18b. K2-18b is now the only super-Earth exoplanet known to
            host both water and temperatures that could support life. Credit: ESA/Hubble, M.
            Kornmesser."
          src={exoplanet}
        />
      </article>
    </PageLayout>
  );
};

export default ImagePage;
