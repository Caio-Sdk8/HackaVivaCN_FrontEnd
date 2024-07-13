import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Header from '../../components/Header/header'
import bgs from '../../assets/bgs.png'
import './event.css'
import Footer from "../../components/Footer/footer";

interface Credential{
    idCustomer: number,
    credencial: string,
    idCredencial: string
}
export default function Event(){

    const [userCredential, setUserCredential] = useState<string>("");
    const [Credentials, setCredentials] = useState<Credential[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [credAchad, setCredAchad] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchCredentialsDetails = async () => {
            try {
                const response = await axios.get<Credential[]>('https://6691987e26c2a69f6e903a2c.mockapi.io/CityCnAPI/EventCredencial');
                setCredentials(response.data);
            } catch (err) {
                setError('Erro ao carregar credenciais.');
            } finally {
                setLoading(false);
            }
        };

        fetchCredentialsDetails();
    }, []);

    function acharCredencial(){
        setCredAchad(false)
        Credentials.filter(Cred => {
            Cred.credencial == userCredential;
            if (Cred.credencial == userCredential && Cred.idCustomer.toString() == localStorage.getItem('user-logado')) {
                
                return setCredAchad(true), setModal(true);
            }
        })
        setModal(true);
    }

    return(
        <div>
            <Header/>
            <section className='Main'>
                <div className='Container'>
                    <h1>Eventos</h1>
                    <form onSubmit={acharCredencial}>
                        <label htmlFor="Credential">Está participando de um evento no Expo Center Norte? <br />digite sua credencial para ganhar city coins, cupons de desconto e muito mais!</label>
                        <div className="inputBtn">
                            <input name="Credential" placeholder="Digite aqui sua credencial." value={userCredential} onChange={e => setUserCredential(e.target.value)} type="text" />
                            <button className="btnSub" type="button" onClick={acharCredencial}>Enviar</button>
                        </div> 
                    </form>
                    <div className="Interesse">
                        <h2>Eventos que talvez você goste</h2>
                        <div className="CardLoja">
                            <img src={bgs} alt=""/>
                        <p>BGS</p>
                        </div>
                    </div>
                    
                    {
                        modal ? 
                            credAchad ? 
                            <div id="modal" className="card" onClick={e => setModal(false)}>
                                <div className="card__content">
                                    <p className="title">Credencial encontrada</p>
                                    <hr/>
                                    <p className="content">Parabéns, com o cadastro dessa credencial você está elegivel a diversos beneficios.
                                        <br /><br />
                                        Clique em mim para me fechar!
                                    </p>
                                </div>
                            </div>
                            :
                            <div id="modal" className="card" onClick={e => setModal(false)}>
                                <div className="card__content">
                                    <p className="title">Credencial Não encontrada</p>
                                    <hr/>
                                    <p className="content">Atenção! credencial não encontra, isso pode acontecer se ela estiver incorreta ou não pertencer a você
                                    <br /><br /> Clique em mim para me fechar!
                                    </p>
                                </div>
                            </div>
                        :
                        ''
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}