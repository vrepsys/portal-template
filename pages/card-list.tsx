import { NextPage } from 'next';
import { Card, CardList } from '../components/cards';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import TypographyImage from '/public/cards/typography.png';

const CARDS = [
  {
    title: 'Typography',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/typography',
  },
  {
    title: 'Divider',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/divider',
  },
  {
    title: 'Blockquote',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/blockquote',
  },
  {
    title: 'Code block',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/code-block',
  },
  {
    title: 'Image',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/image',
  },
  {
    title: 'Table',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/table',
  },
  {
    title: 'Card list',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/card-list',
  },
];

const CardsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Card list</PageTitle>
          <PageSubtitle>Learn about the CardList and Card components</PageSubtitle>
        </header>
        <Heading2>Example</Heading2>
        <CardList>
          {CARDS.map(({ title, subtitle, image, url }) => {
            return (
              <Card
                key={`${title}-${url}`}
                title={title}
                subtitle={subtitle}
                image={image}
                url={url}
              />
            );
          })}
        </CardList>
      </article>
    </PageLayout>
  );
};

export default CardsPage;
