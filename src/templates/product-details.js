import React, { useState } from 'react';
import { graphql } from 'gatsby';
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
      <ContentTop
        style={{ marginBottom: '-10px', zIndex: 1, position: 'relative' }}
      />
      <div className="content">
        <section className="section is-cover" style={{ minHeight: '90vh' }}>
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
            <Link to={`/shop`}>Back to shop</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default (props) => {
  const { data } = props;
  const product = data.allBigCommerceProducts.nodes[0];
  return (
    <Layout
      isStatic={true}
      {...props}
      title={product.name}
      description={product.description.replace(/<[^>]+>/g, '')}
    >
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
