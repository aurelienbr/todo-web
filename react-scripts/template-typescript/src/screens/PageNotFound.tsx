import React from 'react';
import { Card, CardBody } from 'reactstrap';

const PageNotFound = () => (
  <div className="h-100 w-100 row align-items-center justify-content-center">
    <Card>
      <CardBody>
        <h1>404</h1>
        <p>{"Cette page n'existe pas !"}</p>
      </CardBody>
    </Card>
  </div>
);

export default PageNotFound;
