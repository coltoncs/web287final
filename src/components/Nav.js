import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { VscGithub, VscTwitter } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { AiFillMessage } from 'react-icons/ai';

const NavBar = styled.nav`
  height: 100vh;
  width: 100%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 15vh;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    position: fixed;
    width: 30vw;
  }
`;

const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  font-weight: 800;
  font-size: 2rem;
  height: 50%;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    flex-direction: row;
  }
`;

const SocialNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`;

const Nav = () => {
  return (
    <NavBar>
      <Navigation>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="nav-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <a className="nav-link" href="https://myweb287blog.wordpress.com/">
            Blog
          </a>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </Navigation>
      <SocialNav>
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
      </SocialNav>
    </NavBar>
  );
};

export default Nav;
