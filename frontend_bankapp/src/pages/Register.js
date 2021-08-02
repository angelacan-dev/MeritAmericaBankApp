import { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {
    //First is variable (username), second is function (setUserName) that changes this variable
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    //In typescrip have to define event type. SynteticEvent is for typescript.
    // const submit = async (e: SyntheticEvent) => {
    const submit = async (e) => {
        e.preventDefault();

        await fetch('/api/enrollUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                // email,
                password
            })
        });
        // const content = await response.json();
        // console.log(content);
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/login' />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
            <input type="text" className="form-control" placeholder="Username" required
                onChange={e => setUsername(e.target.value)}
            />

            {/* <input type="email" className="form-control" placeholder="Email address" required
            onChange={e => setEmail(e.target.value)}
        /> */}

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Register
