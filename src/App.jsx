// App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation(); // Obtiene la ubicación actual para la transición

  return (
    <div>
      <Navbar /> {/* Navbar debe estar fuera de las rutas */}
      
      {/* TransitionGroup maneja las transiciones entre rutas */}
      <TransitionGroup>
        <CSSTransition
          key={location.key} // El identificador de cada cambio de ruta
          classNames="fade" // Clases CSS para la animación
          timeout={300} // Duración de la animación
        >
          <div className="transition-container">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
