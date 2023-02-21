import React from "react";
import ReactDOM from 'react-dom';
import Comingsoon from "./ComingSoon/Comingsoon";
import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
let App = createBrowserRouter([
    { 
        path : '/',
        element : <Home/>
    },
    {
        path : '/comingsoon',
        element: <Comingsoon/>
    },
]);

export default App;