import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';

const PageNotFound = () => (
  <Container>
    <Segment>
      <Header as="h1">404</Header>
      <p>{"Cette page n'existe pas !"}</p>
    </Segment>
  </Container>
);

export default PageNotFound;
