import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Counted</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/periods">
                  Periods
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar