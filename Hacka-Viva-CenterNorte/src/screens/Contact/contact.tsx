import Header from '../../components/Header/header'
import './contact.css'

function Contact(){  
    return(
        <div>
            <Header/>
            <section>
                <div className='Container'>
                    <h1>Contato</h1>
                    <div>
                        <div className='BigParagraph'>
                            <p>Tem uma questão sobre o shopping? É só perguntar. Aqui você encontra informações sobre os temas mais procurados sobre o empreendimento. Em caso de dúvida – ou vontade de continuar a conversa – é só entrar em contato por um dos nosso canais ao lado. Confira os horários.
                            <br/> <br /> Segunda-feira a sábado das 10h às 22h. <br />Domingos e feriados das 12h às 20h.
                            </p>
                        </div>
                        <div>
                            <div>
                                <h2>Endereço</h2>
                                <p>Travessa Casalbuono, 120 <br />
                                Vila Guilherme – São Paulo / SP <br />
                                <a href="https://maps.app.goo.gl/1n2LvZpxCaaWNGqX9">Acesse o mapa</a></p>
                            </div>
                            <div>
                                <h2>Telefone</h2>
                                <p>Tel.: (11) 2224-5959 <br />
                                Whatsapp: (11) 94075-9256</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact;