import React from "react"
import { Link } from "gatsby"
import insta from "../../static/images/instagram.svg"
import fb from "../../static/images/facebook.svg"
import twitter from "../../static/images/twitter.svg"

const Footer = (props) => (
  <div className="footer">
    <div className="social-media">
      <Link to="/">
        <i class="lab la-facebook-f"></i>
      </Link>
      <Link to="/">
        <i class="lab la-instagram"></i>
      </Link>
      <Link to="/">
        <i class="lab la-twitter"></i>
      </Link>
    </div>
    <div className="link-group-wrapper link-group-named-navigation">
      <div className="link-group">
        <p className="link-group-title">Navigation</p>
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/">
          <p>Membre</p>
        </Link>
        <Link to="/">
          <p>Solutions</p>
        </Link>
        <Link to="/">
          <p>Science</p>
        </Link>
        <Link to="/">
          <p>Expérience</p>
        </Link>
        <Link to="/">
          <p>News</p>
        </Link>
      </div>

      <div className="link-group link-group-named-company">
        <p className="link-group-title">Compagnie</p>
        <Link to="/">
          <p>Be.Care</p>
        </Link>
        <Link to="/">
          <p>Vision</p>
        </Link>
        <Link to="/">
          <p>Protocole</p>
        </Link>
        <Link to="/">
          <p>Équipe</p>
        </Link>
        <Link to="/">
          <p>Comité scientifiques</p>
        </Link>
        <Link to="/">
          <p>Press Room</p>
        </Link>
        <Link to="/">
          <p>Politique de confidentialité</p>
        </Link>
        <Link to="/">
          <p>Mentions légales</p>
        </Link>
      </div>
      <div className="link-group link-group-named-contact">
        <p className="link-group-title">Nous Contacter</p>
        <Link to="/">
          <p>Démo</p>
        </Link>
        <Link to="/">
          <p>Newsletter</p>
        </Link>
        <Link to="/">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  </div>
)

export default Footer;
