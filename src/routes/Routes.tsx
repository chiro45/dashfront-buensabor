
import { Route, Routes } from 'react-router-dom';
import BaseNavbar from '../components/ui/common/Navbar/BaseNavbar';
import Inicio from '../components/screens/Inicio/Inicio';
import EmpresaComponent from '../components/screens/Empresa/EmpresaComponent';
import './routes.css'
import SucursalComponent from '../components/screens/Sucursal/SucursalComponent';
import Insumo from '../components/screens/Insumo/Insumo';
import Producto from '../components/screens/Producto/Producto';
import Categoria from '../components/screens/Categoria/Categoria';
import UnidadMedida from '../components/screens/UnidadMedida/UnidadMedida';
import Promocion from '../components/screens/Promocion/Promocion';


const Rutas = () => {
  return (
    <>
      <div className='navbar'>
        <BaseNavbar />
      </div>
      <Routes>
        <Route path="*" element={<EmpresaComponent />} />
        <Route path="/empresa/:empresaId" element={<SucursalComponent />} />
        <Route path="/dashboard/:sucursalId" element={<Inicio />} />
        <Route path="/insumos/:sucursalId" element={<Insumo />} />
        <Route path="/productos/:sucursalId" element={<Producto />} />
        <Route path="/unidadMedida" element={<UnidadMedida />} />
        <Route path="/categorias/:idSucursal" element={<Categoria />} />
        <Route path="/promociones/:idSucursal" element={<Promocion />} />
      </Routes>
    </>
  );
}

export default Rutas;
