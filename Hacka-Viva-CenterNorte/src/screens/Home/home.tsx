import { useEffect, useState } from "react";
import axios from "axios";
import './home.css';
import Header from '../../components/Header/header';
import Esporte from '../../assets/sport_1198314.png';
import Supermercado from '../../assets/shopping-cart_3306024.png';
import Eletronico from '../../assets/multiscreen_4207283.png';
import Roupas  from '../../assets/pajamas_12692137.png';
import Padaria from '../../assets/bakery-shop_4673943.png';
import Geral from '../../assets/image_545236.png';
import banner from '../../assets/mainimg.png';
import bgs from '../../assets/bgs.png';
import Footer from "../../components/Footer/footer";
import { redirect } from "react-router-dom";

interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    email: string;
    dateOfBirth: string;
    registrationDate: string;
    preferences: string[];
}

interface OpeningHours {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

interface Store {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    email: string;
    website: string;
    category: string;
    openingHours: OpeningHours;
}

export default function Home() {
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [stores, setStores] = useState<Store[]>([]);
    const [storesRecomended, setStoresRecomended] = useState<Store[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCustomerDetails = async () => {
            try {
                const response = await axios.get<Customer>('https://hackathon.vivacn.roxcode.io/api/customers/details?id=1');
                setCustomer(response.data);
                localStorage.setItem('user-logado', response.data.id.toString())
            } catch (err) {
                setError('Erro ao carregar os detalhes do cliente.');
            } finally {
                setLoading(false);
            }
        };

        const fetchStoresDetails = async () => {
            try {
                const response = await axios.get<Store[]>('https://hackathon.vivacn.roxcode.io/api/stores/details');
                setStores(response.data);

                // Lógica para recomendação de lojas com base nas preferências do cliente
                const recommendedStores = response.data.filter(store =>
                    customer?.preferences.includes(store.category)
                );
                setStoresRecomended(recommendedStores);

            } catch (err) {
                setError('Erro ao carregar os detalhes das lojas.');
            } finally {
                setLoading(false);
            }
        };

        fetchStoresDetails();
        fetchCustomerDetails();
    }, [customer]);

    return (
        <div>
            <Header/>
            <div>
                <img className='Banner' src={banner} alt="" />
            </div>
            <section className='Main'>
                <div className='Container'>
                    <h1>Bem Vindo(a) {customer?.firstName + ' ' + customer?.lastName}</h1>
                    <div>
                        <p>Olá, Bem vindo de volta ao clube de benefícios que te deixe sem ter norte ao sentir a experiência Viva Center Norte, uma cidade feita para você.</p>
                    </div>
                    <div className="Interesse">
                        <h2>Talvez possa se interessar:</h2>
                        <div className="SectionCards">
                            {storesRecomended.map(store =>{
                                switch (store.category) {
                                    case "Esportes":
                                        return(
                                            (
                                                <div className="CardLoja" key={store.id} >
                                                    <img src={Esporte} alt=""/>
                                                    <p>{store.name}</p>
                                                </div>
                                            )
                                        )
                                        break;
                                    case "Eletrônicos":
                                        return(
                                            (
                                                <div className="CardLoja" key={store.id}>
                                                    <img src={Eletronico} alt=""/>
                                                    <p>{store.name}</p>
                                                </div>
                                            )
                                        )
                                        break;
                                    case "Supermercado":
                                        return(
                                            (
                                                <div className="CardLoja" key={store.id}>
                                                    <img src={Supermercado} alt=""/>
                                                    <p>{store.name}</p>
                                                </div>
                                            )
                                        )
                                        break;
                                    case "Roupas":
                                        return(
                                            (
                                                <div className="CardLoja" key={store.id}>
                                                    <img src={Roupas} alt=""/>
                                                    <p>{store.name}</p>
                                                </div>
                                            )
                                        )
                                        break;
                                    case "Padaria":
                                        return(
                                            (
                                                <div className="CardLoja" key={store.id}>
                                                    <img src={Padaria} alt=""/>
                                                    <p>{store.name}</p>
                                                </div>
                                            )
                                        )
                                        break;
                                    default:
                                        return(
                                            (
                                                <div key={store.id}>
                                                    <img src={Geral} alt=""/>
                                                    <p>{store.name}</p>
                                                </div>
                                            )
                                        )
                                        break;
                                }
                            })}
                        </div>
                    </div>
                    <div className="Interesse">
                        <h2>Eventos para você!</h2>
                        <div className="CardLoja">
                            <img src={bgs} alt=""/>
                            <p>BGS</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}