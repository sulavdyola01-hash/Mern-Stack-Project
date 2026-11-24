import SectionHeader from '../components/SectionHeader'
import BrandSection from '../components/BrandSection'
import '../styles/headlessguitarspage.css'

const hexProducts = [
  {
    image: '/images/Headless Guitars 1 image.jpg',
    alt: 'Hex N500P S/BK Electric Guitar',
    title: 'Hex N500P S/BK Electric Guitar with Deluxe Bag, Black',
    price: 'Rs 58,500',
  },
  {
    image: '/images/Headless Guitars 2 image.jpg',
    alt: 'Hex Next N400 Headless Electric Guitar',
    title: 'Hex Next N400 Headless Electric Guitar with Deluxe Bag, Ivory',
    price: 'Rs 49,999',
  },
  {
    image: '/images/Headless Guitars 3 image.jpg',
    alt: 'Hex N600 G/UV Electric Guitar',
    title: 'Hex N600 G/UV Electric Guitar with Deluxe Bag, Ultra Violet',
    price: 'Rs 95,000',
  },
  {
    image: '/images/Headless Guitars 4 image.jpg',
    alt: 'Hex N500P S/SS Electric Guitar',
    title: 'Hex N500P S/SS Electric Guitar with Deluxe Bag, Summer Sand',
    price: 'Rs 58,500',
  },
]

function HeadlessGuitars() {
  return (
    <main className="page-headless">
      <section className="page-title-section">
        <SectionHeader title="Headless Guitars" />
      </section>

      <BrandSection
        logo="/images/Hex logo.jpg"
        alt="HEX Instruments"
        products={hexProducts}
      />
    </main>
  )
}

export default HeadlessGuitars
