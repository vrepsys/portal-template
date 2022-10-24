import { NextPage } from 'next';
import { Callout } from '../components/callout';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const CalloutPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Callout</PageTitle>
          <PageSubtitle>Learn more about table components in this template</PageSubtitle>
        </header>
        <p>Callout is here.</p>
        <Callout type="info">
          Please note that callout should be used with caution and should not be overused. Too many
          callouts would make ineffective.
        </Callout>
        <Callout type="caution">
          Please note that callout should be used with caution and should not be overused. Too many
          callouts would make ineffective.
        </Callout>
        <Callout type="warning">
          {' '}
          Please note that callout should be used with caution and should not be overused. Too many
          callouts would make ineffective.
        </Callout>
        <Callout type="success">
          Please note that callout should be used with caution and should not be overused. Too many
          callouts would make ineffective.
        </Callout>
      </article>
    </PageLayout>
  );
};

export default CalloutPage;
