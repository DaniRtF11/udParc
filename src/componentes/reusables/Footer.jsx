import '../../componentes/styles.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} UD Parc. Todos los derechos reservados.</p>
        </footer>
    );
}
export default Footer;
