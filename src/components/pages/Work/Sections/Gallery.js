import React, { Fragment } from 'react';
import item1 from '../../../../assets/imgs/items/item1.png';
import item2 from '../../../../assets/imgs/items/item2.png';
import item3 from '../../../../assets/imgs/items/item3.png';
import item4 from '../../../../assets/imgs/items/item4.png';
import item5 from '../../../../assets/imgs/items/item5.png';
import item6 from '../../../../assets/imgs/items/item6.jpeg';
import item7 from '../../../../assets/imgs/items/item7.png';
import item8 from '../../../../assets/imgs/items/item8.jpeg';
import item9 from '../../../../assets/imgs/items/item9.png';

export default function Gallery() {
  return (
    <Fragment>
      <section id='work-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>My Work</h2>
          <div className='bottom-line'></div>
          <p className='lead'>Check out some of my projects</p>
          <div className='items'>
            <div className='item'>
              <div className='item-img'>
                <img src={item1} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Design</p>
                  <h2 className='item-text-title'>Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item2} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>UI/UX</p>
                  <h2 className='item-text-title'>World Experience</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item3} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Photography & Design</p>
                  <h2 className='item-text-title'>Vanishing</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item4} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Design</p>
                  <h2 className='item-text-title'>Gap INC</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item5} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Mobile UI Deign</p>
                  <h2 className='item-text-title'>Face The Experience</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item6} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Design Concept</p>
                  <h2 className='item-text-title'>Bezier Curves</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item7} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Photography</p>
                  <h2 className='item-text-title'>Dock Ponder</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item8} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Web Applications/p></p>
                  <h2 className='item-text-title'>Restaurant App</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-img'>
                <img src={item9} alt='' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Social Newwork Concept</p>
                  <h2 className='item-text-title'>FreindFeed</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
