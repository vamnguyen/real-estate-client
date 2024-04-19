import { useLocation, useNavigate } from "react-router-dom";

export const usePathname = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return {
    pathname,
    navigate,
  };
};
