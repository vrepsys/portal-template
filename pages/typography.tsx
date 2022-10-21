import { NextPage } from 'next';
import { PageLayout } from '../components/page-layout';
import { Heading2, PageSubtitle, PageTitle } from '../components/typography';

const Typography: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Typography</PageTitle>
          <PageSubtitle>
            This template provides a number of text styles. Read below to learn about them and how
            to use them.
          </PageSubtitle>
        </header>
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>Typeface</th>
              <th>Weight</th>
              <th>Size desktop</th>
              <th>Size mobile</th>
              <th>Letter spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h1 className="my-1">H1</h1>
              </td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>36</td>
              <td>32</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>
                <h2 className="my-1">H2</h2>
              </td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>28</td>
              <td>24</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>
                <h3 className="my-1">H3</h3>
              </td>
              <td>Source Serif Pro</td>
              <td>Bold</td>
              <td>24</td>
              <td>20</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>
                <h4 className="my-1">H4</h4>
              </td>
              <td>Source Serif Pro</td>
              <td>SemiBold</td>
              <td>20</td>
              <td>20</td>
              <td>0.4</td>
            </tr>
            <tr>
              <td>
                <h5 className="my-1">H5</h5>
              </td>
              <td>Inter</td>
              <td>SemiBold</td>
              <td>16</td>
              <td>16</td>
              <td>0.8</td>
            </tr>
            <tr>
              <td>
                <h6 className="my-1">H6</h6>
              </td>
              <td>Inter</td>
              <td>SemiBold</td>
              <td>13</td>
              <td>13</td>
              <td>0.8</td>
            </tr>
            <tr>
              <td>
                <p className="text-subtitle text-color-secondary">Subtitle</p>
              </td>
              <td>Inter</td>
              <td>Regular</td>
              <td>20</td>
              <td>20</td>
              <td>0.2</td>
            </tr>
            <tr>
              <td>
                <p className="my-1">Body text</p>
              </td>
              <td>Inter</td>
              <td>Regular</td>
              <td>16</td>
              <td>16</td>
              <td>0.2</td>
            </tr>
            <tr>
              <td>
                <p className="my-1">
                  <small>Small body text</small>
                </p>
              </td>
              <td>Inter</td>
              <td>Regular</td>
              <td>13</td>
              <td>13</td>
              <td>0.2</td>
            </tr>
            <tr>
              <td>
                <p className="my-1 font-mono font-medium">Code</p>
              </td>
              <td>Source Code Pro</td>
              <td>Medium</td>
              <td>16</td>
              <td>16</td>
              <td>0.2</td>
            </tr>
            <tr>
              <td>
                <p className="my-1">
                  <small className="font-mono font-medium">Code small</small>
                </p>
              </td>
              <td>Source Code Pro</td>
              <td>Medium</td>
              <td>13</td>
              <td>13</td>
              <td>0.2</td>
            </tr>
          </tbody>
        </table>

        <Heading2>Inline styling</Heading2>
        <p>
          Paragraph supports these inline styles: <code>code</code>, <mark>marked</mark>,{' '}
          <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <a href="#">hyperlink</a>.
        </p>
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>Code in HTML</th>
              <th>Code in Markdown</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>Code</code>
              </td>
              <td>
                <code>&lt;code&gt;</code>
              </td>
              <td>
                <code>` `</code>
              </td>
            </tr>
            <tr>
              <td>
                <mark>Marked</mark>
              </td>
              <td>
                <code>&lt;mark&gt;</code>
              </td>
              <td>Not defined</td>
            </tr>
            <tr>
              <td>
                <strong>Bold</strong>
              </td>
              <td>
                <code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code>
              </td>
              <td>
                <code>** **</code>,<code>__ __</code>
              </td>
            </tr>
            <tr>
              <td>
                <em>Italic</em>
              </td>
              <td>
                <code>&lt;em&gt;</code>, <code>&lt;i&gt;</code>
              </td>
              <td>
                <code>* *</code>,<code>_ _</code>
              </td>
            </tr>
            <tr>
              <td>
                <u>Underline</u>
              </td>
              <td>
                <code>&lt;u&gt;</code>
              </td>
              <td>Not defined</td>
            </tr>
            <tr>
              <td>
                <a href="#">Hyperlink</a>
              </td>
              <td>
                <code>&lt;a&gt;</code>
              </td>
              <td>
                <code>[text](url)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </PageLayout>
  );
};

export default Typography;
