import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from './PrivateRoute';
import Esquemas from '../components/Esquemas'
import Navbar from "../components/Navbar";
import PdfViewer from '../components/PdfViewer';

function Routers() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/croquis" element={<PdfViewer  fileUrl="../assets/Croquis Velocidades LGR.pdf"/>} />
                    <Route path="/esquemas" element={<Esquemas />} />
                </Route>
                <Route path="*" element={<Navigate to="/esquemas" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;