import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const Customization: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Search</PageTitle>
          <PageSubtitle>How you can implement search</PageSubtitle>
        </header>
        <p>This is how you do it.</p>
      </article>
    </PageLayout>
  );
};

export default Customization;
