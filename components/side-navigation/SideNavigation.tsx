const navItems = [
  { name: "Home", href: "/" },
  { name: "Typography", href: "/typography" },
  { name: "Image", href: "#" },
  { name: "Code Block", href: "#" },
  { name: "Callout", href: "#" },
  { name: "List", href: "#" },
  { name: "Table", href: "#" },
  { name: "Blockquote", href: "#" },
  { name: "Divider", href: "#" },
  { name: "Card list", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const SideNavigation: React.FC<{}> = () => {
  return (
    <div>
      <nav aria-label="Side navigation">
        <div className="list-headline lg:small">Getting Started</div>
        <ul>
          {navItems.map((item, i) => (
            <li key={i} className="my-1">
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.href === "active-href"
                    ? "selected"
                    : "button secondary block lg:small"
                )}
              >
                <span className="flex-1">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
