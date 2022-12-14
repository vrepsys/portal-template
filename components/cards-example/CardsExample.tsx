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
    subtitle: 'Learn about all available text styles',
    image: TypographyImage,
    url: '/typography',
  },
  {
    title: 'List',
    subtitle: 'Display your text in a verical list',
    image: ListImage,
    url: '/list',
  },
  {
    title: 'Image',
    subtitle: 'Add an image to your content',
    image: ImageImage,
    url: '/image',
  },
  {
    title: 'Divider',
    subtitle: 'Separate your content into the sections with an HTML hr',
    image: DividerImage,
    url: '/divider',
  },
  {
    title: 'Blockquote',
    subtitle: 'Cite important statements with the blockquote component',
    image: BlockquoteImage,
    url: '/blockquote',
  },
  {
    title: 'Code block',
    subtitle: 'Add code examples into your content',
    image: CodeBlockImage,
    url: '/code-block',
  },
  {
    title: 'Table',
    subtitle: 'Display your data as a table',
    image: TableImage,
    url: '/table',
  },
  {
    title: 'Card list',
    subtitle: 'List important links in a card view',
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
