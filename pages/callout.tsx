import { NextPage } from "next";
import { PageLayout } from "../components/page-layout";
import { PageSubtitle, PageTitle } from "../components/typography";
// import { ReactComponent as IconAlert } from '../public/Alert-Filled.svg';

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
        {/* kad importuočiau svg, regis, reikia webpack, nenorėjau nieko instaliuoti, tai labai hard code db viskas.
        https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js */}
        <div className="my-3 px-3 py-2 rounded-lg bg-slate-50 border border-color-divider grid grid-cols-[20px_1fr] gap-3">
            <svg className="text-indigo-500" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5 2C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5ZM10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7ZM10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V10C9 9.44772 9.44772 9 10 9Z"/></svg>
            <div className="text-color-default font-sans text-small text-bold">Please notice that callout should be used with caution and shound not be overused. Too many callouts would make innefective.</div>
        </div>
        <div className="my-3 px-3 py-2 rounded-lg bg-pink-50 border border-pink-200 grid grid-cols-[20px_1fr] gap-3">
            <svg className="text-red-500" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 5C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10V6C9 5.44772 9.44772 5 10 5ZM10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15Z"/></svg>
            <div className="text-color-default font-sans text-small text-bold">Please notice that callout should be used with caution and shound not be overused. Too many callouts would make innefective.</div>
        </div>
        <div className="my-3 px-3 py-2 rounded-lg bg-orange-50 border border-orange-200 grid grid-cols-[20px_1fr] gap-3">
            <svg className="text-orange-500" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.5963 3.48448C11.4408 1.48863 8.55921 1.48863 7.40371 3.48449L1.60706 13.4969C0.449167 15.4969 1.89234 18 4.20334 18H15.7967C18.1077 18 19.5508 15.4969 18.3929 13.4969L12.5963 3.48448ZM10 6C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V7C9 6.44772 9.44771 6 10 6ZM10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16Z"/></svg>
            <div className="text-color-default font-sans text-small text-bold">Please notice that callout should be used with caution and shound not be overused. Too many callouts would make innefective.</div>
        </div>
        <div className="my-3 px-3 py-2 rounded-lg bg-teal-50 border border-teal-200 grid grid-cols-[20px_1fr] gap-3">
            <svg className="text-teal-500" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711Z" /></svg>
            <div className="text-color-default font-sans text-small text-bold">Please notice that callout should be used with caution and shound not be overused. Too many callouts would make innefective.</div>
        </div>
      </article>
    </PageLayout>
  );
};

export default CalloutPage;