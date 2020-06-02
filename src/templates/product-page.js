import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'rspjs';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductCard from '../components/bigcommerce/ProductCard';
import ContentTop from '../svg/content-top-wide.inline.svg';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  products,
  bannerOffset,
}) => (
  <>
    <ParallaxLayer offset={bannerOffset - 0.05} speed={0}>
      {/* Cover background */}
      <ContentTop style={{ marginBottom: '-10px' }} />
      <div className="section is-cover" style={{ minHeight: '3000px' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={bannerOffset} speed={0}>
      <section className="section">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </ParallaxLayer>
  </>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  products: PropTypes.array,
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const products = data.allBigCommerceProducts.nodes;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        products={products}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allBigCommerceProducts: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    allBigCommerceProducts {
      nodes {
        id
        brand_id
        name
        sku
        price
        calculated_price
        retail_price
        sale_price
        description
        map_price
        bigcommerce_id
        custom_url {
          url
        }
        images {
          url_thumbnail
          url_standard
        }
        variants {
          product_id
          id
          sku
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
