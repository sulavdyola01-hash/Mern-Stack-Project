import ProductCard from './ProductCard'

function BrandSection({ logo, alt, products }) {
  return (
    <section className="brand-section">
      <div className="brand-logo-container">
        <img src={logo} alt={alt} className="brand-logo-large" />
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.image}
            image={product.image}
            alt={product.alt}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}

export default BrandSection
