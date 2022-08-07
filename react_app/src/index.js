import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import Head from './Shop/Head';
import AllProduct from './Shop/AllProduct';
import Product from './Shop/Product';
import reportWebVitals from './reportWebVitals';
import Login from './Shop/Login';
import SignOut from './Shop/SignOut';
import Detaill from './Shop/Detaill';
import Registration from './Shop/Registration';
import Delete from './Shop/Delete';
import ProductEdit from './Shop/ProductEdit';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Product />
    <AllProduct /> */}

    <Router>
      <Head/>
       <Routes>
      {/* <Route exact path='/' element={<Home/>} /> */}
         <Route exact path='/product' element={ <Product />} />
        <Route exact path='/allProduct' element={ <AllProduct />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signout' element={<SignOut/>} />
        {/* <Route exact path='/detaill' element={<Detaill/>} /> */}
        <Route exact path='/detaill:id' element={<Detaill />} />
        <Route exact path='/productedit:id' element={<ProductEdit />} />
        
        <Route exact path='/delete:id' element={<Delete />} />
        <Route exact path='/registration' element={<Registration />} />
        
{/* //         <Route exact path='/product:id' element={<ProductDetail/>} />
//         <Route exact path='/color' element={<ColorState/>} />
//         <Route exact path='/effect' element={<EffectHookCheck/>} />
//         <Route exact path='/posts' element={<AllPosts/>} />
//  <Route exact path='/login' element={<Login/>} />
//         <Route exact path='/allproducts' element={<APIProducts/>} /> */}
      </Routes>
      {/* <Foot/> */}
    </Router>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import Hello from './Components/Hello';
// import Home from './Components/Home';
// import Profile from './Components/Profile';
// import Contact from './Components/Contact';
// import Foot from "./Components/Foot";
// import Head from './Components/Head';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import ProductDetail from './Components/ProductDetail';
// import ColorState from './Components/ColorState';
// import EffectHookCheck from './Components/EffectHookCheck';
// import AllPosts from './Components/AllPosts';

// import Login from './Components/Login';
// import APIProducts from './Components/APIProducts';
// import Product from './Components/Product';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <Router>
//       <Head/>
//       <Routes>
//         <Route exact path='/' element={<Home/>} />
//         <Route exact path='/profile' element={<Profile/>} />
//         <Route exact path='/contact' element={<Contact/>} />
//         <Route exact path='/product:id' element={<ProductDetail/>} />
//         <Route exact path='/color' element={<ColorState/>} />
//         <Route exact path='/effect' element={<EffectHookCheck/>} />
//         <Route exact path='/posts' element={<AllPosts/>} />
//         <Route exact path='/login' element={<Login/>} />
//         <Route exact path='/allproducts' element={<APIProducts/>} />
//       </Routes>
//       <Foot/>
//     </Router>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
