import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="redes">
          <p className="footer__tittle">Juguetería Cósmica</p>
          <div>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>  
          </div>
        </div>
        <div className="contactos flex__direction ai__c">
          <p>¿Necesitas Ayuda?</p>
          <p className="d__flex f__column ai__c">
            <span>Centro de Ayuda</span>
            <span>Preguntas Frecuentes</span>
            <span>Solicitud devoluciones</span>
          </p>
        </div>
        <div className="contactos flex__direction ai__c">
          <p>Atención al Cliente</p>
          <p className="d__flex f__column ai__c">
            <span>0800 122 0338</span>
            <span>0810 999 3728</span>
            <span>contacto@jc.com</span>
          </p>
        </div>
        <div className="contactos flex__direction ai__c">
          <p>Venta Telefónica</p>
          <p className="d__flex f__column ai__c">
            <span>0810 333 8700</span>
            <span>ventas@jc.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
