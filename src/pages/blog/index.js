import React from 'react';

import ContentTop from '../../svg/content-top-wide.inline.svg';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const BlogPageTemplate = () => (
  <>
    <ContentTop
      style={{ marginBottom: '-10px', zIndex: 1, position: 'relative' }}
    />
    <section className="section is-cover" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </>
);

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout isStatic={true} title={'Blog'}>
        <BlogPageTemplate />
      </Layout>
    );
  }
}
