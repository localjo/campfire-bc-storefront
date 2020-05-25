import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { ParallaxLayer } from '@react-spring/parallax';

import ContentTop from '../svg/content-top-wide.inline.svg';

class TagsTemplate extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <span className="is-size-5">{post.node.frontmatter.title}</span>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;
    return (
      <>
        <ParallaxLayer offset={this.props.bannerOffset - 0.05} speed={0}>
          {/* Cover background */}
          <ContentTop style={{ marginBottom: '-10px' }} />
          <div
            className="section is-cover"
            style={{ minHeight: '3000px' }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={this.props.bannerOffset} speed={0}>
          <section className="section">
            <Helmet title={`${tag} | ${title}`} />
            <div className="container content">
              <div className="columns">
                <div
                  className="column is-10 is-offset-1"
                  style={{ marginBottom: '6rem' }}
                >
                  <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                  <ul className="taglist">{postLinks}</ul>
                  <p>
                    <Link to="/tags/">Browse all tags</Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </>
    );
  }
}
class TagRoute extends React.Component {
  render() {
    return (
      <Layout>
        <TagsTemplate
          data={this.props.data}
          pageContext={this.props.pageContext}
        />
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
