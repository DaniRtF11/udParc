// src/componentes/paginas/Contacto.jsx
import '..//styles.css';
import Title from '../reusables/Title';
import BotonHome from '../reusables/BotonHome';
import FormularioContacto from '../reusables/FormularioContacto.jsx';

const Contacto = () => {
    return (
        <div className='fondoPaginas'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><Title text="CONTACTO" /></div>
            </div>
            <div className='contenedorFormulario'>
                <FormularioContacto />
            </div>
        </div>
    );
}

export default Contacto;
