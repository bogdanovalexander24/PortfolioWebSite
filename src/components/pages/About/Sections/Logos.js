import React, { Fragment } from 'react';
import logoEnvato from '../../../../assets/imgs/about-logos/logo-envato.png';
import logoWoocommerce from '../../../../assets/imgs/about-logos/logo-woocommerce.png';
import logoMagento from '../../../../assets/imgs/about-logos/logo-magento.png';
import logoWordPress from '../../../../assets/imgs/about-logos/logo-wordpress.png';

export default function Logos() {
  return (
    <Fragment>
      <section id='about-c' className='py-4 bg-ligh'>
        <div className='container'>
          <div className='about-logos'>
            <img src={logoEnvato} alt='logo' />
            <img src={logoWoocommerce} alt='logo' />
            <img src={logoWordPress} alt='logo' />
            <img src={logoMagento} alt='logo' />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
