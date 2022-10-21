import { NextPage } from 'next';
import Image from 'next/image';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import TypographyImage from '/public/cards/typography.png';

const Card: React.FC = () => {
  return (
    <div className="flex flex-col mb-3">
      <div className="flex overflow-hidden">
        <Image src={TypographyImage} alt="" aria-hidden={true} />
      </div>
      <div className='text-small font-bold mt-2'>Typography</div>
      <div className='text-small mt-1'>Learn about page title, subtitle, headings, and other typography components</div>
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
        <ul className="card-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <li><Card /></li>
          <li><Card /></li>
          <li><Card /></li>
          <li><Card /></li>
          <li><Card /></li>
        </ul>
      </article>
    </PageLayout>
  );
};

export default CardsPage;
