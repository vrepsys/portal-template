import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const Customization: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Customize styles</PageTitle>
          <PageSubtitle>Learn how to customize the styles to match your brand</PageSubtitle>
        </header>
        <p>This is how you do it.</p>
      </article>
    </PageLayout>
  );
};

export default Customization;
