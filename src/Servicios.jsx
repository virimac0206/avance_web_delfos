import desarrollo from  './img/desarrollo.jpg';
import apps from './img/apps.jpg';
import ia from './img/ia.jpg';
import consultoria from './img/consultoria.jpg';

export function Servicios() {
    return (
        <>
        <section className="contenedor servicios"> 
         <h2 className="titulo">Nuestros servicios</h2>
            <div className="servicios">
                <hr color = "black" className="BarraNegro" /><br />
                <img src={desarrollo} alt="" className="los-servicios"/>
                <div className="contenido-textos-servicios">
                <div className="servicio-ind">
                      <h3><span>1</span>Desarrollo de software</h3>
                       <p>Evaluamos los requerimientos de nuestros clientes de manera metódica y precisa, para poder ofrecer soluciones de desarrollo de software a la medida, adaptando el proyecto a las necesidades de nuestros clientes, tomando en cuenta la optimización de recursos, ofreciendo soluciones escalables y adaptativas.
                       </p>
                  </div>
                 <hr color = "black" className="BarraNegro" /><br />
                <img src={apps} alt="" className="los-servicios"/>
                  <div className="contenido-textos-servicios">
                    <div className="servicio-ind">
                       <h3><span>2</span>APP´S</h3>
                       <p>Creamos experiencias digitales, que permiten a nuestros clientes potenciar y automatizar su negocio, dándole un valor importante al diseño y experiencia de usuario, ofreciendo arquitecturas escalables, que permitan el desarrollo de un producto de calidad</p>
                    </div>
                   </div>
                <hr color = "black" className="BarraNegro" /><br />
                <img src={ia} alt="" className="los-servicios"/>
                  <div className="contenido-textos-servicios">
                    <div  className="servicio-ind">
                     <h3><span>3</span>Inteligencia artificial</h3>
                     <p>Colaboramos en el desarrollo de tecnología basado en Inteligencia Artificial (IA), proporcionado el acompañamiento y consultoría especializada para implementar soluciones que permitan transformar de manera potencial el negocio con el objetivo de que sea a gran escala, integrando los sistemas adecuados, optando practicas responsables y transmitiendo a los equipos de trabajo una nueva manera de colaborar con las máquinas.
                     </p>
                    </div>
                    </div>
                  <hr color = "black" className="BarraNegro" /><br />
                <img src={consultoria} alt="" className="los-servicios"/>
                <div className="contenido-textos-servicios">
                  <div className="servicio-ind">
                       <h3><span>4</span>Consultoría</h3>
                       <p>En Delfos contamos con un equipo de expertos que aseguran el desarrollo optimo del proyecto, colaborando con nuestros clientes con la asesoría y acompañamiento con las mejores prácticas para lograr una solución tecnológica exitosa.
                       </p>
                  </div>
                 </div>
              </div>
            </div>
        </section>
       </>
    );
}
