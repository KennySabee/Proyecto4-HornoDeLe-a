// import Nav from "react-bootstrap/Nav";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Horno de Leña
              </h6>
              <p>
                Todos nuestros productos son elaborados bajo estrictas normas de
                limpieza y bio seguridad, así puedes recibir tus pedidos desde
                la comodidad de tu hogar sin exponer a tu familia.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
              <p>
                <a href="/" className="text-reset">
                  Hornados
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Fritadas
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Caldos
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Secos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Catering</h6>
              <p>
                <a href="/" className="text-reset">
                  Entregas
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Pedidos
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Reservas
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Menú
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Valle de los Chillos, EC
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                correos.horno@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 593 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 593 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};
export default Footer;
