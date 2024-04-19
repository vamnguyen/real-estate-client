import { PiHouseLine } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { usePathname } from "~/hooks/usePathname";
import { cn } from "~/lib/utils";

const Logo = () => {
  const { pathname } = usePathname();

  return (
    <NavLink
      to="/"
      className={cn(
        "flex gap-2 items-center",
        pathname === "/" ? "text-white" : "text-primary-500"
      )}
    >
      <PiHouseLine size={44} />
      <div className="flex flex-col">
        <span className="font-bold tracking-wider text-xl">REIS</span>
        <span className="">Real Estate</span>
      </div>
    </NavLink>
  );
};

export default Logo;
