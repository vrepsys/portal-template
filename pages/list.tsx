import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const ListsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Lists</PageTitle>
          <PageSubtitle>
            Learn more about table components in this template
          </PageSubtitle>
        </header>
        <p>Lists is here.</p>
        <ul>
          <li><p>Large apples</p></li>
          <li><p>Fresh oranges in a basket full of other tasty fruits that would be amazing for Sunday breakfast. Yummy</p></li>
          <li>
            <p>Tasty perries:</p>
            <ul>
              <li><p>Great ones</p></li>
              <li><p>Bad ones</p></li>
              <li><p>Dreamers</p></li>
              <li><p>Great discoveries:</p>
                <ul>
                  <li><p>Heaps of treasure</p></li>
                  <li><p>Skulls</p></li>
                  <li><p>Pirate bones</p></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><p>Sweet raspberries</p></li>
        </ul>
        <p>Lists is here.</p>
        <ol>
          <li><p>Large apples</p></li>
          <li><p>Fresh oranges in a basket full of other tasty fruits that would be amazing for Sunday breakfast. Yummy</p></li>
          <li>
            <p>Tasty perries:</p>
            <ol>
              <li><p>Great ones</p></li>
              <li><p>Bad ones</p></li>
              <li><p>Dreamers</p></li>
              <li><p>Great discoveries:</p>
                <ol>
                  <li><p>Heaps of treasure</p></li>
                  <li><p>Skulls</p></li>
                  <li><p>Pirate bones</p></li>
                </ol>
              </li>
            </ol>
          </li>
          <li><p>Sweet raspberries</p></li>
        </ol>
      </article>
    </PageLayout>
  );
};

export default ListsPage;