import SectionHeader from '../components/SectionHeader'
import BrandSection from '../components/BrandSection'
import '../styles/bassespage.css'

const warwickProducts = [
  {
    image: '/images/Warwick Bass 1 image.jpg',
    alt: 'Warwick Rockbass Fortress',
    title:
      'Warwick Rockbass Fortress, 4-String - Burgundy Red Transparent Satin',
    price: 'Rs 79,999',
  },
  {
    image: '/images/Warwick Bass 2 image.jpg',
    alt: 'Warwick RockBass Artist Line',
    title:
      'Warwick RockBass Artist Line Robert Trujillo, 4-String - Solid Black Satin',
    price: 'Rs 239,999',
  },
  {
    image: '/images/Warwick Bass 3 image.jpg',
    alt: 'Warwick Masterbuilt Thumb NT',
    title: 'Warwick Masterbuilt Thumb NT, 4-String - Natural Oil Finish',
    price: 'Rs 269,99',
  },
  {
    image: '/images/Warwick Bass 4 image.jpg',
    alt: 'Warwick RockBass Vampyre',
    title: 'Warwick RockBass Vampyre, 5-String - Solid Black High Polish',
    price: 'Rs 89,999',
  },
  {
    image: '/images/Warwick Bass 5 image.jpg',
    alt: 'Warwick Pro Series Corvette Standard',
    title:
      'Warwick Pro Series Corvette Standard | 6 String | Active | Bubinga | Natural Transparent Satin',
    price: 'Rs 259,999',
  },
]

function Basses() {
  return (
    <main className="page-basses">
      <section className="page-title-section">
        <SectionHeader title="Bass" />
      </section>

      <BrandSection
        logo="/images/Warwick logo.jpg"
        alt="Warwick"
        products={warwickProducts}
      />
    </main>
  )
}

export default Basses
