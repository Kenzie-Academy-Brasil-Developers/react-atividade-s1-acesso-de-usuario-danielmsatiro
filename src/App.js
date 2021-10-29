import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import RestrictedPage from './components/RestrictedPage';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  const user = "Daniel"

  function Login(){
    return setIsLoggedIn(true)
  }

  function Logout(){
    return setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
          />
      </header>
    </div>
  );
}

export default App;
