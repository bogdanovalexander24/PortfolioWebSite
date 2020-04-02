import React, { Fragment } from 'react';

export default function Specialize() {
  return (
    <Fragment>
      <section id='home-a' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>I Specialize In</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            Photography as well as creating digital masterpieces abd UI/UX
            layouts for websites and mobile applications
          </p>
          <div className='specials'>
            <div>
              <i className='fas fa-file-alt fa-2x'></i>
              <h3>Concepting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptatibus reiciendis nostrum alias quae in sapiente
                autem accusantium adipisci consequatur?
              </p>
            </div>
            <div>
              <i className='fas fa-desktop fa-2x'></i>
              <h3>UI/UX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptatibus reiciendis nostrum alias quae in sapiente
                autem accusantium adipisci consequatur?
              </p>
            </div>
            <div>
              <i className='fas fa-object-ungroup fa-2x'></i>
              <h3>Visual Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptatibus reiciendis nostrum alias quae in sapiente
                autem accusantium adipisci consequatur?
              </p>
            </div>
            <div>
              <i className='fas fa-thumbs-up fa-2x'></i>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptatibus reiciendis nostrum alias quae in sapiente
                autem accusantium adipisci consequatur?
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
