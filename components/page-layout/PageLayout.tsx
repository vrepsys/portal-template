import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { SideNavigation } from '../side-navigation';
import { TableOfContents } from '../table-of-contents';
import { TopNav } from '../top-navigation';

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portal Template</title>
      </Head>
      <TopNav />
      <div>
        <div className="mx-auto px-[var(--width-page-padding-mobile)] max-w-mobile flex justify-center lg:px-0 lg:grid lg:gap-14 lg:grid-cols-page-tablet lg:max-w-tablet xl:grid-cols-page-desktop xl:max-w-desktop">
          <div className="hidden lg:block border-r border-r-color-divider sticky top-14 pt-8 pr-2 overflow-y-scroll h-[calc(100vh_-_theme(spacing.14))] lg:pl-[var(--width-page-padding)]">
            <div className="hidden lg:block xl:hidden">
              <TableOfContents />
            </div>
            <SideNavigation />
          </div>
          <main className="content pb-96 pt-8 lg:pt-12 min-w-0">{children}</main>
          <aside className="hidden xl:block border-r-color-divider sticky top-14 pt-8 pl-2 overflow-y-scroll h-[calc(100vh_-_theme(spacing.14))] lg:pr-[var(--width-page-padding)]">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  );
};
