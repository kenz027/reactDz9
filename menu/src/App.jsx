import { Route, Router, Routes } from "react-router";
import Menu from "./components/Menu";
import DriftPage from "./pages/DriftPage";
import ForzaPage from "./pages/ForzaPage";
import HomePage from "./pages/HomePage";
import TimeAttackPage from "./pages/TimeAttackPage";

export default function App() {
  return (
      <div>
        <Menu />
        <Routes className="page">
          <Route path="/" exact>
            <Route index element={<HomePage />} />
            <Route path="drift" element={<DriftPage />} />
            <Route path="timeattack" element={<TimeAttackPage />} />
            <Route path="forza" element={<ForzaPage />} />
            <Route path="*" element={<p>Page 404</p>} />
          </Route>
        </Routes>
      </div>
  );
}