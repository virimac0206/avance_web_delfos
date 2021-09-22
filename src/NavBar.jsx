import logo from './img/logo.png'
/* eslint-disable jsx-a11y/anchor-is-valid */
/* Menú de inicio */
export function NavBar () {
return (
    <nav>
    <a>
        <img className="logo" src={logo} alt = "" />
    </a>
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Portafolio</a>
    <a href="#">Servicios</a>
    <a href="#">Cotiza</a>
    <section className="textos-header">
        <h2> Impactando el mundo del desarrollo de software </h2>
    </section>
    <div className="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C149.99,150.00 309.25,-47.86 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
    </div>
</nav>
);
}
