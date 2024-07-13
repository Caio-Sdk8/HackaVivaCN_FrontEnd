# Hackathon Viva Center Norte - FrontEnd
Este repositorio Git contém a prototipação Web desenvolvida pela equipe Cow.Working no Hackathon Viva Center Norte, para a construção das telas e integração com a API disponibilizada, e também API's mockadas no site mockapi.io, fora utilizado o Framework de JavaScript: ReactJs juntamente a Vite, além de TypeScript como linguagem principal utilizada. Lembrando, o código aqui desenvolvido é apenas um protótipo de uma idéia maior.

# Telas Desenvolvidas
## Tela inicial
Conforme o video abaixo, a tela inicial contém um header, uma seção principal e um footer, na seção principal recebemos os dados de um usuário (como se ele estivesse logado), utilizando como fonte de dados a api disponibilizada no Hackathon como material de apoio. Utilizando a mesma api é feito um cruzamento de informações, onde na seção abaixo ("Talvez possa se interessar:") mostramos lojas que tenham como categoria um dos interesses do usuário logado em questão. Por fim na última seção é apenas uma demonstração de como poderiamos sugerir eventos para esse usuário, podendo ser feito até mesmo com um algoritmo semelhante ao supracitado.

https://github.com/user-attachments/assets/356e5621-7832-45e9-811c-3da470212a4d

## Tela PartyCity
Na tela PartyCity consumimos uma api mockada para realizar a consulta da quantidade de pontos do usuário em questão, além de reaproveitarmos as suas informações, para além disso temos um exemplo de como as missões poderiam ser exibidas, criando uma diferença intuitiva no layout possibilitando percer aquelas missões que já foram realizadas das que não foram.

https://github.com/user-attachments/assets/0f88d040-803d-421b-81eb-89530e10de27

## Tela Eventos
Na tela de Eventos temos a função de cadastrar uma credencial, por exemplo: estou em um evento no Expo Center Norte e no sistema integrado que seria a evolução deste protótipo, essa credencial já estaria no banco de dados voltado a parte do evento, ao cadastrar na parte do clube de beneficos, caso essa credencial exista e pertença ao usuário em questão, ele estará elegivel a receber mais pontos, beneficios e etc, para criar essa integração foi utilizada a api mockada e os dados do usuário logado. E abaixo mais um exemplo de como poderia ser a recomendação de eventos com base em preferências. 

https://github.com/user-attachments/assets/d4c8a386-a84d-46af-a425-bed2630f329c

## Tela de Contato
Uma tela simples de contato baseada nas já existentes nos sites da rede Center Norte.

https://github.com/user-attachments/assets/6efa4122-acd1-4369-b97e-617e6df13c8b

# Observação
Para a construção de grande parte dos elementos presentes nesta solução/protótipo fora utilizado os padrões dispostos no material de apoio em junção com conceitos de ui/ux para gerar uma melhor experiência para o usuário final.

