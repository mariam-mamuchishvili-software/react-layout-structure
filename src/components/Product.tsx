import type { Product } from "../types/product.types";

export default function ProductCard({ product }: { product: Product }) {
  const {
    id,
    title,
    description,
    category,
    brand,
    model,
    price,
    discount,
    rating,
    tags = [],
    images = [],
    thumbnail,
    with_gifts,
    is_new,
  } = product;

  //  Validation and normalize
  const normalizedBrand = brand?.trim() || "Unbranded";
  const normalizedModel = model?.trim() || "";

  const normalizedPrice = Number(price ?? 0);
  const normalizedDiscount = Number(discount ?? 0);
  const normalizedRating = Number(rating ?? 0).toFixed(1);

  const withGifts = Boolean(with_gifts);
  const isNew = Boolean(is_new);

  const hasDiscount = normalizedDiscount > 0;

  const discountedPrice = hasDiscount
    ? (normalizedPrice - (normalizedPrice * normalizedDiscount) / 100).toFixed(
        2,
      )
    : null;

  return (
    <article className="product-card" data-id={id}>
      <div className="component-inner">
        {/* HEADER / MEDIA */}
        <header className="component-head">
          <div className="product-media">
            <div className="product-badges">
              {isNew && <span className="badge badge-new">New</span>}

              {withGifts && (
                <span className="badge badge-gift">With Gifts</span>
              )}

              {hasDiscount && (
                <span className="badge badge-discount">
                  -{normalizedDiscount.toFixed(0)}%
                </span>
              )}
            </div>

            <div className="product-thumbnail">
              <img src={thumbnail} alt={title} />
            </div>

            {images.length > 0 && (
              <div className="product-gallery">
                {images.map((src, index) => (
                  <button key={index} className="gallery-thumb" type="button">
                    <img src={src} alt={title} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* BODY */}
        <main className="component-body">
          <div className="component-holder">
            <div className="product-meta">
              <span className="product-category">{category}</span>
              <span className="product-brand">{normalizedBrand}</span>

              {normalizedModel && (
                <span className="product-model">{normalizedModel}</span>
              )}
            </div>

            <div className="product-header">
              <h3 className="product-title">{title}</h3>

              <div
                className="product-rating"
                aria-label={`Rating ${normalizedRating} out of 5`}
              >
                <span className="rating-value">{normalizedRating}</span>
                <span className="rating-max">/ 5</span>
              </div>
            </div>

            <div className="product-description">
              <p>{description}</p>
            </div>

            {tags.length > 0 && (
              <div className="product-tags">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="product-pricing">
              <div className="price-block">
                {hasDiscount ? (
                  <>
                    <span className="price-current">${discountedPrice}</span>
                    <span className="price-discount">
                      Was ${normalizedPrice.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="price-current">
                    ${normalizedPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary" type="button">
                Add to Cart
              </button>

              <button className="btn btn-secondary" type="button">
                View Details
              </button>
            </div>
          </div>
        </main>
      </div>
    </article>
  );
}
