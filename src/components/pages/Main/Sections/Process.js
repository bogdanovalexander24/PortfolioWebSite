import React, { Fragment } from 'react';

export default function Process() {
  return (
    <Fragment>
      <section id='home-c' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>My Creative Process</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            All of my UI/UX and design projects are based off of a parcticed
            formula to get the result that I am lookng for
          </p>
          <div className='process'>
            <div>
              <i className='fas fa-file-alt fa-4x process-icon my-2'>
                <div className='process-step'>1</div>
              </i>
              <h3>Discuss The Project</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                consequuntur voluptatem rem commodi vel enim?
              </p>
            </div>
            <div>
              <i className='fas fa-desktop fa-4x process-icon my-2'>
                <div className='process-step'>2</div>
              </i>
              <h3>Brainstorming ^ Concept</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                consequuntur voluptatem rem commodi vel enim?
              </p>
            </div>
            <div>
              <i className='fas fa-object-ungroup fa-4x process-icon my-2'>
                <div className='process-step'>3</div>
              </i>
              <h3>UI/UX Plan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                consequuntur voluptatem rem commodi vel enim?
              </p>
            </div>
            <div>
              <i className='fas fa-thumbs-up fa-4x process-icon my-2'>
                <div className='process-step'>4</div>
              </i>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                consequuntur voluptatem rem commodi vel enim?
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
