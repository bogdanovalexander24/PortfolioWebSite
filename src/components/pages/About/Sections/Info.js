import React, { Fragment } from 'react';
import about from '../../../../assets/imgs/about.jpg';

export default function Info() {
  return (
    <Fragment>
      <section id='about-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>About Me</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            Let me tell you a little about myself and what I do...
          </p>
          <div className='about-info'>
            <img src={about} alt='MyPhoto' className='bio-img' />
            <div className='bio bg-light'>
              <h4>Your Project is In Safe Hands</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                nam perspiciatis eos enim. Molestias qui deserunt quod quia
                dicta, eligendi doloribus officia esse libero illo, distinctio
                dolor exercitationem reprehenderit aut quam in laborum molestiae
                voluptatem magnam obcaecati eveniet laudantium? Provident.
              </p>
            </div>
            <div className='award-1'>
              <i className='fas fa-award fa-3x'></i>
              <h3>Award One</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                eaque!
              </p>
            </div>
            <div className='award-2'>
              <i className='fas fa-award fa-3x'></i>
              <h3>Award Two</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                eaque!
              </p>
            </div>
            <div className='award-3'>
              <i className='fas fa-award fa-3x'></i>
              <h3>Award Three</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                eaque!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
