import { BrowserRouter } from "react-router-dom";
import EnterpriseRegistrationPage from "./pages/EnterpriseRegistrationPage";
import ItemRegistrationPage from "./pages/ItemRegistrationPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate replace to="/" />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/novaempresa" element={<EnterpriseRegistrationPage />} />
        <Route path="/novoitem" element={<ItemRegistrationPage />} />
        <Route path="/listaitem" element={<ItemRegistrationPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
