import { NextPage } from 'next';
import { Image } from '../components/image';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import url from 'public/exoplanet.jpeg';
import { CodeBlock } from '../components/code-block';
import { Link } from '../components/link';

const ImagePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Image</PageTitle>
          <PageSubtitle>Learn how to use the the image component.</PageSubtitle>
        </header>
        <p>
          The <code>Image</code> component is uses a <Link href="https://nextjs.org/">Next.js</Link>{' '}
          <Link href="https://nextjs.org/docs/api-reference/next/image">image component</Link>{' '}
          underneath. As a result the image is always served in a correct size, prevents{' '}
          <Link href="https://nextjs.org/learn/seo/web-performance/cls">
            Cumulative Layout Shift
          </Link>
          , ensures faster page loads and comes with{' '}
          <Link href="https://nextjs.org/docs/basic-features/image-optimization">
            other benefits
          </Link>
          . This is how the image component looks like:
        </p>
        <Image
          alt="A big blue planet on the right with its star and a moon visible on the left"
          caption="Artist's impression of K2-18b. K2-18b is now the only super-Earth exoplanet known to
            host both water and temperatures that could support life. Credit: ESA/Hubble, M.
            Kornmesser."
          src={url}
        />
        <Heading2>Add Image</Heading2>
        <p>
          Import <code>Image</code> component from{' '}
          <Link
            target="_blank"
            href="https://github.com/vrepsys/portal-template/tree/main/components/image"
          >
            image
          </Link>{' '}
          folder and the source of the image:
        </p>
        <CodeBlock language="javascript">
          {"import { Image } from '../components/image';\n" +
            "import source from 'public/exoplanet.jpeg';"}
        </CodeBlock>
        <p>
          Image component wraps the image into a <code>figure</code> with an optional{' '}
          <code>figcaption</code>. The caption may be specified using the <code>caption</code> prop:
        </p>
        <CodeBlock language="javascript">
          {'<Image src={source}\n' +
            `  caption="Artist's impression of K2-18b. K2-18b is now the only super-Earth exoplanet known to host both water and temperatures that could support life. Credit: ESA/Hubble, M. Kornmesser."\n` +
            `  alt="A big blue planet on the right with its star and a moon visible on the left"\n` +
            '/>'}
        </CodeBlock>
        <Heading2>Customize image style</Heading2>
        <p>
          Open{' '}
          <Link href="https://github.com/vrepsys/portal-template/blob/main/components/image/Image.tsx">
            Image.tsx
          </Link>{' '}
          file to customize component&apos;s appearance.
        </p>
      </article>
    </PageLayout>
  );
};

export default ImagePage;
