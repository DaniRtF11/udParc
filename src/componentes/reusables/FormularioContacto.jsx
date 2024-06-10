// src/componentes/reusables/FormularioContacto.jsx
import { useState } from 'react';
import '../styles.css';

const FormularioContacto = () => {
    const [tema, setTema] = useState('');
    
    return (
        <form className="formularioContacto">
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                <input type="text" id="nombre" name="nombre" className="inputContacto" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" className="inputContacto" required />
            </div>
            <div className="mb-4">
                <label htmlFor="tema" className="block text-gray-700 text-sm font-bold mb-2">Tema:</label>
                <select id="tema" name="tema" className="inputContacto" value={tema} onChange={(e) => setTema(e.target.value)} required>
                    <option value="">Seleccione el tipo de consulta</option>
                    <option value="apuntarse">Quiero jugar en el UD Parc</option>
                    <option value="mensaje">Tengo una pregunta</option>
                    <option value="trabaja">Trabaja con nosotros</option>
                </select>
            </div>

            {tema === 'apuntarse' && (
                <>
                    <div className="mb-4">
                        <label htmlFor="nombreJugador" className="block text-gray-700 text-sm font-bold mb-2">Nombre del Jugador:</label>
                        <input type="text" id="nombreJugador" name="nombreJugador" className="inputContacto" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="anioNacimiento" className="block text-gray-700 text-sm font-bold mb-2">Año de Nacimiento:</label>
                        <input type="number" id="anioNacimiento" name="anioNacimiento" className="inputContacto" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lateralidad" className="block text-gray-700 text-sm font-bold mb-2">Lateralidad:</label>
                        <select id="lateralidad" name="lateralidad" className="inputContacto" required>
                            <option value="">Seleccione una opción</option>
                            <option value="diestro">Diestro</option>
                            <option value="zurdo">Zurdo</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="posicion" className="block text-gray-700 text-sm font-bold mb-2">Posición:</label>
                        <input type="text" id="posicion" name="posicion" className="inputContacto" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ultimosEquipos" className="block text-gray-700 text-sm font-bold mb-2">Últimos Equipos:</label>
                        <textarea id="ultimosEquipos" name="ultimosEquipos" className="textareaContacto" required></textarea>
                    </div>
                </>
            )}

            {tema === 'trabaja' && (
                <>
                    <div className="mb-4">
                        <label htmlFor="edad" className="block text-gray-700 text-sm font-bold mb-2">Edad:</label>
                        <input type="number" id="edad" name="edad" className="inputContacto" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="titulacion" className="block text-gray-700 text-sm font-bold mb-2">Titulación:</label>
                        <select id="titulacion" name="titulacion" className="inputContacto" required>
                            <option value="">Seleccione una opción (UEFA o equivalente)</option>
                            <option value="uefa-c">UEFA C</option>
                            <option value="uefa-b">UEFA B</option>
                            <option value="uefa-a">UEFA A</option>
                            <option value="uefa-pro">UEFA PRO</option>
                            <option value="ninguna">Ninguna</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cargo" className="block text-gray-700 text-sm font-bold mb-2">Cargo al que opta:</label>
                        <select id="cargo" name="cargo" className="inputContacto" required>
                            <option value="">Seleccione una opción</option>
                            <option value="entrenador">Entrenador</option>
                            <option value="delegado">Delegado</option>
                            <option value="segundo-entrenador">Segundo Entrenador</option>
                            <option value="coordinador">Coordinador</option>
                            <option value="entrenador-practicas">Entrenador en Prácticas</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="observaciones" className="block text-gray-700 text-sm font-bold mb-2">Observaciones:</label>
                        <textarea id="observaciones" name="observaciones" className="textareaContacto"></textarea>
                    </div>
                </>
            )}

            {tema === 'mensaje' && (
                <>
                    <div className="mb-4">
                        <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" className="textareaContacto" required></textarea>
                    </div>
                </>
            )}

            <button type="submit" className="botonContacto">Enviar</button>
        </form>
    );
}

export default FormularioContacto;
