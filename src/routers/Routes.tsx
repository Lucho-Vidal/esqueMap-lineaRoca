import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Esquemas from "../components/Esquemas";
import Navbar from "../components/Navbar";
import PdfViewer from "../components/PdfViewer";


function Routers() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                    <Route
                        path="/esquemap"
                        element={
                            <PdfViewer fileUrl="../images/esquemap-lineaRoca.pdf" />
                        }
                    />
                    <Route path="/esquemas" element={<Esquemas />} />
                    {/* <Route
                        path="/esquemap"
                        element={
                            <div style={{ width: "100%", height: "100%" }}>
                                <SvgComponent />
                            </div>
                        }
                    /> */}
                    
                </Route>
                <Route path="*" element={<Navigate to="/esquemap" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
