import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home/Home";
import Profile from "./components/pages/Profile/Profile";
import Friends from "./components/pages/Friends";
import Auth from "./components/pages/Auth";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/home' element={<Home />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/profile/:id' element={<Profile />}/>
                <Route path='/auth/:token/:user_id' element={<Auth />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;