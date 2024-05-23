// src/componentes/reusables/Equipo.jsx
import '../styles.css';

const Equipo = ({ nombre, foto, jugadores, entrenador, segundo, delegado }) => {
    return (
        <div className="equipo">
            <h2 className="nombreEquipo">{nombre}</h2>
            <div className='contenidoEquipo grid grid-cols-3 gap-4'>
                <div className='espacioFoto'>
                    <img src={foto} alt={nombre} className="fotoEquipo" />
                </div>
                <div className='entrenadores'>
                    <h3><strong>Entrenador:</strong> {entrenador}</h3>
                    {segundo && <h4><strong>Segundo entrenador:</strong> {segundo}</h4>}
                    {delegado && <h4><strong>Delegado:</strong> {delegado}</h4>}
                </div>
                <div className='jugadores'>
                    <h3><strong>Jugadores:</strong></h3>
                    <ul className="lista-jugadores">
                        {jugadores.map((jugador, index) => (
                            <li key={index}>{jugador}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Equipo;
