import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const BlockQuotePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Block Quote</PageTitle>
          <PageSubtitle>Learn more about table components in this template</PageSubtitle>
        </header>
        <p>Blockquote is here.</p>
        <figure>
          <blockquote
            cite="https://www.huxley.net/bnw/four.html"
            className="border-l-2 pl-4 border-color-tertiary"
          >
            <p className="text-medium">
              Words can be like X-rays, if you use them properly—they will go through anything. You
              read and you are pierced.
            </p>
          </blockquote>
          <figcaption className="text-small text-color-secondary">
            — Aldous Huxley, <cite>Brave New World</cite>
          </figcaption>
        </figure>
      </article>
    </PageLayout>
  );
};

export default BlockQuotePage;
