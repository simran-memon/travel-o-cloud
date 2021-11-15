import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'
import urls from "./utils"
import {AmplifySignOut } from '@aws-amplify/ui-react';
import { Navigate, Outlet } from 'react-router-dom';



// class HomePage extends React.Component {

//   constructor(props){
//     super(props)

//   }
//     render(){
//         return(
//         <React.Fragment>
//         <div>
//         <h1>Hello Home Page</h1>
//         <AmplifySignOut /> </div>
//         </React.Fragment>
//         );
//     }

// };

const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/home" />;
}

export default PrivateRoute;