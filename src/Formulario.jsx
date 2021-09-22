/* eslint-disable no-unused-vars */
/* eslint-disable no-whitespace-before-property */
import './formulario.css';
import React , {useState} from 'react';

export  function Formulario() {

    const [datos,setDatos] = useState ({

        nombre :'',
        email  :'',
        numero : '',
        texto : ''
        
   })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos ({
            ...datos,[event.target.name] : event.target.value ,
        })
    }

    const enviarDatos =(event) => {
        event.preventDefault();
        console.log(datos.nombre +''+datos.email +' '+ datos.numero + ''+ datos.texto)
        event.target.reset()

    }
    return (
        <>
        <form action="" method="post" id="form" onSubmit = {enviarDatos}>
            <div className="form">
                <h2 className="titulo">Cotiza con nostros</h2>
                <div className ="form">
                <div className="grupo">
                    <input 
                      type="text" 
                      id="name"
                      name = "nombre"
                      onChange={handleInputChange}
                      required/><span className="barra"></span>
                    <label htmlFor="">Nombre</label>
                </div>
                <div className="grupo">
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={handleInputChange}
                    required/><span className="barra"></span>
                    <label htmlFor="">Email</label>
                </div>
                <div className="grupo">
                    <input 
                    type="number" 
                    name="numero" 
                    id="telefono"
                    onChange={handleInputChange} 
                    required/><span className="barra"></span>
                    <label htmlFor="">Teléfono</label>
                </div>
                <div className="grupo">
                        <textarea 
                        name="texto" 
                        cols="40" 
                        rows="5" 
                        onChange={handleInputChange}
                        required></textarea><span className="barra"></span>
                        <label htmlFor="">Escríbenos</label>
                    </div>
                    
                               
                <button type="submit">Enviar</button>
             </div>
            </div>
        </form>
        </>
    )
}
