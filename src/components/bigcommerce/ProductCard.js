import React from 'react';
import { Link } from 'gatsby';
import AddToCartButton from './AddToCartButton';
import ProductPrices from './ProductPrices';

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <div className="bc-product-single">
        <section className="bc-product-single__top">
          <div className="bc-product__gallery">
            <img
              src={
                (product.images.length && product.images[0].url_standard) ||
                '/img/default-bc-product.png'
              }
              alt={product.name}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="bc-product-single__meta">
            <Link
              to={`/products${product.custom_url.url}`}
              className="bc-product__title-link"
              title={product.name}
            >
              <h1 className="bc-product__title">{product.name}</h1>
            </Link>

            <ProductPrices product={product} />

            <div
              className="bc-product__description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>

            <AddToCartButton
              productId={product.variants[0].product_id}
              variantId={product.variants[0].id}
            >
              Add to Bag
            </AddToCartButton>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductCard;
