import { NextPage } from 'next';
import Image from 'next/image';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';
import TypographyImage from '/public/cards/typography.png';

const Card: React.FC = () => {
  return (
    <li className='-mx-2'>
      <a href="#" className="flex flex-col p-2 pb-3 bg-white rounded-xl duration-300 border border-white hover:bg-slate-50 hover:border-slate-100">
        <div className="flex overflow-hidden">
          <Image src={TypographyImage} alt="" aria-hidden={true} />
        </div>
        <div className='text-small font-bold text-color-default mt-2'>Typography</div>
        <div className='text-small text-color-secondary mt-1'>Learn about page title, subtitle, headings, and other typography components</div>
      </a>
    </li>
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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </article>
    </PageLayout>
  );
};

export default CardsPage;
