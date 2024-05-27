// src/componentes/paginas/Equipos.jsx
import '../styles.css';
import TitlePages from '../reusables/TitlePages';
import BotonHome from '../reusables/BotonHome';
import Equipo from '../reusables/Equipo';
import equiposData from '../../assets/data/equipos.json'; // Ajusta la ruta según la estructura de tu proyecto

const Equipos = () => {
    return (
        <div className='fondoPaginas'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="EQUIPOS"/></div>
            </div>
            <div className='equipos-container'>
                {equiposData.map((equipo, index) => (
                    <Equipo
                        key={index}
                        nombre={equipo.nombre}
                        foto={equipo.foto}
                        jugadores={equipo.jugadores}
                        entrenador={equipo.entrenador}
                        segundo={equipo.segundo}
                        delegado={equipo.delegado}
                    />
                ))}
            </div>
        </div>
    );
}

export default Equipos;
