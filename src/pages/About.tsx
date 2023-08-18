import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import profilepic from '../images/Rush.jpg'; // Import the image
import './About.css';

const Product: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Scrum Cycle 9: Assignment 1 - Ionic</IonTitle>
            <IonButtons slot="end">
            <Link to="/Home">
              <IonButton>
                Home
              </IonButton>
            </Link>
            <Link to="/Product">
              <IonButton>
                Products
              </IonButton>
            </Link>
          </IonButtons>
  
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="profile">
            <img src={profilepic} alt="About Image" className="centered-image" />
            <div className="name">Rushion Fisher</div>
            <div className="team">The Turing Team</div>
            <div className="summary">
            My name is Rushion Fisher, a graduate of the University of the West Indies, with a Bachelor of Science in Computer Science and Economics. I decided to pursue a career in this field
            because, I always had a strong interest in technology and software. My other interests include sports, music and writing literature.
            I am a movie lover, spending a lot of time in the cinema. My experience in the field has led me to develop
            several projects, the most notable of which are the renovation of the UWI Placement and Careers Website and a
            inventory management system. In the field, I have a wide variety of interests, from software and web development to requirements engineering and database administration. However,
            my main interest in  the computer science industry  lie mostly in data science and business analytics, as well as 
            artificial intelligence. I believe these tools are  the key to further advancements in technological development.
            </div>
        </div>
        </IonContent>
      </IonPage>
    );
  };

export default Product;