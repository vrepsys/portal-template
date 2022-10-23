import { useRouter } from 'next/router';
import { navigation } from './navigation';
import { NavigationItem } from './NavigationItem';

export const SideNavigation: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav aria-label="Side navigation">
      <ul>
        {navigation.map((category) => {
          return (
            <div key={category.title || 'empty'}>
              <div className="list-headline lg:small">{category.title}</div>
              <ul>
                {category.items.map((item) => (
                  <li key={`${item.title}-${item.url}`} className="my-0.5">
                    <NavigationItem item={item} selected={item.url === pathname} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};
