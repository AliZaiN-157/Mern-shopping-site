import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// screens
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import CartScreen from './Screens/CartScreen/CartScreen';
import ProductScreen from './Screens/ProductScreen/ProductScreen';

// components
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


function App() {

  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}

    </Router>
  );
}

export default App;
