import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import CardBack from '../svg/card-back.inline.svg';
import KindlingCard from '../svg/kindling-card.inline.svg';
import FlamesCard from '../svg/flames-card.inline.svg';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ mainpitch, intro, bannerOffset }) => (
  <>
    <ParallaxLayer offset={bannerOffset + 0.05} speed={1}>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="container has-text-centered">
            <h4 className="title is-spaced is-3">{mainpitch.title}</h4>
            <p className="subtitle">{mainpitch.description}</p>
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset + 0.21} speed={0.8}>
      <div className="section">
        <div className="columns">
          <div className="column is-4 is-offset-1">
            <CardBack style={{ transform: 'rotate(-6deg)' }} />
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset + 0.25} speed={1}>
      <div className="columns">
        <div className="column is-one-third is-offset-one-fifth">
          <KindlingCard style={{ transform: 'rotate(1deg)' }} />
        </div>
        <div className="column">
          <h5 className="title is-spaced is-4">{intro.blurbs[0].title}</h5>
          <p className="subtitle">{intro.blurbs[0].text}</p>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.8}>
      <div className="section">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-one-third">
            <CardBack style={{ transform: 'rotate(6deg)' }} />
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset + 0.45} speed={1.2}>
      <div className="columns">
        <div className="column">
          <h5 className="title is-spaced is-4">{intro.blurbs[1].title}</h5>
          <p className="subtitle">{intro.blurbs[1].text}</p>
        </div>

        <div className="column is-one-third is-offset-one-fifth">
          <FlamesCard />
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={1.2}>
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
