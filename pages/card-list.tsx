import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const CardsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Card List</PageTitle>
          <PageSubtitle>Learn more about table components in this template</PageSubtitle>
        </header>
        <p>Blockquote is here.</p>
        <div>This is a card!</div>
      </article>
    </PageLayout>
  );
};

export default CardsPage;
