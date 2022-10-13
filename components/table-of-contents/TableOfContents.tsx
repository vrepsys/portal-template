import { HeadingData, useHeadingsData } from "./useHeadingsData";

const Headings: React.FC<{ headings: HeadingData[] }> = ({ headings }) => {
  return (
    <ul>
      {headings?.map((heading) => {
        return (
          <>
            <li key={heading.id}>
              <a className="text-sm" href={`#${heading.id}`}>
                {heading.title}
              </a>
              {heading.items && (
                <ul className="ml-4">
                  {heading.items.map((child) => (
                    <li key={child.id}>
                      <a className="text-sm" href={`#${child.id}`}>
                        {child.title}
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

  return (
    <nav aria-label="Table of contents">
      <div className="mb-4 font-semibold">On this page</div>
      <Headings headings={nestedHeadings} />
    </nav>
  );
};
