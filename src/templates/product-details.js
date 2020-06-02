import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { ParallaxLayer } from 'rspjs';
import { Link } from 'gatsby';

import ContentTop from '../svg/content-top-wide.inline.svg';
import AddToCartButton from '../components/bigcommerce/AddToCartButton';
import ProductPrices from '../components/bigcommerce/ProductPrices';
import Layout from '../components/Layout';

const ProductDetailTemplate = ({
  bannerOffset,
  data: {
    allBigCommerceProducts: {
      nodes: [
        {
          name,
          id,
          bigcommerce_id,
          sku,
          price,
          calculated_price,
          retail_price,
          sale_price,
          map_price,
          description,
          weight,
          variants,
          images,
        },
      ],
    },
  },
}) => {
  const [selectedImage, updateSelectedImage] = useState(
    images.length && images[0].url_standard
  );

  const product = {
    price,
    calculated_price,
    retail_price,
    sale_price,
    map_price,
    bigcommerce_id,
  };
  return (
    <>
      <ParallaxLayer offset={bannerOffset - 0.05} speed={0}>
        {/* Cover background */}
        <ContentTop style={{ marginBottom: '-10px' }} />
        <div className="section is-cover" style={{ minHeight: '3000px' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={bannerOffset} speed={0}>
        <div className="content">
          <section className="section">
            <div className="bc-product-single">
              <section className="bc-product-single__top">
                <div className="bc-product__gallery">
                  <img
                    src={
                      (selectedImage && selectedImage) ||
                      '/img/default-bc-product.png'
                    }
                    alt={name}
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <div className="bc-product-single__meta">
                  <h1 className="bc-product__title">{name}</h1>

                  <ProductPrices product={product} />

                  <div
                    className="bc-product__description"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>

                  <AddToCartButton
                    productId={bigcommerce_id}
                    variantId={variants[0].id}
                  >
                    Add to Bag
                  </AddToCartButton>
                </div>
              </section>
            </div>
            <div className="bc-product-single">
              <Link to={`/products`}>See other products</Link>
            </div>
          </section>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ({ data }) => {
  return (
    <Layout>
      <ProductDetailTemplate data={data} />
    </Layout>
  );
};

export const query = graphql`
  query($productId: String!) {
    allBigCommerceProducts(filter: { id: { eq: $productId } }) {
      nodes {
        id
        bigcommerce_id
        name
        sku
        price
        calculated_price
        retail_price
        sale_price
        map_price
        description
        weight
        images {
          url_standard
          url_thumbnail
        }
        variants {
          product_id
          id
          sku
        }
      }
    }
  }
`;
