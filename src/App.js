import './App.css';
import Pantallla from './Componentes/Pantalla';
import Principal from './Componentes/Principal';
import {apiKey} from './key';
import { Component } from 'react';





class App extends Component{

  
       state = {
            temperatura:'',
            humedad:'',
            velocidad:'',
            ciudad:'',
            error:null
        }


    render(){

      const getWeather = async (e)=>{

              e.preventDefault();

                const pais = e.target.elements[0];
                const paisValue = pais.value;
                const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${paisValue}&appid=${apiKey}&units=metric`;
                const response = await fetch(API_URL);
                const data = await response.json();
      
  
                this.setState({
                    temperatura:data.main.temp,
                    humedad:data.main.humidity,
                    velocidad:data.wind.speed,
                    ciudad:data.sys.country,
                    error:null
                });
            
               

      }

      return(
        <div className="App">
                      <div className='from'>
                              <Principal getWeather={getWeather}/>
                              <Pantallla{...this.state}/>
                      </div>
        </div>
      )
    }
}

export default App;