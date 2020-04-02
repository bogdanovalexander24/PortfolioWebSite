import React, { Fragment } from 'react';
import Info from './Sections/Info';
import ProgressBars from './Sections/ProgressBars';
import Logos from './Sections/Logos';
import Testimonials from './Sections/Testimonials';

export default function About() {
  return (
    <Fragment>
      <Info />
      <ProgressBars />
      <Logos />
      <Testimonials />
    </Fragment>
  );
}
