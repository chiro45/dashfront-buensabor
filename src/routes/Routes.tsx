import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseNavbar from '../components/ui/common/Navbar/BaseNavbar';
import Inicio from '../components/screens/Inicio/Inicio';
import EmpresaComponent from '../components/screens/Empresa/EmpresaComponent';
import Sucursal from '../components/screens/Sucursal/Sucursal';
import SidebarLayout from '../components/ui/common/SideBarLayout/SideBarLayout';
import './routes.css'


const Rutas: React.FC = () => {
  return (
    <Router>
      <div className='navbar'>
        <BaseNavbar />
      </div>
      <Routes>
        <Route path="/" element={<EmpresaComponent />} />
          <Route element={<SidebarLayout />}>
          <Route path="/empresa/estadisticas/:empresaId" element={<Inicio />} />
          <Route path="/empresa/:empresaId" element={<Sucursal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Rutas;
