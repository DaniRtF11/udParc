// src/componentes/paginas/Contacto.jsx
import '..//styles.css';
import TitlePages from '../reusables/TitlePages';
import BotonHome from '../reusables/BotonHome';
import FormularioContacto from '../reusables/FormularioContacto.jsx';
import Footer from '../reusables/Footer';
import useFullHeight from '../../hooks/useFullHeight';


const Contacto = () => {
    const isFullHeight = useFullHeight();
    return (
        <div className={`fondoPaginas ${isFullHeight ? 'fondoPaginasScreen' : 'fondoPaginasAuto'}`}>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="CONTACTO" /></div>
            </div>
            <div className='contenedorFormulario'>
                <FormularioContacto />
            </div>
            <Footer />
        </div>
    );
}

export default Contacto;
