/* InformacionContacto.jsx */
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const InformacionContacto = () => {
    return (
        <div className="contenedorInformacion">
            <div className="divInfo">
                <IoIosMail className="iconoContacto" /><p className="textoInfoContact">UDPARC@GMAIL.COM</p>
                </div>
            <div className="divInfo">  
                <FaPhone className="iconoContacto" /><p className="textoInfoContact">934 85 05 17</p>
                </div>
            <div className="divInfo">
                <FaLocationDot className="iconoContacto" /><p className="textoInfoContact">c/ Buenaventura Muñoz, 21</p>
            </div>
        </div>
    )
}

export default InformacionContacto;