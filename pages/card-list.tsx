import { NextPage } from 'next';
import { Card, CardList } from '../components/cards';
import { CardsExample } from '../components/cards-example';
import { CodeBlock } from '../components/code-block';
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
        <p>
          To render cards use the <code>CardList</code>, and <code>Card</code> components.
        </p>
        <p>Here&apos;s a code example:</p>
        <CodeBlock language="tsx">
          {'<CardList>\n' +
            '   <Card title="Typography" subtitle="Get familiar with typography components" image="typography.png" url="/typography" />\n' +
            '   <Card title="List" subtitle="Learn how lists work" image="list.png" url="/list" />\n' +
            '<CardList>'}
        </CodeBlock>

        <Heading2>Example</Heading2>
        <CardsExample />
      </article>
    </PageLayout>
  );
};

export default CardsPage;
