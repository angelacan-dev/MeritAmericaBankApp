import { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

// const Login = (props: {setFirstName: (firstName: string) => void }) => {
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [token, setToken] = useState(null);

    // const submit = async (e: SyntheticEvent) => {
    const submit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // credentials: 'include',
            body: JSON.stringify({
                username: username,
                password: password
            })
        };
       
        const response = await fetch('http://localhost:8080/authenticate', requestOptions);
        const content = await response.json();
        console.log(content.jwt);
        // alert(content.jwt);
        alert(content.jwt);
        // setToken(content.token);
        sessionStorage.setItem('jwt', JSON.stringify(content.jwt));
        setRedirect(true);
        props.setFirstName(content.firstName);
    }

    if (redirect) {
        return <Redirect to='/' />
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="text" className="form-control" placeholder="Username" required
                onChange={e => setUsername(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
}

export default Login