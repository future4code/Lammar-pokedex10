import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DetailsPage from "../Pages/DetailsPage";
import SelectedPage from "../Pages/SelectedPage";



 const Rotas = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<HomePage/>}/>
                <Route path="/details" element= {<DetailsPage/>}/>
                <Route path="/selected" element= {<SelectedPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;