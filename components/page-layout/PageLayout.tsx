import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { SideNavigation } from '../side-navigation';
import { TableOfContents } from '../table-of-contents';
import { useRouter } from 'next/router';
import { TopNav } from '../top-navigation';

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Portal Docs Template</title>
        <meta
          name="description"
          content="A Next.js template to get started with your documentation portal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <div>
        <div className="mx-auto px-[var(--width-page-padding-mobile)] max-w-mobile lg:px-[var(--width-page-padding)] flex justify-center lg:grid lg:gap-14 lg:grid-cols-page-tablet lg:max-w-tablet xl:grid-cols-page-desktop xl:max-w-desktop">
          <div className="hidden lg:block border-r border-r-color-divider sticky top-14 pt-8 pr-2 overflow-y-scroll h-[calc(100vh_-_theme(spacing.14))]">
            <div className="hidden lg:block xl:hidden">
              <TableOfContents />
            </div>
            <SideNavigation />
          </div>
          <main className="pb-96 pt-8">{children}</main>
          <aside className="hidden lg:block border-r-color-divider sticky top-14 pt-8 overflow-y-scroll h-[calc(100vh_-_theme(spacing.14))]">
            <div className="">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
