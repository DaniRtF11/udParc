import { useState } from 'react';
import { FaVideo } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { IoMusicalNotesSharp } from "react-icons/io5";
import '../styles.css';  // Asegúrate de que este archivo contenga las clases CSS necesarias

const SelectMultimedia = ({ setActiveSection }) => {
    const [selectedIcon, setSelectedIcon] = useState('');  // Estado para rastrear el icono seleccionado

    const handleIconClick = (section) => {
        setActiveSection(section);
        setSelectedIcon(section);  // Actualiza el icono seleccionado
    };

    return (
        <div className="iconosContenedor">
            <IoMdImages
                className={`icono ${selectedIcon === 'images' ? 'iconoSelect' : ''}`}
                onClick={() => handleIconClick('images')}
            />
            <FaVideo
                className={`icono ${selectedIcon === 'videos' ? 'iconoSelect' : ''}`}
                onClick={() => handleIconClick('videos')}
            />
            <IoMusicalNotesSharp
                className={`icono ${selectedIcon === 'audio' ? 'iconoSelect' : ''}`}
                onClick={() => handleIconClick('audio')}
            />
        </div>
    );
};

export default SelectMultimedia;
