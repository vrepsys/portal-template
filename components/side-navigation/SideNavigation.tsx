import { Button } from '../button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Typography', href: '/typography' },
  { name: 'Image', href: '/image' },
  { name: 'Code Block', href: '/codeBlock' },
  { name: 'Callout', href: '/callout' },
  { name: 'List', href: '/list' },
  { name: 'Table', href: '/table' },
  { name: 'Blockquote', href: '/blockQuote' },
  { name: 'Divider', href: '/divider' },
  { name: 'Card list', href: '/cardList' },
];

interface Props {
  selectedPath: string;
}

export const SideNavigation: React.FC<Props> = ({ selectedPath }) => {
  return (
    <nav aria-label="Side navigation">
      <div className="list-headline lg:small">Getting Started</div>
      <ul>
        {navItems.map((item, i) => (
          <li key={i} className="my-1">
            <Button
              key={item.name}
              to={item.href}
              selected={item.href === selectedPath}
              style="secondary"
              className="lg:small"
            >
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
