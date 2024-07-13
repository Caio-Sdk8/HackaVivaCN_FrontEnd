import { Link } from 'react-router-dom';
import VivaLogo from '../../assets/Fidelidade-Viva-Vermelho.png'
import './header.css'

function Header(){
     /*var currentLocation = window.location.href.toLowerCase();
    function ChangeState(){
        currentLocation = window.location.href.toLowerCase();
        console.log(currentLocation)
    }*/
    var inicio = <Link to="/" >Inicio</Link>;
    var PartyCity = <Link to="/PartyCity" >PartyCity</Link>;
    var eventos = <Link to="/Eventos" >Eventos</Link>;
    var contato = <Link to="/Contato" >Contato</Link>;

    /*switch (currentLocation) {
        case "http://localhost:5173/Contato":
            contato = <a  className='selected' href="./Contato">Contato</a>;
            break;
    
        default:
            inicio =  <a  className='selected' href="./">Inicio</a>;
            break;
    }*/
    return (
    <header>
        <div className='ContainerHeader'>
            <img src= {VivaLogo} alt=""/>
            <nav>
                {inicio}
                {PartyCity}
                {eventos}
                {contato}
            </nav>
        </div>
    </header>
    )
    
}

export default Header;