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


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/departments" exact component={Department}/>
      <Route path="/doctors" exact component={Doctors} />
      <Route path="/about"  exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
