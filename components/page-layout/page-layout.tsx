import Head from "next/head";
import { PropsWithChildren } from "react";
import { Popover } from "@headlessui/react";
import { SideNavigation } from "../side-navigation/SideNavigation";
import { TableOfContents } from "../table-of-contents";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
      <div className="min-h-screen">
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? "inset-0 z-40 overflow-y-auto" : "",
              "bg-white sticky top-0 lg:border-b lg:border-color-divider lg:overflow-y-visible"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto px-3 py-2 border-b border-color-divider lg:border-none lg:px-10 lg:max-w-[1040px] xl:max-w-[1340px]">

                <div className="flex gap-2 items-center">
                  <div className="flex grow gap-2 items-center">
                    <a className="button" href="#">Logo</a>
                    <a className="button search w-96 hidden lg:inline-block" href="#">Search</a>
                  </div>

                  <div className="shrink lg:hidden">
                    <Popover.Button className="button w-9 h-9 flex justify-center items-center">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <span className="material-symbols-outlined">close</span>
                      ) : (
                        <span className="material-symbols-outlined">menu</span>
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:gap-2 lg:items-center lg:shrink lg:justify-end">
                    <a className="button" href="#">Button one</a>
                    <a className="button" href="#">Button two</a>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="px-8 bg-slate-50 lg:hidden" aria-label="Global">
                <div className="flex gap-3 flex-col items-center py-6">
                  <a className="button search w-full mb-3" href="#">Search</a>
                  <a className="button w-full text-center" href="#">Button one</a>
                  <a className="button w-full text-center" href="#">Button two</a>
                </div>
                <hr className="mx-2 bg-color-divider"/>
                <div className="pt-3 pb-5">
                  <TableOfContents />
                </div>
                <hr className="mx-2 bg-color-divider"/>
                <div className="pt-3 pb-5">
                  <SideNavigation />
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
        <div>
          <div className="mx-auto px-5 lg:px-10 lg:grid lg:gap-14 lg:max-w-[1040px] lg:grid-cols-page-tablet xl:max-w-[1340px] xl:grid-cols-page-desktop">
            <div className="hidden lg:block">
              <div className="sticky top-12.5 mt-8">
                <div className="xl:hidden">
                  <TableOfContents />
                </div>
                <SideNavigation />
              </div>
            </div>
            <main className="my-8 lg:my-12">
              {children}
            </main>
            <aside className="hidden xl:block">
              <div className="sticky top-12.5 mt-8 space-y-4">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
