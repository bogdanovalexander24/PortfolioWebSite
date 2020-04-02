import React, { Fragment } from 'react';
import firstPerson from '../../../../assets/imgs/testimonials/person1.jpg';
import secondPerson from '../../../../assets/imgs/testimonials/person2.jpg';
import thirdPerson from '../../../../assets/imgs/testimonials/person3.jpg';
import fourthPerson from '../../../../assets/imgs/testimonials/person4.jpg';

export default function Testimonials() {
  return (
    <Fragment>
      <section id='about-d' className='py-4'>
        <div className='container'>
          <h2 className='section-title'>Testimonials</h2>
          <div className='bottom-line'></div>
          <p className='lead text-center'>Take a look what my clients say...</p>
          <div className='testimonials'>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                eaque inventore maiores earum quibusdam et, similique explicabo
                ut adipisci temporibus non placeat sequi atque in accusantium
                quas minima hic. Corporis?
              </p>
              <ul>
                <li>
                  <img src={firstPerson} alt='' />
                </li>
                <li>Sam Smith, New Yourk</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                eaque inventore maiores earum quibusdam et, similique explicabo
                ut adipisci temporibus non placeat sequi atque in accusantium
                quas minima hic. Corporis?
              </p>
              <ul>
                <li>
                  <img src={secondPerson} alt='' />
                </li>
                <li>Sara Jhonson, New Yourk</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                eaque inventore maiores earum quibusdam et, similique explicabo
                ut adipisci temporibus non placeat sequi atque in accusantium
                quas minima hic. Corporis?
              </p>
              <ul>
                <li>
                  <img src={thirdPerson} alt='' />
                </li>
                <li>Jill Jhonson, London</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                eaque inventore maiores earum quibusdam et, similique explicabo
                ut adipisci temporibus non placeat sequi atque in accusantium
                quas minima hic. Corporis?
              </p>
              <ul>
                <li>
                  <img src={fourthPerson} alt='' />
                </li>
                <li>Steve Thompsons, Boston</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
