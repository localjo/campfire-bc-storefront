import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import CardBack from '../svg/card-back.inline.svg';
import KindlingCard from '../svg/kindling-card.inline.svg';
import FlamesCard from '../svg/flames-card.inline.svg';
import SparksCard from '../svg/sparks-card.inline.svg';
import EmbersCard from '../svg/embers-card.inline.svg';
import ContentTop from '../svg/content-top-wide.inline.svg';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ mainpitch, intro, bannerOffset }) => (
  <>
    <ParallaxLayer offset={bannerOffset} speed={0}>
      {/* Cover background */}
      <div className="section is-cover" style={{ minHeight: '3000px' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset - 0.05} speed={0}>
      <ContentTop style={{ marginBottom: '-10px' }} />
      <div className="section is-cover">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="container has-text-centered is-hidden-very-short">
              <h1 className="title is-spaced is-3">{mainpitch.title}</h1>
              <p className="subtitle">{mainpitch.description}</p>
            </div>
            <div className="container has-text-centered is-visible-very-short">
              <h1 className="title is-spaced is-4">{mainpitch.title}</h1>
              <p className="subtitle">{mainpitch.shortdescription}</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={0.78} speed={0}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <CardBack
              className="card-svg"
              style={{ transform: 'rotate(-1deg)' }}
            />
          </div>
          <div className="column is-5 has-text-centered-touch is-hidden-short">
            <p className="subtitle">{intro.blurbs[4].text}</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0.78} speed={0.05}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <CardBack
              className="card-svg"
              style={{ transform: 'rotate(4deg)' }}
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0.825} speed={0.05}>
      <div className="is-offset-6 column is-5 has-text-centered">
        <Link className="btn" to="/products">
          Get a Copy!
        </Link>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={1.15} speed={0}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <CardBack
              className="card-svg"
              style={{ transform: 'rotate(-4deg)' }}
            />
          </div>
          <div className="column is-5 has-text-centered-touch is-hidden-short">
            <h2 className="title is-4">{intro.blurbs[0].title}</h2>
            <p className="subtitle">{intro.blurbs[0].text}</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1.19} speed={0.05}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <KindlingCard
              className="card-svg"
              style={{
                transform: 'rotate(2deg)',
              }}
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={1.52} speed={0}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <CardBack
              className="card-svg"
              style={{ transform: 'rotate(4deg)' }}
            />
          </div>
          <div className="column is-5 has-text-centered-touch is-hidden-short">
            <h2 className="title is-4">{intro.blurbs[1].title}</h2>
            <p className="subtitle">{intro.blurbs[1].text}</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1.58} speed={0.05}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <FlamesCard
              className="card-svg"
              style={{ transform: 'rotate(-2deg)' }}
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={1.91} speed={0}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <CardBack
              className="card-svg"
              style={{ transform: 'rotate(-4deg)' }}
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1.98} speed={0.05}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <SparksCard
              className="card-svg"
              style={{ transform: 'rotate(2deg)' }}
            />
          </div>
          <div className="column is-5 has-text-centered-touch is-hidden-short">
            <h2 className="title is-4">{intro.blurbs[2].title}</h2>
            <p className="subtitle">{intro.blurbs[2].text}</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={2.28} speed={0}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <CardBack
              className="card-svg"
              style={{ transform: 'rotate(4deg)' }}
            />
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={2.38} speed={0.05}>
      <div className="section">
        <div className="columns is-vcentered">
          <div className="column is-5 is-offset-1">
            <EmbersCard
              className="card-svg"
              style={{ transform: 'rotate(-2deg)' }}
            />
          </div>
          <div className="column is-5 has-text-centered-touch is-hidden-short">
            <h2 className="title is-4">{intro.blurbs[3].title}</h2>
            <p className="subtitle">{intro.blurbs[3].text}</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={2.8} speed={0}>
      <div className="column is-12 has-text-centered">
        <Link className="btn" to="/products">
          Get a Copy!
        </Link>
      </div>
    </ParallaxLayer>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  bigimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  post: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        bigimage={frontmatter.bigimage}
        description={frontmatter.description}
        intro={frontmatter.intro}
        post={data.allMarkdownRemark.edges[0].node}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        mainpitch {
          title
          description
          shortdescription
        }
        bigimage {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          alt
        }
        intro {
          blurbs {
            title
            text
          }
        }
      }
    }
    allMarkdownRemark(
      sort: {
        order: DESC
        fields: [frontmatter___featuredpost, frontmatter___date]
      }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
