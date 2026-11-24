import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>M.EVS</h1>
      <nav>
        <Link to="/">Home</Link>
        <div className="dropdown">
          <a href="#departments" className="dropdown-toggle">
            Departments
            <span className="arrow">&#9660;</span>
          </a>
          <div className="dropdown-menu">
            <Link to="/guitars">Guitars</Link>
            <Link to="/headless-guitars">Headless Guitars</Link>
            <Link to="/basses">Bass</Link>
            <Link to="/amplifiers">Amplifiers</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
        <a href="#faq">FAQ</a>
        <div className="search_container">
          <form
            action="/search"
            method="get"
            onSubmit={(event) => event.preventDefault()}
          >
            <input type="search" name="q" id="search" placeholder="Search..." />
            <button type="submit" className="search-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default Header
