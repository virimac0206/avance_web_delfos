import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import icono1 from './img/icono1.png'

export  function Portafolio() {
    return (
        <>
         <section className="portafolio">
            <div className="contenedor">
                <h2 className="titulo">Portafolio</h2>
                <hr color = "black" className="BarraNegro" /><br />
                <div className="galeria-port">
                    <div className="imagen-port">
                        <img src={img7} alt=""/>
                        <div className="hover-galeria">
                            <img src={icono1} alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img2} alt=""/>
                        <div className="hover-galeria">
                            <img src="img/icono1.png" alt="" />
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img3} alt=""/>
                        <div className="hover-galeria">
                            <img src={icono1} alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img4} alt=""/>
                        <div className="hover-galeria">
                            <img src="img/icono1.png" alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img5} alt=""/>
                        <div className="hover-galeria">
                            <img src={icono1} alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img6} alt=""/>
                        <div className="hover-galeria">
                            <img src={icono1} alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img7} alt=""/>
                        <div className="hover-galeria">
                            <img src={icono1} alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={img8} alt=""/>
                        <div className="hover-galeria">
                            <img src={icono1} alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
      </>
    );
}
