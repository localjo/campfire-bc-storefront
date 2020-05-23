import React from 'react';

import Layout from '../../components/Layout';
import Cart from '../../components/bigcommerce/Cart';

import { ParallaxLayer } from '@react-spring/parallax';
import ContentTop from '../../svg/content-top-wide.inline.svg';

const CartPageTemplate = ({ bannerOffset }) => (
  <>
    <ParallaxLayer offset={bannerOffset - 0.05} speed={0}>
      {/* Cover background */}
      <ContentTop style={{ marginBottom: '-10px' }} />
      <div className="section" style={{ minHeight: '3000px' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset} speed={0}>
      <div className="has-text-centered margin-top-0">
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow:
              '0.5rem 0 0 rgba(0, 0, 0, 1), -0.5rem 0 0 rgba(0, 0, 0, 1)',
            backgroundColor: 'rgba(0, 0, 0, 1)',
            color: 'white',
            padding: '1rem',
          }}
        >
          Your Bag
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <Cart cartType="full" />
          </div>
        </div>
      </section>
    </ParallaxLayer>
  </>
);

export default class CartIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <CartPageTemplate />
      </Layout>
    );
  }
}
