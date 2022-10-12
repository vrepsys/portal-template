import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const Typography: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Typography</PageTitle>
          <PageSubtitle>
            Learn more about typography components in this template
          </PageSubtitle>
        </header>
        <p>Typography is pretty neat. Let&apos;s have mor of it.</p>
      </article>
    </PageLayout>
  );
};

export default Typography;
