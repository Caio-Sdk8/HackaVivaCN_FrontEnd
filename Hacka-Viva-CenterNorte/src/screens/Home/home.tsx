import { useEffect, useState } from "react";
import axios from "axios";
import './home.css';
import Header from '../../components/Header/header';
import banner from '../../assets/mainimg.png';

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
                    <div>
                        <h2>Talvez possa se interessar:</h2>
                        <ul>
                            {storesRecomended.map(store => (
                                <li key={store.id}>
                                    <strong>{store.name}</strong> - {store.category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Eventos para você!</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}