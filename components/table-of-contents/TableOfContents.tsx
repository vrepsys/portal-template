import { useCallback, useState } from "react";
import { HeadingData, useHeadingsData } from "./useHeadingsData";
import { useIntersectionObserver } from "./useInteractionObserver";

const Headings: React.FC<{
  headings: HeadingData[];
  activeId: string | undefined;
}> = ({ headings, activeId }) => {
  const navigateToHeading = useCallback(
    (id: string) => (e: any) => {
      e.preventDefault();
      document?.querySelector(`#${id}`)?.scrollIntoView({
        behavior: "smooth",
      });
    },
    []
  );
  return (
    <ul>
      {headings?.map((heading) => {
        return (
          <>
            <li key={heading.id}>
              <a
                className={`text-sm ${
                  heading.id === activeId ? "font-bold" : ""
                }`}
                href={`#${heading.id}`}
                onClick={navigateToHeading(heading.id)}
              >
                {heading.title}
              </a>
              {heading.items && (
                <ul className="ml-4">
                  {heading.items.map((childHeading) => (
                    <li key={childHeading.id}>
                      <a
                        className={`text-sm ${
                          childHeading.id === activeId ? "font-bold" : ""
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
  return (
    <nav aria-label="Table of contents">
      <div className="mb-4 font-semibold">On this page</div>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};
