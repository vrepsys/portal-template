import { NextPage } from 'next';
import { Card, CardList } from '../components/cards';
import { CardsExample } from '../components/cards-example';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';

const CardsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Card list</PageTitle>
          <PageSubtitle>Learn about the CardList and Card components</PageSubtitle>
        </header>
        <Heading2>Example</Heading2>
        <CardsExample />
      </article>
    </PageLayout>
  );
};

export default CardsPage;
