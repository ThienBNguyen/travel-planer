import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBarView from './Components/CommonView/NavBar/NavBarView'
import HomeView from './Components/HomeView/HomeView.jsx'
import LoginView from './Components/LoginView/LoginView'
import RegisterView from './Components/RegisterView/RegisterView'
import HotelsView from './Components/HotelsView/HotelsView'
import HotelDetailView from './Components/HotelDetailView/HotelDetailView'
function App(props) {
  return (
    <div className="App">
      <Router>
      <div>
       <NavBarView />
       <Switch>

            <Route path="/hotels">
            <HotelsView />
          </Route>
          <Route path="/hotelroom">
            <HotelDetailView />
          </Route> 
          <Route path="/">
            <HomeView />
          </Route>
 
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/signup">
            <RegisterView />
          </Route>
         
        </Switch>

    
        {/* <Footer /> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
