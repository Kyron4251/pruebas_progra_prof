import React from "react";
import "../css/login.css";
import logo_uai from '../images/logo.svg';

function Login() {
    return(
        <section className="Login">
        <div className="login-box">
            <img className="Imagen_login" src={logo_uai}/>
            <form>
                <div className="usuario-box">
                    <input required="true" name="" type="email"></input>
                    <label>Usuario</label>
                </div>
                <div className="usuario-box">
                    <input required="true" name="" type="password"></input>
                    <label>Contraseña</label>
                </div>
                <a href="/Inicio">Iniciar sesión</a>
            </form>
        </div>
    </section>
    );
}

export {Login};