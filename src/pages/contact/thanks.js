import React from 'react';
import Layout from '../../components/Layout';
import { ParallaxLayer } from '@react-spring/parallax';

import ContentTop from '../../svg/content-top-wide.inline.svg';

const ThanksTemplate = ({ bannerOffset }) => (
  <>
    <ParallaxLayer offset={bannerOffset - 0.05} speed={0}>
      {/* Cover background */}
      <ContentTop style={{ marginBottom: '-10px' }} />
      <div className="section is-cover" style={{ minHeight: '3000px' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset} speed={0}>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Thank you!</h1>
            <p>
              Your message has been sent. We will respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </ParallaxLayer>
  </>
);
export default () => (
  <Layout>
    <ThanksTemplate />
  </Layout>
);
