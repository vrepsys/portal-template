import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const ImagePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Image</PageTitle>
          <PageSubtitle>
            Learn more about table components in this template
          </PageSubtitle>
        </header>
        <p>Image is here.</p>
        <figure className="my-3">
            <img alt="planet" src="/planet.png" className="rounded-lg border border-color-divider"/>
            <figcaption className="text-center text-small italic text-color-secondary">This is a caption for the image</figcaption>
        </figure>
      </article>
    </PageLayout>
  );
};

export default ImagePage;