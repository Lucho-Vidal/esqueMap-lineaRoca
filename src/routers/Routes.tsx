import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from './PrivateRoute';
import Esquemas from '../components/Esquemas'

function App() {
    return (
        <BrowserRouter>
            <h1 className="text-4xl font-bold">EsqueMap Linea Roca</h1>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/esquemas" element={<Esquemas />} />
                </Route>
                <Route path="*" element={<Navigate to="/esquemas" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
