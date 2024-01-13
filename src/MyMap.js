import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

const MyMap = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <Container className="my-map-container">
      {/* Single row with contact info and map side by side */}
      <Row>
        <Col md={6} className="contact-info">
          <h2 className="contact-heading">Nous Contacter</h2>
          <p className="lead">
            L'agence Ksour Tour est dédiée à fournir un service excellent. Pour toute question ou assistance, veuillez nous contacter via les informations suivantes :
          </p>
          <ul className="list-unstyled">
            <li>Email : ksourtour@gmail.com</li>
            <li>Téléphone : 75863633 / 98438404</li>
            <li>Adresse : RUE MOSBAH JARBOUA, Tataouine, Tunisie</li>
          </ul>
        </Col>

        <Col md={6} className="map-container">
          <div style={{ height: '300px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyMap;
