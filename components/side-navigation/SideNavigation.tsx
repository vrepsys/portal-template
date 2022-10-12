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
      <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Side navigation">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.href === "active-href"
                ? "bg-gray-400 text-black"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            )}
          >
            <span className="flex-1">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
