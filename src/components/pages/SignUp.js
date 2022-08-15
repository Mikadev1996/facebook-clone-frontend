import React, {useState} from "react";
import Footer from "../Footer";

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='app'>
            <div className="signin-content account-content">
                <div id='sign-up-page-header' className='title-container'><h1>Mika's facebook</h1></div>
                <div id="form-container">
                    <div className="form-header">
                        <h2>Create a new account</h2>
                        <p>It's quick and easy</p>
                    </div>
                    <form className='account-form'>
                        <div className="form-control name-info">
                            <input type="text" placeholder="First name" id="firstname" name='firstname' onChange={e => setFirstname(e.target.value)}/>
                            <input type="text" placeholder="Surname" id="surname" name='surname' onChange={e => setSurname(e.target.value)}/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username' onChange={e => setUsername(e.target.value)}/>
                            <small>Error Message</small>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="New password" id="password" maxLength="16" name='password' onChange={e => setPassword(e.target.value)}/>
                            <small>Error Message</small>
                        </div>

                        <div>
                            <button className='form-submit' type="submit">Sign Up</button>
                        </div>
                        <div className='already-have'>
                            <a href='/'><p>Already have an account?</p></a>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SignUp;