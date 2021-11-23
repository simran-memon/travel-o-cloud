# CMPE 281: Project2--Travel-O-Cloud

* University Name: [San Jose State University](http://www.sjsu.edu/)
* Course: [Cloud Technologies](https://catalog.sjsu.edu/preview_course_nopop.php?catoid=12&coid=58375)
* Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)
* Students: [Archana Miyar Kamath](https://www.linkedin.com/in/archana-kamath-018/), [Simran Tanvir Memon](https://www.linkedin.com/in/simran-m-a872a91a1/), [Mounica Kamireddy](https://www.linkedin.com/in/mounica-kamireddy/), [Limeka Dabre](https://www.linkedin.com/in/limekadabre/)

## Project Introduction

Travel-O-Cloud is an one stop application targeted to help users plan a trip or help others to plan a trip by securely login to the application using AWS Login or by using social login providers like Google or Facebook. Users will be able to check weather in a location and book a hotel there using a Chatbot. Users will be able to upload the pictures once they visited any place and store it using our application, share the pictures on facebook and retrieve the pictures from their trip to obtain highlights of locations.

## Demo [URL](https://travelocloud.com/)

## Architecture Diagram

<img width="887" alt="Prjt2_Arch" src="https://user-images.githubusercontent.com/27188674/143139304-d725b428-bf7d-4d88-93dd-cf6b916049a3.png">

## Requirements to run the project locally:

* A free tier AWS account with IAM user access.
* AWS Components setup as mentioned in the following section.
* Softwares Required: Node JS, React JS
* Clone this git repository using ```git clone https://github.com/archana-kamath/travel-o-cloud.git```
* Install backend dependencies at ```travel-o-cloud-backend/``` using ```npm install``` and add a ```.env``` file with IAM user Access ID and Secret key.
* Run ```node app.js``` and server starts running at default port.
* Install frontend dependencies at ```travel-o-cloud-frontend``` using ```npm install```
* Run ```npm start``` and now the application starts running at ```localhost:3000```



