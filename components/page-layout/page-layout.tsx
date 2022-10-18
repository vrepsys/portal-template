import Head from "next/head";
import { Fragment, PropsWithChildren } from "react";
import { Popover } from "@headlessui/react";
import { SideNavigation } from "../side-navigation/SideNavigation";
import { TableOfContents } from "../table-of-contents";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface RepeatProps extends PropsWithChildren {
  times: number;
}

const Repeat: React.FC<RepeatProps> = ({ times, children }) => {
  return (
    <>
      {Array(times)
        .fill(1)
        .map(() => children)}
    </>
  );
};
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
      <div>
        <Popover as={Fragment}>
          {({ open }) => (
            <>
              <header
                className={classNames(
                  open ? "inset-0 z-50 overflow-y-auto" : "",
                  "bg-white sticky top-0 lg:border-b lg:border-color-divider lg:overflow-y-visible h-14"
                )}
              >
                <div className="mx-auto px-3 py-2 border-b border-color-divider lg:border-none lg:px-10 lg:w-[1040px] xl:w-[1340px] h-14">
                  <div className="flex gap-2 items-center">
                    <div className="flex grow gap-2 items-center">
                      <a className="button" href="#">
                        Logo
                      </a>
                      <a
                        className="button search w-96 hidden lg:inline-block"
                        href="#"
                      >
                        Search
                      </a>
                    </div>

                    <div className="shrink lg:hidden">
                      <Popover.Button className="button w-9 h-9 flex justify-center items-center">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <span className="material-symbols-outlined">
                            close
                          </span>
                        ) : (
                          <span className="material-symbols-outlined">
                            menu
                          </span>
                        )}
                      </Popover.Button>
                    </div>
                    <div className="hidden lg:flex lg:gap-2 lg:items-center lg:shrink lg:justify-end">
                      <a className="button" href="#">
                        Button one
                      </a>
                      <a className="button" href="#">
                        Button two
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <Popover.Panel
                as="nav"
                className="fixed h-[calc(100vh_-_theme(spacing.14))] w-screen top-14 overflow-scroll bg-slate-50 px-8 lg:hidden"
                aria-label="Global"
              >
                <div className="flex gap-3 flex-col items-center py-6">
                  <a className="button search w-full mb-3" href="#">
                    Search
                  </a>
                  <a className="button w-full text-center" href="#">
                    Button one
                  </a>
                  <a className="button w-full text-center" href="#">
                    Button two
                  </a>
                </div>
                <hr className="mx-2 bg-color-divider" />
                <div className="pt-3 pb-5">
                  <TableOfContents />
                </div>
                <hr className="mx-2 bg-color-divider" />
                <div className="pt-3 pb-5">
                  <SideNavigation />
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
        <div className="mx-auto px-5 lg:px-10 lg:grid lg:gap-14 lg:w-[1040px] lg:grid-cols-page-tablet xl:w-[1340px] xl:grid-cols-page-desktop">
          <div className="hidden lg:block border-r border-r-color-divider bg-purple-50 sticky top-14 pt-8 overflow-y-scroll h-[calc(100vh_-_theme(spacing.14))]">
            <SideNavigation />
          </div>
          <main className="pb-96 bg-green-100 pt-8">{children}</main>
          <aside className="hidden lg:block border-r-color-divider bg-fuchsia-50 sticky top-14 pt-8 overflow-y-scroll h-[calc(100vh_-_theme(spacing.14))]">
            <div className="">
              <TableOfContents />
              <Repeat times={40}>
                Item
                <br />
              </Repeat>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
