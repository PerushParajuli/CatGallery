import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CatDetails from "./pages/CatDetails/CatDetails";
import CatBreeds from "./pages/CatBreeds/CatBreeds";
import { DataProvider } from "./Context";
import Favorite from "./pages/Favorites/Favorites";

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catBreeds" element={<CatBreeds />} />
                    <Route
                        path="/catBreeds/:breedId"
                        element={<CatDetails />}
                    />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/favorite/breedId" element={<Favorite />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
