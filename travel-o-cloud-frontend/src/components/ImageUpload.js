import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'
import urls from "./utils"

class ImageUpload extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        selectedFile: null,
        selectedFiletoDisplay: null,
        selectedFileName:'',
        showMessage:false,
        showPreview:false,
        showGetTagButton:true,
        showShareButton:false,
        label0: '',
        label1: '',
        label2: '',
        label3: '',
        label4: '',
        username: 'archana',
        trip:'sanjose'
        
    }
    this.handleChange = this.handleChange.bind(this)
  }

  getLabels = (event) => {
    event.preventDefault();
    //console.log("trying to get tags for "+this.state.selectedFile.name);
    
    axios.post(urls.backendURL+'/getLabels', {
         filename:this.state.selectedFile.name,
         //filename:'leafbird.jpg',
         username:this.state.username,
         trip:this.state.trip
    }).then(response => response.data).then((data) => {
      console.log(data.response)
        this.setState({
          label0 : '#'+data.response.label0,
          label1 : '#'+data.response.label1,
          label2 : '#'+data.response.label2,
          label3 : '#'+data.response.label3,
          label4 : '#'+data.response.label4
        })
    });
  }

  onFileUpload = (event) => {
  
    event.preventDefault();
    const formData = new FormData();
   

    if(this.state.selectedFile==null){
      alert("Please select an image")
      return
    }

    formData.append('file', this.state.selectedFile);
    formData.append('fileName', this.state.selectedFile.name)
    formData.append('username', this.state.username);
    formData.append('trip', this.state.trip)
    
    axios.post(urls.backendURL+'/uploadPicture', formData, {
       headers: {
         'Content-Type': 'multipart/form-data'
         //'Content-Type':'image/jpeg'
       }
    }).then(response => response.data).then((data) => {
        console.log(data)
    });
   
    
    this.setState({
        showMessage:true,
        showPreview:false,
        showGetTagButton:true,
        
    })

    console.log("after uploading")
    console.log(this.state.selectedFile.name)
  };//end of onFileUpload
  

    handleChange(event) {
      event.preventDefault();
      this.setState({
          selectedFiletoDisplay: URL.createObjectURL(event.target.files[0]),
          selectedFile: event.target.files[0],
          showMessage: false,
          showPreview:true
      })
    };// end of handleChange

    render() {
    
    const fileName = this.state.selectedFileName;

    return (
      <Container fluid>

          <Row>
          <Col>
          <Row>
          <Card style={{ width: '40rem' }}><Card.Body> 
          <div className="col d-flex justify-content-center">
            <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Select the image that you want to upload</Form.Label>
                  <Form.Control type="file" onChange={this.handleChange}/>
            </Form.Group>
            <div>&nbsp;&nbsp;</div>
            </div>
           <div className="col d-flex justify-content-center">
            <Button  onClick={this.onFileUpload} variant="dark">Save to Cloud</Button> 
            </div>
          </Card.Body></Card></Row>
          <Row>
          <Card>
            <Card.Body>
            
            <Row>
            <div className="col d-flex justify-content-center">
            {this.state.showGetTagButton==true?
            (<Button  onClick={this.getLabels} variant="dark">Whats in it?</Button>):
            (<div></div>)}
            </div>
            </Row>
            <Row>
            <div className="col d-flex justify-content-center">
            <Container>
            <Row><h5>{this.state.label0}</h5> </Row>
            <Row><h5>{this.state.label1}</h5> </Row>
            <Row><h5>{this.state.label2}</h5> </Row>
            <Row><h5>{this.state.label3}</h5> </Row>
            <Row><h5>{this.state.label4}</h5> </Row>
            </Container>
            </div>
            </Row>
            </Card.Body>
          </Card>
          </Row>
          </Col>
          <Col>
          <div className="col d-flex justify-content-center">
              {this.state.showMessage===true?
              (<div>
                <h4>{this.state.selectedFile.name}</h4>
                <img className="resize" src={this.state.selectedFiletoDisplay}/>
                </div>):
              (<div></div>)}
              {this.state.showPreview===true?
              (<img className="resize" src={this.state.selectedFiletoDisplay}/>):
              (<div></div>)}
              {/* <img className="resize" src={fileName}/> */}
          </div>
          </Col>
          </Row>
        </Container>
    );
  }
}

export default ImageUpload;