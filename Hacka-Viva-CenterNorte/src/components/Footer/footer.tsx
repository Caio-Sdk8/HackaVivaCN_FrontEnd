import './footer.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/Fidelidade-Viva-Azul - cópia.png';

export default function Footer(){
    var inicio = <Link to="/" >Inicio</Link>;
    var PartyCity = <Link to="/PartyCity" >PartyCity</Link>;
    var eventos = <Link to="/Eventos" >Eventos</Link>;
    var contato = <Link to="/Contato" >Contato</Link>;
    return (
        <footer>
            <nav className='navfooter'>
                {inicio}
                {PartyCity}
                <img src={logo} alt=""/>
                {eventos}
                {contato}
            </nav>
        </footer>
    )
}