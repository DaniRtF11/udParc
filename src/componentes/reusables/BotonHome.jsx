/*BotonHome.jsx*/
import { useNavigate } from 'react-router-dom';
import '../../componentes/styles.css'

const BotonHome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return(
        <img src='/img/escudos/normal.png' className='btnHome' onClick={handleClick} alt='logo UD Parc'></img>
    );
}

export default BotonHome;
