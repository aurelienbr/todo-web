import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => (
  <div className="h-100 w-100 row align-items-center justify-content-center">
    <Spinner color="primary" />
  </div>
);

export default Loading;
