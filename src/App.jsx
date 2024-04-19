import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "~/lib/path";
import { Home, PublicLayout } from "~/pages/public";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
