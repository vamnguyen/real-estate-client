import { Outlet } from "react-router-dom";
import { Contact, Navigation } from "~/components";

const PublicLayout = () => {
  return (
    <main>
      <Contact />
      <Navigation />

      <Outlet />
    </main>
  );
};

export default PublicLayout;
