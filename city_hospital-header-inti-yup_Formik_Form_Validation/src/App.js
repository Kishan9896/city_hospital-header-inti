import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Container/Home';
import Footer from './Component/Footer';
import Department from './Container/Department/Department';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Doctors from './Container/Department/Doctors';
import About from './Container/Department/About';
import Contact from './Container/Department/Contact';
import Login from './Container/Login';
import Medicine from './Container/Medicine/Medicine';
import Refexample from './Component/RefExample/Refexample';
import Appointment from './Container/BookAppoinment/Appointment';
import ListAppoinment from './Container/ListAppoinment/ListAppoinment';
import PublicRoute from './publicRoute/publicRoute';
import PrivateRoute from './privateRoute/privateRoute';
import themeAction from './Context/Theme.Action';


function App() {
  return (
    <>
    <themeAction>
    <Header />
    <Switch>
      <PublicRoute path="/" exact component={Home}/>
      <PublicRoute path="/departments" exact component={Department}/>
      <PublicRoute path="/doctors" exact component={Doctors} />
      <PublicRoute path="/about"  exact component={About}/>
      <PublicRoute path="/contact" exact component={Contact}/>
      <PublicRoute path="/login" restricted={true} exact component={Login} />
      <PublicRoute path="/Medicine" exact component={Medicine} />
      <PublicRoute path="/RefExample" exact component={Refexample}/>
      <PrivateRoute path="/appointment" exact component={Appointment} />
      <PrivateRoute path="/listappoinment" exact component={ListAppoinment}/>
    </Switch>
    <Footer />
    </themeAction>
    </>
  );
}

export default App;
