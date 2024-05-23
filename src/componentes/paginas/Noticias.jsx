/*Noticias.jsx*/
import '../styles.css'
import Title from '../reusables/Title'
import BotonHome from '../reusables/BotonHome';

const Noticias = () => {
    return (
        <html className='fondoPaginas2'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><Title text="NOTICIAS"/></div>
            </div>
        </html>
    );
}

export default Noticias;
