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
    subtitle: 'Learn how to use typography components such as headings',
    image: TypographyImage,
    url: '/typography',
  },
  {
    title: 'List',
    subtitle: 'All you need to know about the list component',
    image: ListImage,
    url: '/list',
  },
  {
    title: 'Image',
    subtitle: 'Learn how the image components works',
    image: ImageImage,
    url: '/image',
  },
  {
    title: 'Divider',
    subtitle: 'The hr component',
    image: DividerImage,
    url: '/divider',
  },
  {
    title: 'Blockquote',
    subtitle: 'Example of the blockquote component',
    image: BlockquoteImage,
    url: '/blockquote',
  },
  {
    title: 'Code block',
    subtitle: 'Learn how to use and customize the CodeBlock component',
    image: CodeBlockImage,
    url: '/code-block',
  },
  {
    title: 'Table',
    subtitle: 'Everything you need to know about the table component',
    image: TableImage,
    url: '/table',
  },
  {
    title: 'Card list',
    subtitle: 'Learn how to create a cards list using the card list component',
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
