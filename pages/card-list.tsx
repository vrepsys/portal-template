import { NextPage } from 'next';
import { Card, CardList } from '../components/cards';
import { CardsExample } from '../components/cards-example';
import { Link } from '../components/link';
import { CodeBlock } from '../components/code-block';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import image1 from 'public/cards/mars.png';
import image2 from 'public/cards/jupiter.png';
import image3 from 'public/cards/saturn.png';

const CardsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Card list</PageTitle>
          <PageSubtitle>Learn about the CardList and Card components and how to use them.</PageSubtitle>
        </header>
        <p>
          Card list is a visual and descriptive way to display links. List is made of 3 columns, each card in a list has to use the image, title and subtitle. This is how the component looks like:
        </p>
        <CardList>
          <Card image={image1} title="Mars" subtitle="The red planet that Musk dreams of." url="#" />
          <Card image={image2} title="Jupiter" subtitle="The largest planed in Solar system." url="#" />
          <Card image={image3} title="Saturn" subtitle="The only planed in Solar system that has a ring." url="#" />
        </CardList>
        <Heading2>Add card list</Heading2>
        <p>Import the components from the <Link target="_blank" href="https://github.com/vrepsys/portal-template/tree/main/components/cards">cards</Link> folder:</p>
        <CodeBlock language="tsx">{"import { Card, CardList } from '../components/cards';"}</CodeBlock>
        <p>Describe the cards with <code>image</code>,<code>title</code>,<code>subtitle</code> and <code>url</code> props:</p>
        <CodeBlock language="tsx">
          {'<CardList>\n' +
            '  <Card title="Mars" subtitle="The red planet that Musk dreams of." image="mars.png" url="/mars-page" />\n' +
            '  <Card title="Jupiter" subtitle="The largest planed in Solar system." image="jupiter.png" url="/jupiter-page" />\n' +
            '  <Card title="Saturn" subtitle="The only planed in Solar system that has a ring." image="saturn.png" url="/saturn-page" />\n' +
            '<CardList>'}
        </CodeBlock>
        <Heading2>Customize card list style</Heading2>
        <p>Adjust card list visual style in the <Link target="_blank" href="https://github.com/vrepsys/portal-template/blob/main/components/cards/CardList.tsx">CardList.tsx</Link> and <Link target="_blank" href="https://github.com/vrepsys/portal-template/blob/main/components/cards/CardList.tsx">Card.tsx</Link> files.</p>
      </article>
    </PageLayout>
  );
};

export default CardsPage;
