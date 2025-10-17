import React from 'react';
import Home from "./home/home";
import Courses from "./attorney/courses";
import Contact from "./conatct/contact";
import Abou1 from "./About/abou1.jsx";
import Consult from "./component/consult.jsx";
import {Route,Routes} from "react-router-dom"
import Signup from "./component/signup";

import Goodman from "./attorney/goodman.jsx";
import Matt from "./attorney/matt.jsx";
import Harvey from "./attorney/harvey.jsx";
import Marshall from "./attorney/marshall.jsx";
import Rudy from "./attorney/rudy.jsx";
import Coachran from "./attorney/coachran.jsx";
import Richard from "./attorney/richard.jsx";

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/attorney" element ={<Courses/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/abou1" element ={<Abou1/>}/>

        <Route path="/attorney/goodman/" element={<Goodman />} />
        <Route path="/attorney/matt" element={<Matt />} />
        <Route path="/attorney/harvey" element={<Harvey />} />
        <Route path="/attorney/marshall" element={<Marshall />} />
        <Route path="/attorney/rudy" element={<Rudy />} />
        <Route path="/attorney/rudy" element={<Rudy />} />
        <Route path="/attorney/cochran" element={<Coachran />} />
        <Route path="/attorney/richard" element={<Richard />} />

      
      </Routes>
      </div>
    </>
  )
}

export default App;

