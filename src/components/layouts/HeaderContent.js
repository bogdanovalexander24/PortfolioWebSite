import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function HeaderContent({ handleClick }) {
  return (
    <div className='header-content'>
      <h1>
        I Am Jhon The
        <Typewriter
          options={{
            strings: ['Photographer', 'Designer', 'UI/UX Dev'],
            autoStart: true,
            loop: true
          }}
        />
      </h1>
      <p className='lead'>
        I specialize in graphic design, UI/UX and photography
      </p>
      <Link onClick={handleClick} to='/work' className='btn-light'>
        View My Work
      </Link>
    </div>
  );
}
