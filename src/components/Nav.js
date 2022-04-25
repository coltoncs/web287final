import { Link } from "react-router-dom";
import { VscGithub, VscTwitter } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { AiFillMessage } from 'react-icons/ai';

const Nav = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li>
          <a className="nav-link" href="https://myweb287blog.wordpress.com/">
            Blog
          </a>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="links">
        <li>
          <a
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/coltoncs"
          >
            <VscGithub size="2rem"/>
          </a>
        </li>
        <li>
          <a
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mobile.twitter.com/coltonsdev"
          >
            <VscTwitter size="2rem"/>
          </a>
        </li>
        <li>
          <a
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/colton-sweeney/"
          >
            <SiLinkedin size="2rem"/>
          </a>
        </li>
        <li>
          <a
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://coltonsweeney.com"
          >
            <AiFillMessage size="2rem"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
