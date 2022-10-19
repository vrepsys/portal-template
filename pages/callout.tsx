import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const CalloutPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Callout</PageTitle>
          <PageSubtitle>
            Learn more about table components in this template
          </PageSubtitle>
        </header>
        <p>Blockquote is here.</p>
        <div className="my-3 px-3 py-2 rounded-lg bg-slate-50 border border-color-divider text-small">
            <span>Icon!</span>This is a generic callout.
        </div>
        <div className="my-3 px-3 py-2 rounded-lg bg-pink-50 border border-pink-200 text-pink-900 text-small">
            <span>Icon!</span>This is a destructive callout.
        </div>
        <div className="my-3 px-3 py-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-900 text-small">
            <span>Icon!</span>This is a warning callout.
        </div>
        <div className="my-3 px-3 py-2 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-small">
            <span>Icon!</span>This is a warning callout.
        </div>
      </article>
    </PageLayout>
  );
};

export default CalloutPage;