import { NextPage } from 'next';
import Image from 'next/image';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import TypographyImage from '/public/cards/typography.png';

const Card: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50 max-w-[266px]">
      <div className="flex overflow-hidden">
        <Image width={266} height={120} src={TypographyImage} alt="" aria-hidden={true} />
      </div>
      <div>Typography</div>
      <div>Learn about page title, subtitle, headings, and other typography components</div>
    </div>
  );
};

const CardsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Card List</PageTitle>
          <PageSubtitle>Learn more about table components in this template</PageSubtitle>
        </header>
        <Heading2>Example</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </article>
    </PageLayout>
  );
};

export default CardsPage;
