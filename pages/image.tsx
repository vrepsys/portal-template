import { NextPage } from 'next';
import { Image } from '../components/image';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import exoplanet from 'public/exoplanet.jpeg';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';

const ImagePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Image</PageTitle>
          <PageSubtitle>Learn about the image component</PageSubtitle>
        </header>
        <p>
          The <code>Image</code> component is uses a <Link url="https://nextjs.org/">Next.js</Link>{' '}
          <Link url="https://nextjs.org/docs/api-reference/next/image">image component</Link>{' '}
          underneath. As a result the image is always served in a correct size, prevents{' '}
          <Link url="https://nextjs.org/learn/seo/web-performance/cls">
            Cumulative Layout Shift
          </Link>
          , ensures faster page loads and comes with{' '}
          <Link url="https://nextjs.org/docs/basic-features/image-optimization">
            other benefits
          </Link>
          .
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
