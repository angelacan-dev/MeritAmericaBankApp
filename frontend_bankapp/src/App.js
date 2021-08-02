import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import { SyntheticEvent, useState } from "react";
import { useEffect } from "react"

function App() {
  const [firstName, setFirstName] = useState('');
  // const token = JSON.parse(sessionStorage.getItem('jwt'));
  // console.log(token);
  // const h = new Headers();
  // h.append('Authentication', 'Bearer ${token}');

  useEffect(() => {
    (
      async () => {
        const url = 'http://localhost:8080/Me';
        const token = JSON.parse(sessionStorage.getItem('jwt'));
        console.log("token is = " + token);
        const h = new Headers();
        h.append('Authentication', 'Bearer ${token}');

        const requestOptions = {
          method: 'GET',
          mode: 'cors',
          headers: h,
        };

        await fetch(new Request(url, requestOptions))
          .then(response => response.json())
          .then(content => {
              console.log(content[0]);
          })
          .catch(err => {
              console.error(err.message);
          })

        // setFirstName(content.firstName);
        
      }
    )();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav firstName={firstName} setFirstName={setFirstName} />

        <main className="form-signin">

          <Route path='/' exact component={() => <Home firstName={firstName} />} />
          <Route path='/login' component={() => <Login setFirstName={setFirstName} />} />
          <Route path='/register' component={Register} />

        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
