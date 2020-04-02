import React, { Fragment } from 'react';
import Specialize from './Sections/Specialize';
import Stats from './Sections/Stats';
import Process from './Sections/Process';

export default function Main() {
  return (
    <Fragment>
      <Specialize />
      <Stats />
      <Process />
    </Fragment>
  );
}
