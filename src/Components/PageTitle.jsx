import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../assets/css/PageTitle.css'; 

const PageTitle = ({ title }) => {
  return (
    <div className="page-title-container">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <h1>{title}</h1>
      </Container>
    </div>
  );
};

export default PageTitle;
