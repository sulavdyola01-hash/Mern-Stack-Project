import SectionHeader from '../components/SectionHeader'
import BrandSection from '../components/BrandSection'
import '../styles/guitarspage.css'

const ibanezProducts = [
  {
    image: '/images/Ibanez 1 image.jpg',
    alt: 'Ibanez RGA742FM',
    title: 'Ibanez RGA742FM',
    price: 'Rs 79,999',
  },
  {
    image: '/images/Ibanez 2 image.jpg',
    alt: 'Ibanez RGA20P1PB',
    title: 'Ibanez RGA20P1PB',
    price: 'Rs 239,999',
  },
  {
    image: '/images/Ibanez 3 image.jpg',
    alt: 'Ibanez RGDRB71',
    title: 'Ibanez RGDRB71',
    price: 'Rs 149,999',
  },
  {
    image: '/images/Ibanez 4.jpg',
    alt: 'Ibanez RG8520',
    title: 'Ibanez RG8520',
    price: 'Rs 399,999',
  },
]

const schecterProducts = [
  {
    image: '/images/Schecter 1 image.jpg',
    alt: 'Synyster Custom',
    title: (
      <>
        Synyster Custom
        <br />
        Gloss Black with Silver Pinstripes
      </>
    ),
    price: 'Rs 199,999',
  },
  {
    image: '/images/Schecter 2 image.jpg',
    alt: 'Synyster Custom-S',
    title: (
      <>
        Synyster Custom-S
        <br />
        Gloss Black with Gold Pinstripes
      </>
    ),
    price: 'Rs 229,999',
  },
  {
    image: '/images/Schecter 3 image.jpg',
    alt: 'Zacky Vengeance Custom Reissue',
    title: (
      <>
        Zacky Vengeance Custom Reissue
        <br />
        See Thru Cherry with 6661 Graphic
      </>
    ),
    price: 'Rs 169,999',
  },
  {
    image: '/images/Schecter 4 image.jpg',
    alt: 'Synyster Gates',
    title: (
      <>
        Synyster Gates &apos;Syn AC-GA SC&apos; Acoustic
        <br />
        Gloss Black with Silver Pinstripes
      </>
    ),
    price: 'Rs 84,999',
  },
]

function Guitars() {
  return (
    <main className="page-guitars">
      <section className="page-title-section">
        <SectionHeader title="Guitars" />
      </section>

      <BrandSection
        logo="/images/Ibanez logo.jpg"
        alt="Ibanez"
        products={ibanezProducts}
      />

      <BrandSection
        logo="/images/Schecter logo.jpg"
        alt="Schecter Guitar Research"
        products={schecterProducts}
      />
    </main>
  )
}

export default Guitars
