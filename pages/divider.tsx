import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const DividerPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Divider</PageTitle>
          <PageSubtitle>
            Learn more about table components in this template
          </PageSubtitle>
        </header>
        <p>Divider is here.</p>
        <hr/>
      </article>
    </PageLayout>
  );
};

export default DividerPage;