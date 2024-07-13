import './carteira.css'
import { ChangeEvent, useEffect, useState } from "react";
import Header from '../../components/Header/header'
import coin from '../../assets/coin_6691450.png'
import avatar from '../../assets/user_219976.png'
import missao from '../../assets/mission_1628615.png'
import Footer from "../../components/Footer/footer";
import axios from 'axios';

interface bluedWallet{
    idCustomer: number,
    bluedCoins: number,
    id: string
}

export default function Carteira(){
    
    const [bluedWallets, setbluedWallets] = useState<bluedWallet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchbluedWalletsDetails = async () => {
            try {
                const response = await axios.get<bluedWallet[]>('https://6691edbd26c2a69f6e910f04.mockapi.io/api/bluedWallet');
                setbluedWallets(response.data);
                console.log(bluedWallets)
            } catch (err) {
                setError('Erro ao carregar credenciais.');
            } finally {
                setLoading(false);
            }
        };

        fetchbluedWalletsDetails();
    }, []);
    var pontos = {
        idCustomer: 0,
        bluedCoins: 0,
        id: "0"
    };

    bluedWallets.map(pnts => {
        if(pnts.idCustomer.toString() == localStorage.getItem('user-logado')){
            pontos = pnts;
        }
    })

    return(
        <div>
            <Header/>
            <section>
                <div className='Container'>
                    <h1>PartyCity</h1>
                    <section className='SecPoints'>
                        <div className='CardPointsLvl'>
                            <img src={coin} alt=""/>
                            <div className='PointsNum'>
                                <p className='Points'>{pontos.bluedCoins}</p>
                                <p>Pontos</p>
                            </div>
                        </div>
                        <div className='CardLvl'>
                            <div className='SecInfos'>
                                <img src={avatar} alt="" />
                                <div className='Infos'>
                                    <p>Carlos</p>
                                    <p>Nivel atual: Partynho</p>
                                    <p>XP: 700/1000</p>
                                </div>
                            </div>
                            <div className='BackProgress'>
                                <div className='InnerProgress'></div>
                            </div>
                        </div>
                    </section>
                    <section className='SecMiss'>
                        <h2>Missões</h2>
                        <div className='SectionCards'>
                            <div className="CardMissao" >
                                <img src={missao} alt=""/>
                                <p className='title'>Missão: Fotos Divertidas</p>
                                <p>Tire uma foto em um dos pontos temáticos do shopping e compartilhe nas redes sociais usando a hashtag do shopping. <br />
                                Recompensa: 50 pontos + Participação em sorteio mensal de brindes</p>
                            </div>
                            <div className="CardMissao" >
                                <img src={missao} alt=""/>
                                <p className='title'>Missão: Evento Exclusivo</p>
                                <p>Participe de um evento especial promovido pelo shopping (ex: lançamento de produto, workshop).<br />
                                Recompensa: 120 pontos + Acesso VIP para o próximo evento</p>
                            </div>
                            <div className="CardMissao" >
                                <img src={missao} alt=""/>
                                <p className='title'>Missão: Compras Sustentáveis</p>
                                <p>Compre um produto de uma loja participante da campanha de sustentabilidade do shopping. <br />
                                Recompensa: 80 pontos + Badge "Comprador Sustentável"</p>
                            </div>
                            <div className="CardMissao" >
                                <img src={missao} alt=""/>
                                <p className='title'>Missão: Explorador Inicial</p>
                                <p>Faça check-in em três lojas diferentes no shopping center.<br />
                                Recompensa: 50 pontos + Badge "Explorador Inicial"</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}