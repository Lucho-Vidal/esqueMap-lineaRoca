import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <BrowserRouter>
        <h1 className="text-4xl font-bold">EsqueMap Linea Roca</h1>
          <Routes>
            <Route path='/' element={<h1>Home Page</h1>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/esquema' element={<h1>esquema</h1>} />
          </Routes>
            
        </BrowserRouter>
    );
}

export default App;
