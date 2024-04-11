import React from "react";
import myImage from "../assets/imagen.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const PresentationCard = () => {
  return (
     <div class="card">
      <img src={myImage} class="card-img-top" alt="Mi Imagen" />
      <div class="card-body">
        <h5 class="card-title">Jesus Garzon || Alejandro Fajardo </h5>
        <p class="card-text">Estudiantes de Ingenieria de sistemas y computacion</p>
        {/* <p className="card-text">Genera soluciones a las necesidades de la organización basados en tecnologías de información y en su capacidad para integrar conocimientos de matemáticas y física, principios de ingeniería, el análisis estadístico y probabilístico, así como sus habilidades de cómputo.</p> */}
      </div>
      {/* <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: jesus.garzon@uptc.edu.co</li>
        <li className="list-group-item">Phone: +573114422828</li>
        <li className="list-group-item">Address: Tunja Boyaca</li>
      </ul> */}
    </div> 
    
  );
};

export default PresentationCard;