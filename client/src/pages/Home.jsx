import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import '../styles/homepage.css'

const bestSelling = [
  {
    image: '/images/Best Selling 1 imagejpg.jpg',
    alt: 'Smiger LG1-M HSS Stratocaster',
    title: 'Smiger LG1-M HSS Stratocaster Electric Guitar with Package',
    price: 'Rs 21,500',
  },
  {
    image: '/images/Best selling 2 image.jpg',
    alt: 'Manaslu Shree 38 Inch',
    title: 'Manaslu Shree 38 Inch Beginner Acoustic Guitar with Package',
    price: 'Rs 5,000',
  },
  {
    image: '/images/Best selling 3 image.jpg',
    alt: 'Manaslu MG5 Semi',
    title: 'Manaslu MG5 Semi - Acoustic Guitar With Package, Natural',
    price: 'Rs 15,499',
  },
  {
    image: '/images/Best selling 4 image.jpg',
    alt: 'Smiger GB1 4 String',
    title: 'Smiger GB1 4 String Electric Bass Guitar, Sunburst',
    price: 'Rs 15,500',
  },
  {
    image: '/images/Best selling 5 image.jpg',
    alt: 'Manaslu MG Black',
    title: 'Manaslu MG Black Acoustic Guitar With Package',
    price: 'Rs 8,999',
  },
  {
    image: '/images/Best selling 6 image.jpg',
    alt: 'Manaslu CL-Starter',
    title: 'Manaslu CL-Starter Classical Guitar with Bag, Black',
    price: 'Rs 8,500',
  },
]

const brands = [
  { logo: '/images/Ibanez logo.jpg', alt: 'Ibanez' },
  { logo: '/images/Schecter logo.jpg', alt: 'Schecter Guitar Research' },
  { logo: '/images/Hex logo.jpg', alt: 'HEX Instruments' },
  { logo: '/images/Warwick logo.jpg', alt: 'Warwick' },
]

function Home() {
  return (
    <main className="page-home">
      <section className="hero-section">
        <img
          src="/images/hex big image.jpg"
          alt="HEX NEXT SERIES N600 - New Arrival"
          className="hero-image"
        />
      </section>

      <section className="promo-cards">
        <div className="promo-card">
          <img src="/images/Our Products Image.jpg" alt="Our Products" />
        </div>
        <div className="promo-card">
          <img src="/images/Sales image.jpg" alt="On Sale - Up to 30% Off" />
        </div>
        <div className="promo-card">
          <img
            src="/images/Buying guidelines image.jpg"
            alt="Buying Guidelines"
          />
        </div>
      </section>

      <section className="best-selling-section">
        <SectionHeader title="Best Selling" />

        <div className="product-grid">
          {bestSelling.map((product) => (
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

      <section className="brands-section">
        <SectionHeader title="Our Brands" />

        <div className="brands-grid">
          {brands.map((brand) => (
            <img
              key={brand.logo}
              src={brand.logo}
              alt={brand.alt}
              className="brand-logo"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
