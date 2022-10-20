import { useRouter } from 'next/router';
import { Button } from '../button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Typography', href: '/typography' },
  { name: 'Image', href: '/image' },
  { name: 'Code Block', href: '/code-block' },
  { name: 'Callout', href: '/callout' },
  { name: 'List', href: '/list' },
  { name: 'Table', href: '/table' },
  { name: 'Blockquote', href: '/blockquote' },
  { name: 'Divider', href: '/divider' },
  { name: 'Card list', href: '/card-list' },
];

export const SideNavigation: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav aria-label="Side navigation" className="pr-2">
      <div className="list-headline lg:small">Getting Started</div>
      <ul>
        {navItems.map((item, i) => (
          <li key={i} className="my-1">
            <Button
              key={item.name}
              to={item.href}
              selected={item.href === pathname}
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
