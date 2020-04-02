import React, { Fragment } from 'react';

export default function Info() {
  return (
    <Fragment>
      <section id='contact-b' className='text-center bg-dark py-3'>
        <div className='container'>
          <div className='contact-info'>
            <div>
              <i className='fas fa-envelope fa-2x'> </i>
              <h3>Email</h3>
              <p>jhon@something.com</p>
            </div>
            <div>
              <i className='fas fa-phone fa-2x'> </i>
              <h3>Phone</h3>
              <p>555-555-555</p>
            </div>
            <div>
              <i className='fas fa-address-card fa-2x'> </i>
              <h3>Address</h3>
              <p>50 Main st, Boston MA</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
