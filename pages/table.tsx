import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";

const TablePage: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <header>
          <PageTitle>Table</PageTitle>
          <PageSubtitle>
            Learn more about table components in this template
          </PageSubtitle>
        </header>
        <p>Table is pretty neat. Let&apos;s have mor of it.</p>
        <table>
            <thead>
                <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Required capabilities</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>card_issuing</code></td>
                    <td>Allows the creation of a Card object associated with this financial account.</td>
                    <td><code>card_issuing</code></td>
                </tr>
                <tr>
                    <td><code>deposit_insurance</code></td>
                    <td>Requests FDIC insurance eligibility for the financial account.</td>
                    <td><code>treasury</code></td>
                </tr>
                <tr>
                    <td><code>financial_addresses.aba	</code></td>
                    <td>Triggers the creation of a <strong>FinancialAddress</strong> object of type ABA associated with this financial account. When this feature is active, the address can receive money over ACH or wire, and external bank accounts can debit it.</td>
                    <td><code>treasury</code></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Sum</td>
                    <td>5000</td>
                    <td>30</td>
                </tr>
            </tfoot>
        </table>
      </article>
    </PageLayout>
  );
};

export default TablePage;
