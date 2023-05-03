import {Navpanel} from '../components/Navpanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Carrusel} from '../components/Carrusel';

function Inicio() {
    return (
        <>
            <Navpanel/>
            <Carrusel/>
            <Footer/>
        </>
    );
}

export {Inicio};