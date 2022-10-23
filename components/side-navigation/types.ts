export interface Category {
  title?: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  url: string;
}
