/*Equipos.jsx*/ 
import '../styles.css'
import Title from '../reusables/Title'
import BotonHome from '../reusables/BotonHome';

const Equipos = () => {
    return (
        <html className='fondoPaginas'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><Title text="EQUIPOS"/></div>
            </div>
        </html>
    );
}

export default Equipos;
