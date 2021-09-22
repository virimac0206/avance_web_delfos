import logo from './img/logo.png'
/* Seccion sobre Nosotros */
export  function MainBody() {
    return (
        <>
        <section className="contenedor sobre nosotros">
            <h2 className="titulo">Nosotros</h2>
            <hr color = "black" className = "BarraNegro"/><br />
            <div className="contenedor-sobre-nosotros">
                <img src={logo} alt="" className="imagen-about-us"/>
                <div className="contenido-textos-nosotros">
                 <p>Delfos es una empresa de Desarrollo de soluciones a la medida,que viven en ambientes cloud y on-premise proporcionando a nuestros clientes la confianza de contener su información en una infraestructura segura, confiable y escalable.</p><br />
                 <p>Nuestros desarrollos son diseñados de tal forma que sean eficientes, ágiles y usables, con interfaces capaces de ser amigables y responsivas, asegurando la navegación en múltiples dispositivos.</p><br />  
                 <p>Ofrecemos a nuestros clientes la posibilidad de brindar un servicio eficiente, con impacto positivo en la productividad y reducción de costos y tiempos. Así como contar con herramientas tecnológicas que permitan el crecimiento exponencial y escalable de su operación o negocio.</p><br />
                 <p>El talento Humano de Delfos 369 cuenta con experiencia y valores que permiten proporcionar a nuestros clientes consultoría funcional y estratégica, productos digitales sólidos, buscando siempre la excelencia en cada parte del proceso de desarrollo.</p><br />
                </div>
            </div>
        </section>  
        </>
    );
}
