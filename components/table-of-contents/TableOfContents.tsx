import { useCallback, useState } from 'react';
import { HeadingData, useHeadingsData } from './useHeadingsData';
import { useIntersectionObserver } from './useInteractionObserver';

const Headings: React.FC<{
  headings: HeadingData[];
  activeId: string | undefined;
}> = ({ headings, activeId }) => {
  const navigateToHeading = useCallback(
    (id: string) => (e: any) => {
      e.preventDefault();
      document?.querySelector(`#${id}`)?.scrollIntoView({
        behavior: 'smooth',
      });
    },
    []
  );
  return (
    <ul>
      {headings?.map((heading) => {
        return (
          <>
            <li className="my-1" key={heading.id}>
              <a
                className={`button secondary block lg:small xl:inline-block ${
                  heading.id === activeId ? 'selected' : ''
                }`}
                href={`#${heading.id}`}
                onClick={navigateToHeading(heading.id)}
              >
                {heading.title}
              </a>
              {heading.items && (
                <ul className="ml-4">
                  {heading.items.map((childHeading) => (
                    <li className="my-1" key={childHeading.id}>
                      <a
                        className={`button secondary block lg:small xl:inline-block ${
                          childHeading.id === activeId ? 'selected' : ''
                        }`}
                        href={`#${childHeading.id}`}
                        onClick={navigateToHeading(childHeading.id)}
                      >
                        {childHeading.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export const TableOfContents: React.FC<{}> = () => {
  const { nestedHeadings } = useHeadingsData();
  const [activeId, setActiveId] = useState<string>();
  useIntersectionObserver(setActiveId);
  if (!nestedHeadings.length) {
    return <></>;
  }
  return (
    <nav aria-label="Table of contents" className="pr-2 xl:p-0">
      <div className="list-headline lg:small">On this page</div>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};
