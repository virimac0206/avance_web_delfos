import './App.css';
import { MainBody } from './MainBody';
import { NavBar } from './NavBar';
import { Portafolio } from './Portafolio';
import { Servicios } from './Servicios';
import Foot  from './Foot.js';
/* Estructura de la página web */
function App() {
  return (
     <>
     <header>
        <NavBar />
     </header>
     <main>
         <MainBody />
         <Servicios />
         <Portafolio />
        
     </main>
     <footer>
       <Foot />
     </footer>
     </>
    );
}
export default App;
