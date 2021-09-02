import logo from './logo.svg';
import './App.css';
import  {useState} from "react"
import RestrictedPage from './components/RestrictedPage'



function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

const user = "Leonam Rodrigues"

const Login = () => {
  setIsLoggedIn(!false)
}

const Logout = () => {
  setIsLoggedIn(false)
}

  return (
    <div className="App">
      <header className="App-header">
          <RestrictedPage  isLoggedIn = {isLoggedIn} user = {user} Login = {Login} Logout = {Logout}/>
      </header>
    </div>
  );
}

export default App;
