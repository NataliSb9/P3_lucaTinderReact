import React from 'react'
import './estilosfooter.css';

const Footer = () => (
    <footer>
    <div className="top_header">
    <section>
    <span><i className="fa fa-map-marker"></i></span>
    <span>Calle del Manzano, 45... Madrid, España, 28058</span>
    
    </section>
    <section>
    <span><i className="fa fa-phone"></i></span>
    <span>(34) 1234 5678</span>
    </section>
    <section>
    <span><i className="fa fa-envelope"></i></span>
    <span>atencion@lucatindermail.com</span>
    </section>
    </div>
    <span className="border-shape"></span>
    <div className="bottom_content">
    <section>
    <span><i className="fa fa-facebook"></i></span>
    <span><i className="fa fa-instagram"></i></span>
    <span><i className="fa fa-twitter"></i></span>
    <span><i className="fa fa-telegram"></i></span>
    </section>
    </div>
    <div className="copyright">
    Copyright © 2021 LucaTinder - Todos los Derechos Reservados
    </div>
    </footer>
)

export default Footer