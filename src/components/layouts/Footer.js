import React, { Fragment } from 'react';

export default function Footer() {
  return (
    <Fragment>
      <footer id='main-footer'>
        <div className='footer-content container'>
          <p>Copyright &copy; 2020. All Rights Reserved</p>
          <div className='social'>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-linkedin'></i>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
