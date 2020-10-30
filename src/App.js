import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import NavBarView from './Components/CommonView/NavBar/NavBarView'
import Footer from './Components/CommonView/Footer/FooterView'
import HomeView from './Components/HomeView/HomeView.jsx'
import LoginView from './Components/LoginView/LoginView'
import RegisterView from './Components/RegisterView/RegisterView'
function App() {
  return (
    <div className="App">
      <Router>
      <div>
       <NavBarView />
            
            <Switch>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/signup">
            <RegisterView />
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>

    
        {/* <Footer /> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
