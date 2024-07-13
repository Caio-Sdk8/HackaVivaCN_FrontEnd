import { Route, BrowserRouter, Routes } from "react-router-dom"; // Importe também o componente <Routes>
import Contact from "./screens/Contact/contact";
import Home from "./screens/Home/home";
import Event from "./screens/Events/event";
import Agenda from "./screens/Agenda/agenda";

const AppRoutes = () => {
   return(
       <BrowserRouter>
           <Routes> {/* Envolver os componentes <Route> dentro de <Routes> */}
               <Route path="/" element={<Home/>}/>     
               <Route path="/Contato" element={<Contact />} />
               <Route path="/Eventos" element={<Event />} />
               <Route path="/Agendamentos" element={<Agenda />} />
           </Routes>
       </BrowserRouter>
   );
}

export default AppRoutes;