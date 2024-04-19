import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "~/lib/path";
import { Home, PublicLayout } from "~/pages/public";
import { Modal } from "~/components";
import { useAppStore } from "~/hooks/stores/useAppStore";

function App() {
  const { isModalOpen } = useAppStore();

  return (
    <BrowserRouter>
      {isModalOpen && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
