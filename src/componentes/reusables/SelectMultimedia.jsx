import { FaVideo } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";

const SelectMultimedia = ({ setActiveSection }) => {
    return (
        <div className="iconosContenedor">
            <IoMdImages className="icono" onClick={() => setActiveSection('images')} />
            <FaVideo className="icono" onClick={() => setActiveSection('videos')} />
            <IoMusicalNotesSharp className='icono' onClick={() => setActiveSection('audio')} />
        </div>
    );
}

export default SelectMultimedia;
