/*Multimedia.jsx*/
import '../styles.css'
import Title from '../reusables/Title'
import BotonHome from '../reusables/BotonHome';

const Multimedia = () => {
    return (
        <html className='fondoPaginas'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><Title text="MULTIMEDIA"/></div>
            </div>
        </html>
    );
}

export default Multimedia;
