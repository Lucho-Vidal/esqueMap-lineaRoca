import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Esquemas from "../components/Esquemas";
import Navbar from "../components/Navbar";
import Esquemap from '../components/esquemap';


function Routers() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoute />}>
                    <Route
                        path="/esquemap"
                        element={<Esquemap />}
                    />
                    <Route path="/esquemas" element={<Esquemas />} />                   
                </Route>
                <Route path="*" element={<Navigate to="/esquemap" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
