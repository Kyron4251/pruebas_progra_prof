import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from './subpage/Inicio';
import { Login } from './subpage/Login';
import { ProfeGuia } from './subpage/ProfeGuia';
import { Inscripcion } from './subpage/Inscripcion';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/Inscripcion" element={<Inscripcion />}></Route>
          <Route path="/ProfeGuia" element={<ProfeGuia />}></Route>
        </Routes>
    </Router>
  );
}

export default App;