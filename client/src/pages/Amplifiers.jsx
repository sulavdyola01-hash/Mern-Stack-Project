import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import '../styles/amplifierspage.css'

const amplifiers = [
  {
    image: '/images/Amp 1 image.jpg',
    alt: 'Boss Katana 50 Mark 2',
    title: 'Boss Katana 50 Mark 2 Guitar Amplifier',
    price: 'Rs 42,500',
  },
  {
    image: '/images/Amp 2 image.jpg',
    alt: 'Laney MINI-STB Bluetooth',
    title:
      'Laney MINI-STB Bluetooth Battery Powered 6W Guitar Amp with Smartphone Interface, Lionheart edition',
    price: 'Rs 12,000',
  },
  {
    image: '/images/Amp 3 image.jpg',
    alt: 'Smiger TG-30',
    title: 'Smiger TG-30 Guitar Amplifier, 30W',
    price: 'Rs 9,000',
  },
  {
    image: '/images/Amp 4 image.jpg',
    alt: 'Laney Digbeth DB200H',
    title: 'Laney Digbeth DB200H 200-watt Bass Amplifier Head',
    price: 'Rs 65,000',
  },
  {
    image: '/images/Amp 5 image.jpg',
    alt: 'Laney MINISTACK Bluetooth',
    title:
      'Laney MINISTACK Bluetooth Battery 6W Powered Guitar Amp with Smartphone Interface, Ironheart edition',
    price: 'Rs 15,500',
  },
  {
    image: '/images/Amp 6 image.jpg',
    alt: 'Laney GS Series GS412IA',
    title:
      'Laney GS Series GS412IA Guitar Cabinet, 4x HH Custom,12 inch Speakers',
    price: 'Rs 60,000',
  },
]

function Amplifiers() {
  return (
    <main className="page-amplifiers">
      <section className="page-title-section">
        <SectionHeader title="Amplifiers" />
      </section>

      <section className="amplifiers-section">
        <div className="product-grid">
          {amplifiers.map((product) => (
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
    </main>
  )
}

export default Amplifiers
