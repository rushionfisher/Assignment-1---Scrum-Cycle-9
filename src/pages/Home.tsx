import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scrum Cycle 9: Assignment 1 - Ionic</IonTitle>
          <IonButtons slot="end">
          <Link to="/About">
            <IonButton>
              About
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
      Welcome to my Home Page </IonContent>
    </IonPage>
  );
};

export default Home;