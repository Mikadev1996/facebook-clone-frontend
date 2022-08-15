import '../../styles/LogIn.scss';
import React, {useState} from "react";
import Footer from "../Footer";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='app'>
            <div className="login-content">
                <div className='title-container'>
                    <h1>Mika's facebook</h1>
                    <p>Facebook helps you connect and share with the people who saw this Git Repo.</p>
                </div>
                <div id="form-container">
                    <form className='account-form'>
                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username' onChange={e => setUsername(e.target.value)}/>
                            <small>Error Message</small>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" maxLength="16" name='password' onChange={e => setPassword(e.target.value)}/>
                            <small>Error Message</small>
                        </div>

                        <div>
                            <button className='form-submit' type="submit">Log In</button>
                        </div>
                        <div>
                            <button id='facebook-login' className='form-submit' type="submit">Log In with real Facebook</button>
                        </div>
                        <div>
                            <button id='test-account-login' className='form-submit' type="submit">Test Account</button>
                        </div>
                    </form>
                    <div className='hr-container'><hr className='form-hr'/></div>
                    <div className='create-new-container'>
                        <button className='form-submit'>Create New Account</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LogIn;