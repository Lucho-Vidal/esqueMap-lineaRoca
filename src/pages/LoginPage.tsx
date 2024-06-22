// src/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const correctUsername = 'esquemas';
  const correctPassword = 'Roca123';
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem('loggedIn', 'true');
      setLoggedIn(true);
      setError('');
      navigate('/esquemap');
      
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-700">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {loggedIn ? (
        <div>
          <h1>Bienvenido</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
          <h1 className=''>Iniciar Sesión</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button onClick={handleLogin} >Iniciar sesión</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default LoginPage;

