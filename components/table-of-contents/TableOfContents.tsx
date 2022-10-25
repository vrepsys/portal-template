import { useCallback, useState } from 'react';
import { HeadingData, useHeadingsData } from './useHeadingsData';
import { useIntersectionObserver } from './useInteractionObserver';

const Headings: React.FC<{
  headings: HeadingData[];
  activeId: string | undefined;
  navigate: (headingId: string) => (e: any) => void;
}> = ({ headings, activeId, navigate }) => {
  return (
    <ul>
      {headings?.map((heading) => {
        return (
          <li className="my-0.5" key={heading.id}>
            <a
              className={`button secondary block lg:small xl:inline-block ${
                heading.id === activeId ? 'selected' : ''
              }`}
              href={`#${heading.id}`}
              onClick={navigate(heading.id)}
            >
              {heading.title}
            </a>
            {heading.items && (
              <ul className="ml-4">
                {heading.items.map((childHeading) => (
                  <li className="my-0.5" key={`${heading.id}-${childHeading.id}`}>
                    <a
                      className={`button secondary block lg:small xl:inline-block ${
                        childHeading.id === activeId ? 'selected' : ''
                      }`}
                      href={`#${childHeading.id}`}
                      onClick={navigate(childHeading.id)}
                    >
                      {childHeading.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export interface Props {
  onNavigate?: () => void;
}

export const TableOfContents: React.FC<Props> = ({ onNavigate }) => {
  const { nestedHeadings } = useHeadingsData();
  const [activeId, setActiveId] = useState<string>();
  useIntersectionObserver(setActiveId);
  const navigateToHeading = useCallback(
    (id: string) => (e: any) => {
      e.preventDefault();
      onNavigate && onNavigate();
      document?.querySelector(`#${id}`)?.scrollIntoView({
        behavior: 'smooth',
      });
    },
    [onNavigate]
  );
  if (!nestedHeadings.length) {
    return <></>;
  }
  return (
    <nav aria-label="Table of contents">
      <div className="nav-list-headline lg:small">On this page</div>
      <Headings headings={nestedHeadings} activeId={activeId} navigate={navigateToHeading} />
    </nav>
  );
};
