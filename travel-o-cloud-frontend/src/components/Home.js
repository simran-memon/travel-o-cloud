import React from 'react';
import {AmplifySignOut } from '@aws-amplify/ui-react';
import Button from 'react-bootstrap/Button';
import ImageUpload from './ImageUpload';
import ImageSearch from './ImageSearch';
import { Card, Container,ButtonGroup,Row} from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

var em =''
class Home extends React.Component {

   constructor(props){
     super(props)

     this.state={
         userEmail :'',
         showImageUpload: false,
         showImageSearch: false,
         showHotelSearch: false,
         showSageMaker: false,
     }
   }

   componentDidMount(props){
    console.log("In Home page")
    var useremail = ''

    Auth.currentAuthenticatedUser().then(function(result){
        console.log("In app.js")
        console.log(result.attributes.email)
        em = result.attributes.email
         console.log("set to em")
         console.log(em)
      });

     console.log("Outside")
     console.log(em)
     

   }

   imageUpload=(event)=>{
    event.preventDefault();
        this.setState({
      
        showImageUpload: true,
        showImageSearch: false,
        showHotelSearch: false,
        showSageMaker: false,
        })
    }
    imageSearch=(event)=>{
        event.preventDefault();
            this.setState({
          
            showImageUpload: false,
            showImageSearch: true,
            showHotelSearch: false,
            showSageMaker: false,
        })
    }
    hotelSearch=(event)=>{
        event.preventDefault();
            this.setState({
          
            showImageUpload: false,
            showImageSearch: false,
            showHotelSearch: true,
            showSageMaker: false,
            })
        }
    sageMaker=(event)=>{
        event.preventDefault();
            this.setState({
              
            showImageUpload: false,
            showImageSearch: false,
            showHotelSearch: false,
            showSageMaker: true,
        })
    }
    
    render(){
         return(
         <React.Fragment>
         <Container fluid>
        <Row>
    
         <div className="col d-flex justify-content-center">
         <h4>Hello {em}</h4>
         </div>
         </Row>
         <Row>
         <div className="col d-flex justify-content-center">
         <ButtonGroup>
          <Button variant="dark" onClick={this.imageUpload}>Upload Picture Page</Button>
          &nbsp;&nbsp;
          <Button variant="dark" onClick={this.imageSearch}>Search Pictue Page</Button>
          &nbsp;&nbsp;
          <Button variant="dark" onClick={this.hotelSearch}>Search for a Hotel</Button>{' '}
          &nbsp;&nbsp;
          <Button variant="dark" onClick={this.sageMaker}>Sage Maker</Button>{' '}
          &nbsp;
          </ButtonGroup>
          <AmplifySignOut/>
          </div>
          </Row>
          <Row>
              &nbsp;
      {this.state.showImageUpload=== true? (<ImageUpload userEmailProp={em}></ImageUpload>):(<div></div>)}
      {this.state.showImageSearch=== true? (<ImageSearch userEmailProp={em}></ImageSearch>):(<div></div>)}
      {this.state.showHotelSearch=== true? (<h1>Hotel search page</h1>):(<div></div>)}
      {this.state.showSageMaker=== true? (<h1>Sage maker</h1>):(<div></div>)}
        </Row>
        </Container>
        </React.Fragment>
        );
     }
 };

 export default Home;