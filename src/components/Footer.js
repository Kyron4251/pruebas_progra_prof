import React from "react";
import "../css/footer.css";
import logo_uai from '../images/logo.svg';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return(
            <MDBFooter style={{ backgroundColor: '#1D1E20' }} className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
                <span>Conectate con nosotros a traves de nuestras redes sociales:</span>
            </div>
    
            <div>
                <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
                </a>
                <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
                </a>
                <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
                </a>
                <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
                </a>
                <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" />
                </a>
            </div>
            </section>
    
            <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                    <img src={logo_uai} />
                    </h6>
                    <p style={{ textAlign:'justify' }}>
                    Nuestra misión es entregar una educación que, basada en la libertad y en la responsabilidad personal, permita a sus estudiantes desarrollar la totalidad de su potencial intelectual y humano.
                    </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Links de interes</h6>
                    <p>
                    <a href='/' className='text-reset'>
                        Inicio
                    </a>
                    </p>
                    <p>
                    <a href='/Inscripcion' className='text-reset'>
                        Inscripción
                    </a>
                    </p>
                    <p>
                    <a href='/ProfeGuia' className='text-reset'>
                        Profesor Guía
                    </a>
                    </p>
                </MDBCol>
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                    <p>
                    <MDBIcon icon="home" className="me-2" />
                    Santiago, Diagonal las Torres 2640, Peñalolén.
                    </p>
                    <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    secretariadepostgrado@uai.cl
                    </p>
                    <p>
                    <MDBIcon icon="phone" className="me-3" /> (56 2) 2331 1000
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </section>
    
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <a className='text-reset fw-bold' href='https://www.uai.cl/'>
                UAI.cl
            </a>
            </div>
        </MDBFooter>
    );
    
}

export {Footer};