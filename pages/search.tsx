import { NextPage } from 'next';
import { Link } from '../components/link';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';

const Customization: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Search</PageTitle>
          <PageSubtitle>How you can implement search</PageSubtitle>
        </header>
        <p>
          If you kickstart your documentation from Portal template you&apos;ll probably want to
          implement search. Since we don&apos;t provide an implementation for search here are two
          ways you can implement it.
        </p>
        <Heading2>Fuse.js</Heading2>
        <p>
          <Link url="https://fusejs.io/">Fuse.js</Link> is a lightweight, but powerful fuzzy search
          library that comes as an npm module. Fuse.js can run purely on front-end and doesn&apos;t
          require a server, or any third-party service.
        </p>
        <p>
          To implement search using Fuse.js you&apos;re going to need to add a build step that
          iterates through your content and builds a search index. The resulting search index is a
          json file that has to be deployed together with other static files of your Next.js app.
        </p>
        <p>
          You can use the search index in your front-end code to run fuzzy search on your content.
          Learn more by exploring <Link url="https://fusejs.io/">Fuse.js documentation</Link>.
        </p>
        <Heading2>Algolia</Heading2>
        <p>
          <Link url="https://fusejs.io/">Algolia</Link> is a hosted search engine SaaS. You
          you&apos;ll probably want to use Algolia if you have a lot of content and your search
          index is too large to send over to client-side.
        </p>
        <p>
          With Algolia, instead of building the search index locally, you&apos;re going send your
          content over to Algolia&apos;s search engine via their APIs.
        </p>
        <p>
          With Algolia you can implement your own search screen and then use their APIs to execute
          search queries. Or, alternatively, you can use their UI/UX libraries called InstantSearch.
        </p>
        <p>
          Explore <Link url="https://www.algolia.com/doc/">Algolia&apos;s docs</Link> to learn more.
        </p>
      </article>
    </PageLayout>
  );
};

export default Customization;
