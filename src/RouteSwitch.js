import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "./components/pages/LogIn";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;