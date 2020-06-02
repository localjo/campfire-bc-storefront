import React from 'react';
import Layout from '../../components/Layout';
import Cart from '../../components/bigcommerce/Cart';
import ContentTop from '../../svg/content-top-wide.inline.svg';

const CartPageTemplate = () => (
  <>
    <ContentTop
      style={{ marginBottom: '-10px', zIndex: 1, position: 'relative' }}
    />
    <section className="section is-cover" style={{ minHeight: '90vh' }}>
      <div className="container">
        <div className="content">
          <Cart cartType="full" />
        </div>
      </div>
    </section>
  </>
);

export default class CartIndexPage extends React.Component {
  render() {
    return (
      <Layout isStatic={true}>
        <CartPageTemplate />
      </Layout>
    );
  }
}
