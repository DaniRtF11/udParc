/*Noticias.jsx*/
import '../styles.css'
import TitlePages from '../reusables/TitlePages'
import BotonHome from '../reusables/BotonHome';

const Noticias = () => {
    return (
        <html className='fondoPaginas2'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="NOTICIAS"/></div>
            </div>
        </html>
    );
}

export default Noticias;
