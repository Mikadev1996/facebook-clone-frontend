import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";
import { config } from '../../Constants';

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState(false);
    const url = config.url.BASE_URL;

    const nav = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: username,
            password: password
        });
        fetch(`${url}/users/log-in`, {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                if (data.token !== undefined) {
                    localStorage.setItem('token', JSON.stringify(data.token));
                    localStorage.setItem('user_id', JSON.stringify(data.user._id));
                    nav('/home');
                }
                else {
                    window.alert("Error, incorrect user/password");
                }
            });
    }

    const handleTestLogIn = (e) => {
        e.preventDefault();
        const formData = JSON.stringify({
            username: "testing",
            password: "123"
        });
        fetch(`${url}/users/log-in`, {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                if (data.token !== undefined) {
                    localStorage.setItem('token', JSON.stringify(data.token));
                    localStorage.setItem('user_id', JSON.stringify(data.user._id));
                    nav('/home');
                }
                else {
                    setFormError(true);
                    window.alert("Error, incorrect user/password");
                }
            });
    }

    return (
        <div className='app'>
            <div className="account-content">
                <div className='title-container'>
                    <h1>Mika's facebook</h1>
                    <p>Facebook helps you connect and share with the people who saw this Git Repo.</p>
                </div>
                <div id="form-container">
                    <form className='account-form'>
                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username' onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" maxLength="16" name='password' onChange={e => setPassword(e.target.value)}/>
                            {formError && <small>Incorrect Username or Password</small>}
                        </div>

                        <div>
                            <button onClick={e => handleLogIn(e)} className='form-submit' type="submit">Log In</button>
                        </div>
                        <div>
                            <button id='facebook-login' className='form-submit' type="submit">Log In with real Facebook</button>
                        </div>
                        <div>
                            <button onClick={e => handleTestLogIn(e)} id='test-account-login' className='form-submit' type="submit">Test Account</button>
                        </div>
                    </form>
                    <div className='hr-container'><hr className='form-hr'/></div>
                    <div className='create-new-container'>
                        <a href='/sign-up' className='form-submit'><div>Create New Account</div></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LogIn;