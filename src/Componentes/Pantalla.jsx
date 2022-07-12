import React from "react";
import '../hojas-de-estilos/Pantalla.css'
import { ImBrightnessContrast } from "react-icons/im";
import { ImDroplet } from "react-icons/im";
import { ImOnedrive } from "react-icons/im";
import { ImFlag } from "react-icons/im";

    function Pantalla( props){
        return(
            <div className="pantalla">
                    <h4> <ImBrightnessContrast/> Temperatura: <span>{props.temperatura} °C</span></h4>
                    <h4> <ImDroplet/> Humedad: <span>{props.humedad}%</span></h4>
                    <h4> <ImOnedrive/> Velocidad del Viento: <span>{props.velocidad} km/h</span></h4>
                    <h4> <ImFlag/> Ciudad: <span>{props.ciudad}</span></h4>
            </div>
        )
    };

export default Pantalla