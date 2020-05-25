import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import ContentTop from '../../svg/content-top-wide.inline.svg';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const BlogPageTemplate = ({ bannerOffset }) => (
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
            <BlogRoll />
          </div>
        </div>
      </section>
    </ParallaxLayer>
  </>
);

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogPageTemplate />
      </Layout>
    );
  }
}
