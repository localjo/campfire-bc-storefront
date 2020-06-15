import React from 'react';
import Layout from '../../components/Layout';

import ContentTop from '../../svg/content-top-wide.inline.svg';

const ThanksTemplate = ({ bannerOffset }) => (
  <>
    <ContentTop
      style={{ marginBottom: '-10px', zIndex: 1, position: 'relative' }}
    />
    <section className="section is-cover" style={{ minHeight: '90vh' }}>
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>
            Your message has been sent. We will respond as soon as possible.
          </p>
        </div>
      </div>
    </section>
  </>
);
export default () => (
  <Layout isStatic={true} title={'Thanks'}>
    <ThanksTemplate />
  </Layout>
);
