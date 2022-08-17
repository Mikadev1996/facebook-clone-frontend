import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home/Home";
import Profile from "./components/pages/Profile/Profile";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile/:id' element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;