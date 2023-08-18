import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

import './Product.css';

const productData = [
   {
     id: 1,
     title: 'Mercedes Benz G63',
     image: 'src/images/benz.jpg',
     price: 1000000.99,
     description: 'This is a Mercedes Benz.'
},
{
     id: 2,
     title: 'Playstation 5',
     image: 'src/images/ps5.jpg',
     price: 290000.99,
     description: 'This is a Playstation 5.'
},
{
     id: 3,
     title: 'A Bachelor of Science Degree',
     image: 'src/images/bsc.jpg',
     price: 0.99,
     description: 'Do you want a decent job? Here you go.'
},
{
     id: 4,
     title: 'A virtuous woman',
     image: 'src/images/girl.jpg',
     price: '100000000000000000',
     description: 'A virtuous woman is hard to find.'
}
    
  ];

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
          <Link to="/About">
            <IonButton>
              About
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
        <div className="centered-text">
            <h2>Products</h2>
        </div>
        <div className="products-list">
        {productData.map((product) => (
          <IonCard className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <IonCardHeader>
              <IonCardTitle>{product.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Product;