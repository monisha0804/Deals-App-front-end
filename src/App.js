import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from './pages/Payment';
import PaymentPage from './pages/PaymentPage';


const App = () => {
    return (
       <Router>
           <Switch>
               <Route exact path = "/">
                   <Home/>
               </Route>
               <Route path = "/products">
                   <ProductList/>
               </Route>
               <Route exact path = "/login">
                   <Login/>
               </Route>
               <Route exact path = "/register">
                   <Register/>
               </Route>
               <Route exact path = "/orders">
                   <Cart/>
               </Route>
               <Route exact path = "/product">
                   <Product/>
               </Route>
               <Route exact path = "/payment">
                   <Payment/>
               </Route>

               <Route exact path = "/paymentpage">
                   <PaymentPage />
               </Route>
               <Route path="/join" component={Register}>                 
               </Route>
           </Switch>
       </Router>


    ) 
    
}

export default App;
