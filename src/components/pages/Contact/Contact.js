import React, { Fragment } from 'react';
import Form from './Sections/Form';
import Info from './Sections/Info';
import Tagline from './Sections/Tagline';

export default function Contact() {
  return (
    <Fragment>
      <Form />
      <Info />
      <Tagline />
    </Fragment>
  );
}
