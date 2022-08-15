import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;