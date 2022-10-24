import { NextPage } from 'next';
import { Blockquote } from '../components/blockquote';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const BlockquotePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Block Quote</PageTitle>
          <PageSubtitle>Learn more about table components in this template</PageSubtitle>
        </header>
        <p>Blockquote is here.</p>
        <Blockquote
          caption={
            <>
              — Aldous Huxley, <cite>Brave New World</cite>
            </>
          }
          cite="https://www.huxley.net/bnw/four.html"
        >
          Words can be like X-rays, if you use them properly—they will go through anything. You read
          and you are pierced.
        </Blockquote>
      </article>
    </PageLayout>
  );
};

export default BlockquotePage;
