/*Contacto.jsx*/
import '../styles.css'
import Title from '../reusables/Title'
import BotonHome from '../reusables/BotonHome';

const Contacto = () => {
    return (
        <html className='fondoPaginas'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><Title text="CONTACTO"/></div>
            </div>
        </html>
    );
}

export default Contacto;
