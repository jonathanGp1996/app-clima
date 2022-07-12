import React from "react";
import '../hojas-de-estilos/Principal.css'

    function Principal( props ){
        return(
            <form onSubmit={props.getWeather} className="Principal">

                    <input type="search" name="pais" id="" className="input" placeholder="País" />
                    <button className="btn">Buscar</button>

            </form>
        )
    };

export default Principal