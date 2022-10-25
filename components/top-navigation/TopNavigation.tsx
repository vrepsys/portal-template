import { Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { Button } from '../button';
import { SideNavigation } from '../side-navigation';
import { TableOfContents } from '../table-of-contents';
import classNames from '../utils/classnames';

const IconGithub: React.FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M9.99926 2C5.58169 2 2 5.51267 2 9.84607C2 13.3125 4.29203 16.253 7.47101 17.2909C7.87127 17.3627 8.01713 17.1204 8.01713 16.9123C8.01713 16.7264 8.01025 16.2327 8.00632 15.5782C5.78109 16.0521 5.31158 14.5263 5.31158 14.5263C4.94767 13.6203 4.42316 13.379 4.42316 13.379C3.6968 12.892 4.47816 12.9017 4.47816 12.9017C5.28113 12.9575 5.70349 13.7103 5.70349 13.7103C6.41708 14.9092 7.57611 14.5629 8.03186 14.3625C8.10455 13.8553 8.31081 13.5095 8.53967 13.3135C6.76331 13.1155 4.89561 12.4422 4.89561 9.4357C4.89561 8.57933 5.20746 7.87901 5.71921 7.33041C5.6367 7.13198 5.36217 6.33436 5.79729 5.25402C5.79729 5.25402 6.46914 5.04306 7.99748 6.05838C8.63544 5.8845 9.32005 5.79732 10.0002 5.79443C10.6795 5.79732 11.3641 5.8845 12.003 6.05838C13.5304 5.04306 14.2007 5.25402 14.2007 5.25402C14.6373 6.33436 14.3628 7.13198 14.2803 7.33041C14.793 7.87901 15.1029 8.57933 15.1029 9.4357C15.1029 12.4499 13.2323 13.1131 11.45 13.3072C11.7373 13.5495 11.9932 14.0282 11.9932 14.7603C11.9932 15.8089 11.9834 16.6551 11.9834 16.9123C11.9834 17.1223 12.1273 17.3665 12.5334 17.29C15.7099 16.2501 18 13.3115 18 9.84607C18 5.51267 14.4178 2 9.99926 2Z"
      />
    </svg>
  );
};

export const TopNav = () => {
  return (
    <Popover as={Fragment}>
      {({ open, close }) => (
        <>
          <header
            className={classNames(
              open ? 'inset-0 overflow-y-auto' : '',
              'bg-white sticky top-0 lg:border-b lg:border-color-divider lg:overflow-y-visible h-14 z-50'
            )}
          >
            <div className="mx-auto px-3 py-2 border-b border-color-divider lg:border-none lg:px-[var(--width-page-padding)] w-full lg:max-w-tablet xl:max-w-desktop h-14">
              <div className="flex gap-2 items-center">
                <div className="flex grow gap-2 items-center">
                  <a className="button" href="#">
                    Logo
                  </a>
                  <Button className="hidden lg:inline-block w-96" style="search" to={'/search'}>
                    Search
                  </Button>
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
                  <a className="button" href="https://github.com/vrepsys/portal-template">
                    <IconGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </header>
          <Popover.Panel
            as="nav"
            className="fixed h-[calc(100vh_-_theme(spacing.14))] w-screen top-14 overflow-scroll bg-slate-50 px-8 lg:hidden z-40"
            aria-label="Global"
          >
            <div className="flex gap-3 flex-col items-center py-6">
              <Button className="w-full" style="search" to={'/search'}>
                Search
              </Button>
              <a
                className="button w-full justify-center"
                href="https://github.com/vrepsys/portal-template"
              >
                <IconGithub />
                GitHub
              </a>
            </div>
            <hr className="mx-2 bg-color-divider" />
            <div className="pt-3 pb-5">
              <TableOfContents onNavigate={() => close()} />
            </div>
            <hr className="mx-2 bg-color-divider" />
            <div className="pt-3 pb-5">
              <SideNavigation />
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
