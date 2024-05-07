/*Menu.jsx*/

import './styles.css'
import { Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import Try from './Try';
import Try2 from './Try2';

const Menu = () => {
    return (
        <div className="menuDiv">
            <BrowserRouter className="menuOp">
                <li className="menuOpcion">
                    <Link to='/noticias' className='font-semibold'>NOTICIAS</Link>
                </li>
                <li className="menuOpcion">
                    <Link to="#" className="font-semibold">EQUIPOS</Link>
                </li>
                <li className="menuOpcion">
                    <Link to="historia" className="font-semibold">HISTORIA</Link>
                </li>
                <li className="menuOpcion">
                    <Link to="#" className="font-semibold">MULTIMEDIA</Link>
                </li>
                <li className="menuOpcion">
                    <Link to="#" className="font-semibold">CONTACTO</Link>
                </li>
                <Switch>
                    <Route path='/noticias'> <Try /> </Route>
                </Switch>
                <Switch>
                    <Route path='/historia'> <Try2 /> </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default Menu;