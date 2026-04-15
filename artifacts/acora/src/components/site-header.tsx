import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diagnostic", label: "Diagnostic" },
  { href: "/products-and-packages", label: "Products & Packages" },
  { href: "/clarity-for-beginners", label: "Clarity for Beginners" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href + "/");
}

export default function SiteHeader() {
  const [location] = useLocation();

  return (
    <header className="border-b border-[#ddd4c8] bg-[#f8f5ef]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f5ef]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <Link href="/" className="inline-block">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f665f]">
              Avecore
            </span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8a7d6e]">
              Decision Systems for AI
            </span>
          </Link>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#4a4540]">
          {navItems.map((item) => {
            const active = isActive(location, item.href);

            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={
                    active
                      ? "font-medium text-[#1f1a17]"
                      : "text-[#5c554d] transition-colors hover:text-[#1f1a17]"
                  }
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
