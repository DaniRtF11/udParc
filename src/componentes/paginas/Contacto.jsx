// src/componentes/paginas/Contacto.jsx
import '..//styles.css';
import TitlePages from '../reusables/TitlePages';
import BotonHome from '../reusables/BotonHome';
import FormularioContacto from '../reusables/FormularioContacto.jsx';

const Contacto = () => {
    return (
        <div className='fondoPaginas2'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="CONTACTO" /></div>
            </div>
            <div className='contenedorFormulario'>
                <FormularioContacto />
            </div>
        </div>
    );
}

export default Contacto;
