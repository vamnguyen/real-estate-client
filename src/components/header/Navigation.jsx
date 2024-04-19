import { NavLink } from "react-router-dom";
import Logo from "~/components/Logo";
import Button from "~/components/common/Button";
import { usePathname } from "~/hooks/usePathname";
import { cn } from "~/lib/utils";

const navigationLinks = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "ABOUT US",
    to: "/about-us",
  },
  {
    title: "OUR AGENTS",
    to: "/our-agents",
  },
  {
    title: "PROPERTIES",
    to: "/properties",
  },
  {
    title: "SEARCH",
    to: "/search",
  },
];

const Navigation = () => {
  const { pathname } = usePathname();

  return (
    <nav
      className={cn(
        "bg-transparent fixed w-full px-[6.25rem] py-[1.625rem] top-[85px] inset-x-0 z-50 flex justify-between items-center",
        pathname === "/" ? "bg-transparent" : "bg-white"
      )}
    >
      <Logo />

      <div className="flex gap-12 items-center">
        {navigationLinks.map(({ title, to }) => (
          <NavLink
            key={title}
            to={to}
            className={cn(
              pathname === "/" ? "text-gray-50" : "text-primary-900",
              pathname === to && "font-bold"
            )}
          >
            {title}
          </NavLink>
        ))}

        <Button className="bg-transparent border border-white">
          Add Listing
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
