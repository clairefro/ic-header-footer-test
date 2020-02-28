import React from "react"
import { Link } from "gatsby"
import logo from "../../static/images/logo-bitmap.png"
import avatar from "../../static/images/avatar.png"

const Header = (props) => (
  <div className="header">
    <Link to="/">
      <img src={logo} className="logo" alt="inCorpus"/>
    </Link>

    <div className="nav-links-left">
      <Link to="/">
        <span>Solutions</span>
      </Link>
      <Link to="/">
        <span>Science</span>
      </Link>
      <Link to="/">
        <span>Experiences</span>
      </Link>
      <Link to="/">
        <span>News</span>
      </Link>
    </div>

    <div className="nav-links-right">
      <Link to="/" className="cta-button">
        <span>Essayez</span>
      </Link>
      <Link to="/">
        <img src={avatar} className="avatar" alt="membres"/>
      </Link>
    </div>
  </div>
)

export default Header;
