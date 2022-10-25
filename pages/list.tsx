import { NextPage } from 'next';
import { List } from '../components/list';
import { PageLayout } from '../components/page-layout';
import { PageSubtitle, PageTitle } from '../components/typography';

const ListsPage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Lists</PageTitle>
          <PageSubtitle>Learn more about table components in this template</PageSubtitle>
        </header>
        <p>Lists is here.</p>
        <List>
          <li>
            <p>Large apples</p>
          </li>
          <li>
            <p>
              Fresh oranges in a basket full of other tasty fruits that would be amazing for Sunday
              breakfast. Yummy
            </p>
          </li>
          <li>
            <p>Tasty perries:</p>
            <List type="unordered">
              <li>
                <p>Great ones</p>
              </li>
              <li>
                <p>Bad ones</p>
              </li>
              <li>
                <p>Dreamers</p>
              </li>
              <li>
                <p>Great discoveries:</p>
                <List>
                  <li>
                    <p>Heaps of treasure</p>
                  </li>
                  <li>
                    <p>Skulls</p>
                  </li>
                  <li>
                    <p>Pirate bones</p>
                  </li>
                </List>
              </li>
            </List>
          </li>
          <li>
            <p>Sweet raspberries</p>
          </li>
        </List>
        <hr />
        <p>Lists is here.</p>
        <List type="ordered">
          <li>
            <p>Large apples</p>
          </li>
          <li>
            <p>
              Fresh oranges in a basket full of other tasty fruits that would be amazing for Sunday
              breakfast. Yummy
            </p>
          </li>
          <li>
            <p>Tasty perries:</p>
            <List type="ordered">
              <li>
                <p>Great ones</p>
              </li>
              <li>
                <p>Bad ones</p>
              </li>
              <li>
                <p>Dreamers</p>
              </li>
              <li>
                <p>Great discoveries:</p>
                <List type="ordered">
                  <li>
                    <p>Heaps of treasure</p>
                  </li>
                  <li>
                    <p>Skulls</p>
                  </li>
                  <li>
                    <p>Pirate bones</p>
                  </li>
                </List>
              </li>
            </List>
          </li>
          <li>
            <p>Sweet raspberries</p>
          </li>
        </List>
      </article>
    </PageLayout>
  );
};

export default ListsPage;
