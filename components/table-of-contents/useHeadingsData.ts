import { useEffect, useState } from 'react';

export interface HeadingData {
  id: string;
  title: string;
  items: HeadingData[];
}

const getNestedHeadings = (headingElements: Element[]) => {
  const nestedHeadings: HeadingData[] = [];

  headingElements.forEach((heading: any, index: number) => {
    const { innerText: title, id } = heading;
    if (!id) {
      return;
    }

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
        items: [],
      });
    }
  });

  return nestedHeadings;
};

export const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<HeadingData[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};
