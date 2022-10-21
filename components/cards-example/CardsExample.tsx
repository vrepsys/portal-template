import { Card, CardList } from '../cards';
import TypographyImage from '/public/cards/typography.png';
import ListImage from '/public/cards/list.png';
import ImageImage from '/public/cards/image.png';
import DividerImage from '/public/cards/divider.png';
import BlockquoteImage from '/public/cards/blockquote.png';
import CodeBlockImage from '/public/cards/code-block.png';
import TableImage from '/public/cards/table.png';
import CardImage from '/public/cards/card-group.png';

const CARDS = [
  {
    title: 'Typography',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TypographyImage,
    url: '/typography',
  },
  {
    title: 'List',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: ListImage,
    url: '/list',
  },
  {
    title: 'Image',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: ImageImage,
    url: '/image',
  },
  {
    title: 'Divider',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: DividerImage,
    url: '/divider',
  },
  {
    title: 'Blockquote',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: BlockquoteImage,
    url: '/blockquote',
  },
  {
    title: 'Code block',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: CodeBlockImage,
    url: '/code-block',
  },
  {
    title: 'Table',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: TableImage,
    url: '/table',
  },
  {
    title: 'Card list',
    subtitle: 'Learn about page title, subtitle, headings, and other typography components',
    image: CardImage,
    url: '/card-list',
  },
];

export const CardsExample: React.FC = () => {
  return (
    <CardList>
      {CARDS.map(({ title, subtitle, image, url }) => {
        return (
          <Card key={`${title}-${url}`} title={title} subtitle={subtitle} image={image} url={url} />
        );
      })}
    </CardList>
  );
};
