import { Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { Button } from '../button';
import { IconGithub, IconProductHunt, IconDismiss, IconMenu } from '../icons';
import { SideNavigation } from '../side-navigation';
import { TableOfContents } from '../table-of-contents';
import classNames from '../utils/classnames';

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
              <div className="flex gap-2 items-center h-full">
                <div className="flex grow gap-2 items-center">
                  <a className="button font-bold" href="#">
                    Portal Template
                  </a>
                  <Button className="hidden lg:inline-block w-96" style="search" to={'/search'}>
                    Search
                  </Button>
                </div>

                <div className="shrink lg:hidden">
                  <Popover.Button className="button w-9 h-9 flex justify-center items-center">
                    <span className="sr-only">Open menu</span>
                    {open ? <IconDismiss /> : <IconMenu />}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:gap-2 lg:items-center lg:shrink lg:justify-end">
                  <Button
                    icon={IconProductHunt}
                    to="https://www.producthunt.com/posts/portal-template"
                  >
                    Product Hunt
                  </Button>
                  <Button icon={IconGithub} to="https://github.com/vrepsys/portal-template">
                    GitHub
                  </Button>
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
              <Button
                className="w-full justify-center"
                icon={IconProductHunt}
                to="https://www.producthunt.com/posts/portal-template"
              >
                Product Hunt
              </Button>
              <Button
                className="w-full justify-center"
                icon={IconGithub}
                to="https://github.com/vrepsys/portal-template"
              >
                GitHub
              </Button>
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
