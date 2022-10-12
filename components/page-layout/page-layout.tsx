import Head from "next/head";
import { PropsWithChildren } from "react";
import { Popover } from "@headlessui/react";
import { SideNavigation } from "../side-navigation/SideNavigation";

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
              open ? "fixed inset-0 z-40 overflow-y-auto" : "",
              "bg-white shadow-sm lg:static lg:overflow-y-visible"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="#">Logo</a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">Search</div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <span className="material-symbols-outlined">close</span>
                      ) : (
                        <span className="material-symbols-outlined">menu</span>
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    Tabs
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="pt-4 pb-3">Tabs</div>
                <div className="pt-4 pb-3">Aside</div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <SideNavigation />
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
        <div className="py-6">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
              <div className="sticky top-0 ">
                <SideNavigation />
              </div>
            </div>
            <main className="lg:col-span-9 xl:col-span-6">{children}</main>
            <aside className="hidden xl:col-span-4 xl:block bg-blue-50">
              <div className="sticky top-6 space-y-4">Aside</div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
