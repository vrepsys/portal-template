import { Button } from '../button';
import { NavItem } from './types';

interface Props {
  item: NavItem;
  selected: boolean;
}

export const NavigationItem: React.FC<Props> = ({ item, selected }) => {
  return (
    <Button
      key={item.title}
      to={item.url}
      selected={selected}
      style="secondary"
      className="lg:small"
    >
      {item.title}
    </Button>
  );
};
